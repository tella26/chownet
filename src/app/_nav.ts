export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
    }
  },
  {
    name: 'Users',
    url: '',
    icon: 'icon-user',
    children: [
      {
        name: 'All Users',
        url: '/dashboard',
        icon: 'icon-puzzle'
      },
      {
        name: 'Add New',
        url: '/dashboard',
        icon: 'icon-puzzle'
      },
      {
        name: 'Categories',
        url: '/dashboard',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Tools',
    url: '',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Plugins',
        url: '/dashboard',
        icon: 'icon-cursor'
      },
      {
        name: 'Imports',
        url: '/dashboard',
        icon: 'icon-cursor'
      },
      {
        name: 'Exports',
        url: '/dashboard',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Settings',
    url: '',
    icon: 'icon-star',
    children: [
      {
        name: 'General',
        url: '/dashboard',
        icon: 'icon-star',
        badge: {
          variant: 'success',
        }
      },
      {
        name: 'Appearance',
        url: '/dashboard',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
        }
      },
      {
        name: 'Media',
        url: '/dashboard',
        icon: 'icon-star'
      }
    ]
  },
];
