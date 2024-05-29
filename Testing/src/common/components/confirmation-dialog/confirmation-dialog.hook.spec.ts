import { renderHook } from "@testing-library/react";
import { useConfirmationDialog } from "./confirmation-dialog.hook";
import { act } from "react-dom/test-utils";

describe("confirmation-dialog.hook.tsx", ()=> {
    it('onOpenDialog should return true and a object id/name', ()=> {
        //ARRANGE
       const lookup= {
        id: "Hola",
        name: "Jacinto",
      }

        //ACT
        const {result} = renderHook(()=> useConfirmationDialog());
        
        act(()=> {
            result.current.onOpenDialog(lookup);
        })
        //ASSERT
        expect(result.current.isOpen).toEqual(true);
        expect(result.current.itemToDelete).toEqual(lookup);
        
    })
})

describe("confirmation-dialog.hook.tsx", ()=> {
    it('onAccept should change seiItem to delete into createEmptyLookup once ', ()=> {
        //ARRANGE
       const lookup= {
        id: "Hola",
        name: "Jacinto",
      }

      const vacio= {
        id: "",
        name: "",
      }

        //ACT
        const {result} = renderHook(()=> useConfirmationDialog());
        
        act(()=> {
            result.current.onOpenDialog(lookup);
        })

        act(()=> {
            result.current.onAccept();
        })

        //ASSERT
        expect(result.current.isOpen).toEqual(true);
        expect(result.current.itemToDelete).toEqual(vacio);
        
  
    })
})

describe("confirmation-dialog.hook.tsx", ()=> {
    it('onClose should change setisOpen to false once onOpenDialog has been called ', ()=> {
        //ARRANGE
       const lookup= {
        id: "Hola",
        name: "Jacinto",
      }

        //ACT
        const {result} = renderHook(()=> useConfirmationDialog());
        
        act(()=> {
            result.current.onOpenDialog(lookup);
        })

        act(()=> {
            result.current.onClose();
        })

        //ASSERT
        expect(result.current.isOpen).toEqual(false);
  
    })
})

