import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';

describe("confirmation-dialog.component.tsx", ()=> {
    it('should confirm that Dialog, DialogTitle,DialogContent, DialogActions,Button, are rendered', ()=> {
        //ARRANGE
        interface LabelProps {
            closeButton: string;
            acceptButton: string;
          }

        interface Props {
            isOpen: boolean;
            onAccept: () => void;
            onClose: () => void;
            title: string | React.ReactNode;
            labels: LabelProps;
            children: React.ReactNode;
          }
         
          const props= {
            isOpen: true,
            onAccept: jest.fn,
            onClose: jest.fn,
            title: "Confirmation Code",
            labels: {closeButton: "Cerrar",
              acceptButton: "Aceptar"},
            children: <div>Confirmación</div>
          }

        //ACT

        render(<ConfirmationDialogComponent {...props}/>);


        const DialogElement= screen.getByRole('dialog');
        const DialogTitleElement= screen.getByRole('heading');
        const DialogContentElement= screen.getByTestId('dialog-content');
        const DialogActionsElement= screen.getByTestId('dialog-actions');
        const ButtonElement1= screen.getByTestId('button-close');
        const ButtonElement2= screen.getByTestId('button-accept');
        

        //ASSERT
        expect(DialogElement).toBeInTheDocument();
        expect(DialogTitleElement).toBeInTheDocument();
        expect(DialogContentElement).toBeInTheDocument();
        expect(DialogActionsElement).toBeInTheDocument();
        expect(ButtonElement1).toBeInTheDocument();
        expect(ButtonElement2).toBeInTheDocument();
    })
})

describe("confirmation-dialog.component.tsx", ()=> {
  it('Button should close the dialog when clicked', async ()=> {
      //ARRANGE
      interface LabelProps {
          closeButton: string;
          acceptButton: string;
        }

      interface Props {
          isOpen: boolean;
          onAccept: () => void;
          onClose: () => void;
          title: string | React.ReactNode;
          labels: LabelProps;
          children: React.ReactNode;
        }

        const onClose = jest.fn();
    const onAccept = jest.fn();
       
        const props= {
          isOpen: true,
          onAccept: onAccept,
          onClose: onClose,
          title: "Confirmation Code",
          labels: {closeButton: "Cerrar",
            acceptButton: "Aceptar"},
          children: <div>Confirmación</div>
        }
        

      //ACT

      render(<ConfirmationDialogComponent {...props}/>);

      const ButtonElement1= screen.getByTestId('button-close');
      await userEvent.click(ButtonElement1);

      const ButtonElement2= screen.getByTestId('button-accept');
      await userEvent.click(ButtonElement2);

      //ASSERT
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  })
})