import { Topic } from '@/lib/types'

export const basePath = '/2025'

export const BEVY_RSVP_URL =
  'https://gdg.community.dev/events/details/google-gdg-taipei-presents-devfest-taipei-2025/cohost-gdg-cloud-taipei'

export const socialLinks = [
  { name: 'Discord', href: 'https://discord.gg/EfBRZk6Ejz', icon: 'lineicons:discord', size: 28 },
  { name: 'Facebook', href: 'https://facebook.com/gdg.taipei', icon: 'lineicons:facebook', size: 28 },
  { name: 'Instagram', href: 'https://www.instagram.com/gdg.taipei', icon: 'ri:instagram-fill', size: 26 },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/480844', icon: 'lineicons:linkedin', size: 28 },
  { name: 'Threads', href: 'https://www.threads.com/@gdg.taipei', icon: 'fa7-brands:square-threads', size: 25 },
  { name: 'GitHub', href: 'https://github.com/gdg-twhk', icon: 'lineicons:github', size: 28 },
]

export const topicClassnames: Record<Topic, { card: string; badge: string }> = {
  'AI / Machine Learning': {
    card: 'bg-pastel-yellow/30',
    badge: 'bg-core-yellow',
  },
  'Go': {
    card: 'bg-pastel-blue/30',
    badge: 'bg-core-blue',
  },
  'Cloud': {
    card: 'bg-pastel-green/30',
    badge: 'bg-core-green',
  },
  'Google Workspace': {
    card: 'bg-pastel-yellow/30',
    badge: 'bg-core-yellow',
  },
  'Web Technologies': {
    card: 'bg-pastel-red/30',
    badge: 'bg-core-red',
  },
  'Earth Engine & Sustainability': {
    card: 'bg-pastel-green/30',
    badge: 'bg-core-green',
  },
  'Android': {
    card: 'bg-pastel-green/30',
    badge: 'bg-core-green',
  },
  'Flutter': {
    card: 'bg-pastel-blue/30',
    badge: 'bg-core-blue',
  },
  'Firebase': {
    card: 'bg-pastel-red/30',
    badge: 'bg-core-red',
  },
  'Cyber Security': {
    card: 'bg-pastel-blue/30',
    badge: 'bg-core-blue',
  },
}
