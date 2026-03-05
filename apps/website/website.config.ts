export const websiteConfig: WebsiteConfig = {
  copyright: 'Copyright © {{date}} Sonia UI. All Rights Reserved.',
  title: 'Sonia UI',
  titleTemplate: '%s | Sonia UI',
  description: 'Design system components for your team.',
  url: 'http://localhost:3020',
  repoUrl: '',
  repoBranch: 'main',
}

interface WebsiteConfig {
  title: string
  titleTemplate: string
  description: string
  copyright: string
  url: string
  repoUrl: string
  repoBranch: string
}

export interface NavItem {
  title: string
  url?: string
  status?: string
  items?: NavItem[]
  external?: boolean
}

export interface FlattenNavItem extends Omit<NavItem, 'items'> {}
