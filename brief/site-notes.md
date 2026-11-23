# Site notes: decisions the owner has made

For any session that changes this site later. This repository is public, so
nothing private goes in here: no phone numbers, prices or mailing details.

## What the site is

The sale page for Victorian Heritage plate 3944 (VIC 3944, Portsea's
postcode) and the domain portsea.com.au (with portsea.au), for sale together
or separately. It is the landing page for the owner's direct-mail postcard to
postcode 3944: the card's QR code points to https://portsea.com.au, so the
site has to be on that domain before the cards land. The headline and the
plate's description are the postcard's own words; keep the two in step if
either changes.

## Decisions (November 2026)

- **No name on the site.** The owner asked for his name to stay off it. The
  suburb he lives in is off it too.
- **Email:** DomainServicesCo@gmail.com is the address shown, everywhere on
  the site (`CONTACT.email`). No phone number. The owner's own address stays
  off the site and out of this repository.
- **No "How it works" section.** The owner took it out.
- **The plate number is written 3944,** with no dot (not 3·944 or 3.944), in
  all the site's text. The photographs show the plate as it is.
- **Price:** offers invited, no figure. If the owner settles on one (the
  postcard has a slot for "Offers over $…"), put the same line on the site:
  the hero and the "Is there an asking price?" question.
- **portsea.au** is included with portsea.com.au.
- **The form is Zapier, not GoHighLevel**, at the owner's request (he turned
  down GoHighLevel and then n8n). `ENQUIRY` in `src/data/site.ts` holds the
  catch-hook address; `src/components/EnquiryForm.astro` sends the form in the
  background and then shows `/thanks`. The Zapier workflow, "Portsea Sale
  Enquiries" in the owner's Zapier account, emails each enquiry to the owner
  with Reply-To set to the buyer, and drops anything that fills
  the hidden `leave_empty` field. Don't swap it for a GoHighLevel embed.
- **Photos** are the owner's own, from his Facebook post, cut from a phone
  screenshot. Full-size originals would be better when he has them.
- **Look** follows the postcard: Poppins, black, and the card's gold.
