import { Project, EmployeeSummary } from './project.api-model';

const mockEmployeeSummaryList: EmployeeSummary[] = [
  {
    id: '1',
    name: 'Daniel Perez',
    isAssigned: true,
  },
  {
    id: '2',
    name: 'Jose Sanchez',
    isAssigned: false,
  },
  {
    id: '3',
    name: 'Javier Benitez',
    isAssigned: false,
  },
  {
    id: '4',
    name: 'María Peña',
    isAssigned: true,
  },
];

export const mockProject: Project = {
  id: '1',
  name: 'Nombre',
  isActive: true,
  comments: 'Comentario',
  externalId: '1234',
  employees: mockEmployeeSummaryList,
};
