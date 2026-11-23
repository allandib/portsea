/**
 * Site-wide facts. Change one here and every page follows.
 *
 * tests/site.test.mjs imports this file directly (Node strips the types), so
 * keep it plain: no enums, no imports of images. The brand (colours, fonts,
 * logo, icons) lives in DESIGN.md, not here.
 */
export const SITE = {
  /** The business name: page titles, the footer, and the header when DESIGN.md sets no logo. */
  name: 'Portsea 3944',
  /**
   * The address the site is on, no trailing slash. Canonical links, the
   * sitemap and robots.txt use it. Until the site has its own domain, this is
   * its workers.dev address.
   */
  url: 'https://portsea.com.au',
  /** The home page's description, under 160 characters. */
  description: 'Portsea’s postcode is for sale: Victorian Heritage plate 3944, with its VicRoads certificate and presentation case. And the domain portsea.com.au.',
  /** Analytics load on this hostname only, so previews and workers.dev visits never reach the numbers. */
  liveHost: 'portsea.com.au',
  /** The GA4 measurement id, or empty for no analytics. */
  gaId: '',
  /** The handle shown on Twitter cards, or empty. */
  xHandle: '',
} as const;

/**
 * Header navigation. Anchors point at sections of the home page. Phones get
 * the same links in a menu. An empty list makes a one-page site: the header
 * shows the logo and the button.
 */
export const NAV: { href: string; label: string }[] = [
  { href: '/#plate', label: 'The plate' },
  { href: '/#domain', label: 'The domain' },
  { href: '/#faqs', label: 'Questions' },
];

/**
 * The one call to action: the button in the header, in the hero and between
 * sections. `href` is a section of the home page, another page, or a full
 * address (a booking page, a checkout). An empty label means no button.
 */
export const CTA = {
  label: 'Make an enquiry',
  href: '/#contact',
} as const;

/** Footer navigation. */
export const FOOTER_LINKS = [{ href: '/contact', label: 'Contact' }];

/** How to reach the business: the contact page, and the home page's contact section when there is no form. */
export const CONTACT = {
  email: 'allan@dib.net',
  /** The phone number as it should be shown, or empty for none. */
  phone: '',
  /** The same number as a link, such as 'tel:+61400000000', or empty. */
  phoneHref: '',
  /** The postal address, one line per entry, or an empty list for none. */
  address: [] as string[],
};

/**
 * The contact form is a GoHighLevel embed (Lean CRM is GoHighLevel); see
 * src/lib/ghl.ts for the rules. Both values come from the form's embed code:
 * `host` is the start of its address, such as 'https://forms.example.com',
 * and `contact` is the form's id, the last part of the same address. An empty
 * `contact` means no form: the contact page and the home page's contact
 * section show the email address instead. `contactHeight` is the height the
 * embed code gives; the frame starts at that height until GHL's script sizes
 * it.
 */
export const FORMS = {
  host: '',
  contact: '',
  contactName: 'Portsea enquiry',
  contactHeight: 600,
} as const;

/**
 * The enquiry form this site uses instead of a GoHighLevel embed, at the
 * owner's request: a plain HTML form (src/components/EnquiryForm.astro) that
 * posts to a Zapier catch hook. The Zapier workflow behind it, "Portsea Sale
 * Enquiries" in the owner's Zapier account, emails each enquiry to the owner
 * with Reply-To set to the buyer. The page sends the form in the background
 * and then shows /thanks. The workflow drops anything that fills the hidden
 * `trap` field, which people never see. An empty `action` means no form: the
 * email address shows instead.
 */
export const ENQUIRY = {
  action: 'https://hooks.zapier.com/hooks/catch/25468590/CN21fVRPamM1m0Emz/',
  /** The hidden field that catches bots. The Zapier workflow reads the same name. */
  trap: 'leave_empty',
  /** What the visitor is interested in: `value` is what the email shows, and the workflow accepts only these. */
  choices: [
    { value: 'The plate', label: 'The plate, VIC 3·944' },
    { value: 'The domain', label: 'The domain, portsea.com.au' },
    { value: 'Both', label: 'Both' },
  ],
} as const;
