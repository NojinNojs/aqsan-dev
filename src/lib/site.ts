import {
  PUBLIC_SITE_URL,
  PUBLIC_EMAIL,
  PUBLIC_GITHUB_URL,
  PUBLIC_INSTAGRAM_URL,
  PUBLIC_LINKEDIN_URL,
  PUBLIC_WHATSAPP,
} from 'astro:env/client';

function present(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function toWhatsappHref(value: string | undefined): string | undefined {
  const raw = present(value);
  if (!raw) return undefined;
  if (/^https?:\/\//i.test(raw)) return raw;
  return `https://wa.me/${raw.replace(/\D/g, '')}`;
}

export const siteUrl = present(PUBLIC_SITE_URL) ?? 'https://aqsan.dev';
export const siteName = 'Aqsan.dev';
export const authorName = 'Muhammad Raffi Aqsan';
export const authorRole = 'Junior Software Developer & IT Support Technician';
export const defaultDescription =
  'Portfolio of Muhammad Raffi Aqsan — Junior Software Developer & IT Support Technician from Indonesia with 6 months internship experience at BRIN. Building pragmatic web applications (React, Next.js, Astro, Laravel, Express) and troubleshooting IT systems.';

export const siteKeywords = [
  'Muhammad Raffi Aqsan',
  'Raffi Aqsan',
  'Aqsan',
  'Aqsan.dev',
  'Junior Software Developer',
  'Web Developer Indonesia',
  'IT Support Technician',
  'BRIN Pusdatin',
  'Fullstack Developer',
  'Frontend Developer',
  'React',
  'Next.js',
  'Astro',
  'Laravel',
  'Express',
  'TypeScript',
  'Tailwind CSS',
  'Vocational Software Engineering',
];

export const email = present(PUBLIC_EMAIL);
export const mailtoHref = email ? `mailto:${email}` : undefined;
export const whatsappHref = toWhatsappHref(PUBLIC_WHATSAPP);

export const socials = [
  { label: 'GitHub', href: present(PUBLIC_GITHUB_URL), icon: 'simple-icons:github' },
  { label: 'LinkedIn', href: present(PUBLIC_LINKEDIN_URL), icon: 'simple-icons:linkedin' },
  { label: 'Instagram', href: present(PUBLIC_INSTAGRAM_URL), icon: 'simple-icons:instagram' },
  { label: 'WhatsApp', href: whatsappHref, icon: 'simple-icons:whatsapp' },
  { label: 'Email', href: mailtoHref, icon: 'lucide:mail', external: false },
].filter((link): link is { label: string; href: string; icon: string; external?: boolean } => Boolean(link.href));

// Social URLs for Schema.org Knowledge Graph (excludes email/whatsapp)
export const sameAsUrls = [
  present(PUBLIC_GITHUB_URL),
  present(PUBLIC_LINKEDIN_URL),
  present(PUBLIC_INSTAGRAM_URL),
].filter((url): url is string => Boolean(url));
