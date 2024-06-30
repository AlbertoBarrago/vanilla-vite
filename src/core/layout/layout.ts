import { navigation } from './header.ts'
import { footer } from './footer.ts'

export const layout = (
  content: string,
  hasHeader: boolean = true,
  hasFooter: boolean = true
) => `
    ${hasHeader ? navigation() : ''} ${content} ${hasFooter ? footer() : ''}
    `
