/**
 * The home page's words, section by section, in the order
 * src/pages/index.astro shows them. Inline HTML (<strong>, <em>, <a>) is
 * allowed in paragraph strings; <strong> renders bold inside `.copy` blocks.
 *
 * This page is where the owner's direct-mail postcard sends people (its QR
 * code), so the headline and the plate's description are the postcard's own
 * words. Others are from his Facebook post of October 2026, his note to the
 * Portsea agents of December 2024 and his domain letter of December 2013. The
 * owner asked for his name to stay off the site.
 *
 * Photographs go in src/assets/ and are imported here, so the build sizes
 * them and the tests can check them.
 */
import type { ImageMetadata } from 'astro';
import book from '../assets/book.jpg';
import certificate from '../assets/certificate.jpg';
import plateInCase from '../assets/plate-in-case.jpg';

export const HERO = {
  /** A short line above the headline, or empty for none. */
  eyebrow: 'Portsea’s postcode is for sale.',
  /** A no-break space keeps 'plate 3944' together. */
  headline: 'Victorian Heritage Plate 3944',
  /** A no-break space keeps 'sell you.' together, so the line never ends on a lone word. */
  subheadline: 'The only piece of Portsea no agent can sell\u00a0you.',
  /** One line under every button, or empty: what happens next, a guarantee, a limit. */
  note: 'The domain portsea.com.au is for sale too, together or separately.',
  /** A picture beside the words (above them on phones), or leave both out. It loads first. */
  image: plateInCase as ImageMetadata | undefined,
  alt: 'The VIC 3944 Heritage plate, black enamel with white numerals, in its presentation case above the Heritage Plates book and the signed and sealed VicRoads certificate',
};

/** Short facts under the hero's button: up to four. An empty list hides the row. */
export const PROOF: { value: string; label: string }[] = [];

export const PLATE = {
  title: 'The plate',
  paragraphs: [
    'There’s one Heritage plate that carries Portsea’s postcode, and this is it: vitreous-enamel finish, a faithful recreation of the 1932–39 originals, with its VicRoads certificate of authenticity and presentation case.',
  ],
  lead: 'What comes with it',
  items: [
    'Brand-new VIC 3944 Heritage plates',
    'The VicRoads presentation case',
    'The certificate of authenticity, signed and sealed',
    'The book, <em>Heritage Plates: The Story of an Icon</em>',
  ],
};

/** Close-ups under the plate's details. */
export const PHOTOS = [
  {
    image: certificate,
    alt: 'The VicRoads Heritage Plates certificate for plate 3944, signed by the chief executive of VicRoads Registration and Licensing Services, with a red wax seal',
    caption: 'The certificate, signed by VicRoads’ chief executive and sealed in red wax.',
  },
  {
    image: book,
    alt: 'The cover of the book Heritage Plates: The Story of an Icon, in gold lettering on brown cloth, in the presentation case',
    caption: 'The book that comes in the case.',
  },
];

export const SELLER = {
  title: 'Why it’s for sale',
  paragraphs: ['We’re moving out of the area, so it needs a new home. I’d rather it stayed on Point Nepean Road than went to a collector interstate.'],
};

/** The line above the button between the sections. */
export const GIFT_CTA = 'Buying for a Portsea resident who already has everything? This is the one thing they haven’t got.';

export const DOMAIN = {
  eyebrow: 'The domain',
  title: 'portsea.com.au',
  paragraphs: [
    'The domain portsea.com.au is for sale too, together with the plate or separately.',
    'There is only one portsea.com.au, and I’ve held it for more than ten years. It’s the address people type when they mean Portsea.',
    'For a Portsea business or agent, it’s a name customers already know. Once it’s yours, no competitor can have it, for any amount of money.',
    'It comes with <strong>portsea.au</strong>, the same name without the “com”.',
  ],
};

export const FAQS = {
  title: 'Questions',
  items: [
    {
      question: 'Can I buy just the plate, or just the domain?',
      answer: 'Yes. They’re for sale together or separately. Tell me which you’re after when you get in touch.',
    },
    {
      question: 'Is there an asking price?',
      answer: 'I’m inviting offers. Tell me what you have in mind and I’ll come back to you.',
    },
    {
      question: 'What is a Heritage plate?',
      answer: 'A VicRoads Heritage plate is a faithful recreation of Victoria’s original vitreous-enamel number plates, issued by the Chief Commissioner of Police under the 1932 Motor Car Act between 1932 and 1939. This one carries 3944, Portsea’s postcode.',
    },
  ],
};

export const CONTACT_SECTION = {
  title: 'Make an enquiry',
  lead: 'Tell me which you’re interested in (the plate, the domain or both) and how best to reach you. I’ll reply personally.',
  /** Under the form; the page adds the email address after it. */
  note: 'Your details come straight to me, and I’ll use them only to reply.',
};
