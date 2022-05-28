interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}






export const navItems: NavData[] = [

  {
    name: 'Configurations',
    url: '/enpr',
    icon: 'icon-puzzle',
   
    children: [
      {
        name: 'Ajouter Utilisateur',
        url: '/enpr/register',
        icon: 'icon-puzzle'
      },
      {
        name: 'Utilisateur',
        url: '/enpr/list-personelle',
        icon: 'icon-puzzle'
      },
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-puzzle'
      },
      {
        name: 'Recherche',
        url: '/enpr/cards',
        icon: 'icon-puzzle'
      },
      
    ]
  },
 

]
export const navItemsUser: NavData[] = [

  {
    name: 'Configurations',
    url: '/enpr',
    icon: 'icon-puzzle',
   
    children: [
      {
        name: 'Ajouter Utilisateur',
        url: '/enpr/register',
        icon: 'icon-puzzle'
      },
      {
        name: 'Utilisateur',
        url: '/enpr/users',
        icon: 'icon-puzzle'
      },
      
    ]
  },
 

]
