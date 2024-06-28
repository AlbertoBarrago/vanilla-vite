import {navigation} from "./header.ts";
import {footer} from "./footer.ts";

export const template = (content: string, hasHeader: boolean = true, hasFooter: boolean = true) => `
    ${hasHeader ? navigation() : ''} ${content} ${ hasFooter ? footer() : ''}
    `;