export type IconType = 'filter' | 'eye' | 'arrow-right' | 'open-link' | 'three-bar' | 'block';

export interface MenuItemContentsProps {
   label: string;
   href?: string;
}

export interface ButtonProps {
   text: string;
   icon?: any;
   classProps?: string;
}