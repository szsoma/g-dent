// English copy for the /en/ pages. Mirrors the exports of ./site.ts one for one,
// so each page can swap the whole module without changing its markup.

export const site = {
  name: 'G-Dent',
  tagline: 'private dental practice',
  phoneLabel: '06/30-945-2470',
  phoneHref: 'tel:+36309452470',
  email: 'gdent@t-email.hu',
  emailHref: 'mailto:gdent@t-email.hu',
  address: '3580 Tiszaújváros, Tompa Mihály út 30.',
  addressShort: 'Tiszaújváros · Tompa Mihály út 30.',
  ogImageAlt: 'G-Dent private dental practice in Tiszaújváros',
  structuredServices: [
    'Specialist dental and oral care',
    'Panoramic X-ray',
    'Dental prosthetics and implants',
    'Pediatric dentistry',
  ],
} as const;

export const navItems = [
  { label: 'Services', href: '#szolgaltatasok' },
  { label: 'Opening hours', href: '#nyitvatartas' },
  { label: 'Health funds', href: '#penztarak' },
  { label: 'Contact', href: '#kapcsolat' },
];

export const header = {
  menuAriaLabel: 'Open menu',
  menuCloseAriaLabel: 'Close menu',
  menuCtaLabel: 'book an appointment',
  navAriaLabel: 'Main menu',
  mobileNavAriaLabel: 'Mobile menu',
  homeAriaLabel: 'back to the top of the page',
  languageSwitch: { label: 'HU', href: '/', hreflang: 'hu' },
};

export const hero = {
  eyebrow: 'Tiszaújváros · Tompa Mihály út 30.',
  headingLead: 'Painless dentistry',
  headingAccent: 'in a family atmosphere',
  headingEnd: '.',
  lead: 'A pleasant setting, experienced specialist doctors and high-standard care await our patients — from diagnostics to dental prosthetics, all under one roof.',
  primaryCtaLabel: 'Book an appointment',
  secondaryCtaLabel: 'Our services',
  facts: [
    { label: 'Appointments', value: '06/30-945-2470', href: 'tel:+36309452470' },
    { label: 'Email', value: 'gdent@t-email.hu', href: 'mailto:gdent@t-email.hu' },
    { label: 'Panoramic X-ray', value: 'On site, in Tiszaújváros' },
  ],
  imageSideCaption: 'The clinic’s second waiting room',
  namePlate: 'Dr. Rózsa Ildikó · specialist in dental and oral diseases',
};

export const services = {
  eyebrow: 'Our services',
  heading: 'Everything a family needs from its dental practice',
  intro:
    'From prevention to more complex dental prosthetics, you can take care of everything in one place.',
  items: [
    {
      index: '01',
      title: 'Examination and hygiene',
      items: [
        'Condition assessment',
        'Oral hygiene counselling',
        'Ultrasonic scaling (tartar removal)',
        'Periodontal pocket treatment',
        'Ozone therapy',
      ],
    },
    {
      index: '02',
      title: 'Imaging diagnostics',
      items: ['Panoramic X-ray (Tiszaújváros only)', 'Intraoral X-ray'],
      note: 'Images are taken in our clinic — you do not need to travel to another facility.',
    },
    {
      index: '03',
      title: 'Fillings and root canal treatment',
      items: [
        'Aesthetic composite fillings',
        'Inlays, onlays',
        'Root canal treatment',
        'Electrosurgical treatments',
      ],
    },
    {
      index: '04',
      title: 'Dental prosthetics and implants',
      items: [
        'Removable and fixed dental prostheses',
        'Metal, ceramic and zirconia crowns, bridges and posts',
        'Dental implants',
      ],
    },
    {
      index: '05',
      title: 'Cosmetic dentistry',
      items: ['Teeth whitening', 'Custom dental jewelry'],
    },
    {
      index: '06',
      title: 'Pediatric dentistry',
      items: ['Complete pediatric dental care'],
      note:
        'For our youngest patients we offer gentle, patient treatment adapted to their age and temperament.',
    },
  ],
};

export const team = {
  eyebrow: 'Our doctors',
  heading: 'One specialist who knows every patient',
  imageCaption:
    'The treatment room — we welcome our patients in a comfortable, clean and calm environment.',
  items: [
    {
      name: 'Dr. Rózsa Ildikó',
      role: 'Specialist in dental and oral diseases',
      description:
        'As the clinic’s primary dentist, Dr. Rózsa Ildikó provides complete care — from preventive oral hygiene and root canal treatment to dental prosthetics and pediatric dentistry.',
      phone: '06/30/945-24-70',
      phoneHref: 'tel:+36309452470',
      email: 'gdent@t-email.hu',
      focus: ['Panoramic X-ray', 'Dental prosthetics', 'Pediatric dentistry'],
    },
  ],
};

// Day names as they are stored in the Hungarian `hours` collection. Monday is
// listed with and without the accent, because the entry file spells it "Hetfő".
export const dayNames: Record<string, string> = {
  Hetfő: 'Monday',
  Hétfő: 'Monday',
  Kedd: 'Tuesday',
  Szerda: 'Wednesday',
  Csütörtök: 'Thursday',
  Péntek: 'Friday',
};

export const hours = {
  eyebrow: 'Opening hours',
  heading: 'When can we see you?',
  intro:
    'Please book by phone. That keeps waiting times to a minimum, so every patient receives our full attention.',
  addressNote: 'Our clinic: 3580 Tiszaújváros, Tompa Mihály út 30.',
};

export const insurance = {
  eyebrow: 'Health funds',
  heading: 'Health fund payments — made easy',
  intro:
    'We can settle accounts directly with our contracted health funds. If needed, the clinic can also sign a contract with another health fund.',
  items: [
    'NAVOSZ',
    'Aranykor',
    'Patika',
    'Vasutas',
    'AXA',
    'MKB',
    'TEMPO',
    'OTP',
    'DIMENZI',
    'PRO VITA',
    'GENERALI',
    'MEDICINA',
    'Allianz',
    'K&H',
    'Vitamin',
  ],
};

export const contact = {
  eyebrow: 'Contact',
  heading: 'Book an appointment in Tiszaújváros',
  intro:
    'Feel free to call us during our opening hours, or send us an email. Either way, we will get back to you as soon as possible.',
  imageCaption: 'The clinic entrance on Tompa Mihály Street.',
  addressLabel: 'Address',
  hoursLabel: 'Opening hours',
};

export const footer = {
  description:
    'G-Dent Kft · private dental practice in Tiszaújváros. Family atmosphere, a pleasant setting, painless treatment.',
  sitemapTitle: 'Sitemap',
  contactTitle: 'Contact',
  contactLinks: [
    { label: '06/30-945-2470', href: 'tel:+36309452470' },
    { label: 'gdent@t-email.hu', href: 'mailto:gdent@t-email.hu' },
    { label: '3580 Tiszaújváros, Tompa Mihály út 30.', href: '#kapcsolat' },
  ],
  copyright: '© 2026 G-Dent Kft · All rights reserved.',
};
