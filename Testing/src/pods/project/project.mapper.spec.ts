import { mapToCollection } from '../../common/mappers/collection.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mockEmployeeList } from '../../pods/employee-list/api/employee-list.mock-data';


describe("project.mapper.ts", ()=> {
    it("It should change every element's type in an array from apimodel.EmployeeSummary to viewModel.EmployeeSummary if employeeSummary is an array", ()=> {
        //ARRANGE

            const apiEmployeeSummary: apiModel.EmployeeSummary= {id: "1",
              isAssigned: true,
              name: "Daniel Perez"};

              const ExpectedApiEmployeeSummary: viewModel.EmployeeSummary= {id: "1",
              isAssigned: true,
              name: "Daniel Perez"};


            const MockEmployeeSummaryList : apiModel.EmployeeSummary[]= [
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

            const ExpectedMockEmployeeSummaryList : viewModel.EmployeeSummary[]= [
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

            const mockProject: apiModel.Project = {
              id: '1',
              name: 'Nombre',
              isActive: true,
              comments: 'Comentario',
              externalId: '1234',
              employees: MockEmployeeSummaryList,
            };

            const ExpectedMockProject: viewModel.Project = {
              id: '1',
              name: 'Nombre',
              isActive: true,
              comments: 'Comentario',
              externalId: '1234',
              employees: MockEmployeeSummaryList,
            };


        //ACT
        const mapEmployeeSummaryFromApiToVm = (
          apiEmployeeSummary : apiModel.EmployeeSummary
          ): viewModel.EmployeeSummary => ({
            ...apiEmployeeSummary,
          });

          
          const mapEmployeeSummaryListFromApiToVm = (
            employeeSummary: apiModel.EmployeeSummary[]
          ): viewModel.EmployeeSummary[] =>
            mapToCollection(employeeSummary, (es) => mapEmployeeSummaryFromApiToVm(es));

          
           const mapProjectFromApiToVm = (
            project: apiModel.Project
          ): viewModel.Project => {
            return Boolean(project)
              ? {
                  ...project,
                  employees: mapEmployeeSummaryListFromApiToVm(project.employees),
                }
              : viewModel.createEmptyProject();
          };

          

        //ASSERT
        expect(mapEmployeeSummaryFromApiToVm(apiEmployeeSummary)).toEqual(ExpectedApiEmployeeSummary)
        expect(mapEmployeeSummaryListFromApiToVm(MockEmployeeSummaryList)).toEqual(ExpectedMockEmployeeSummaryList);
        expect(mapProjectFromApiToVm(mockProject)).toEqual(ExpectedMockProject);
    })
})