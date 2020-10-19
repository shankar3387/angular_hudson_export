import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/Admin/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Client',
    icon: 'layout-outline',
    children: [
      {
        title: 'AddClient',
        link: '/Admin/layout/stepper',
      },
      {
        title: 'ClientList',
        link: '/Admin/layout/list',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/Admin/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/Admin/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/Admin/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/Admin/forms/datepicker',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
