import { Routes } from '@angular/router';
import { PageHome } from './pages/page-home/page-home';
import { PageAbout } from './pages/page-about/page-about';
import { PageContact } from './pages/page-contact/page-contact';
import { PageDetails } from './pages/page-details/page-details';
import { PagePortfolio } from './pages/page-portfolio/page-portfolio';

export const routes: Routes = [
  {
    path: 'home',
    component: PageHome,
  },
  {
    path: 'about',
    component: PageAbout,
  },
  {
    path: 'contact',
    component: PageContact,
  },
  {
    path: 'details',
    component: PageDetails,
  },
  {
    path: 'portfolio',
    component: PagePortfolio,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
