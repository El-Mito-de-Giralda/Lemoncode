import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  DetailPage: string;
  createQuotes: string;
  editQuotes: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  DetailPage: '/characters/detail/:id', 
  createQuotes: '/quote/create',
  editQuotes: '/quote/:id'
};


type NavigationFunction = (id: string) => string;
type NavigationName = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editQuotes' | 'DetailPage'> {
  editQuotes: NavigationFunction;
  DetailPage: NavigationName;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editQuotes: (id) => generatePath(switchRoutes.editQuotes, { id }),
  DetailPage: (id) => 
    generatePath(switchRoutes.DetailPage, { id })
}

