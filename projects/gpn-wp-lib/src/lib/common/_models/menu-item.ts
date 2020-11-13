/**
 * Пункт меню.
 */
export class MenuItem {
  text: string;
  url?: string;
  hint?: string;
  hide?: any;
  isMobileOnly?: boolean;
  icon: string;
  disabled?: boolean;
  action?: any;
  selected?: boolean;
  value?: string;
  mask?: RegExp;
}
