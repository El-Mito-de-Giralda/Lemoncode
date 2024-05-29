import { renderHook } from "@testing-library/react";
import { useName } from "./name.hooks";
import { act } from "react-dom/test-utils";

describe('useName specs', ()=> {
    it("should return an object with name equals'John Doe' and setName a function when it call it", 
    ()=> {
        //Arrange

        //Act
        const {result}= renderHook(()=> useName());

        //Assert
        expect(result.current.name).toEqual("John Doe");
        expect(result.current.setName).toEqual(expect.any(Function));
    });

    it("should update name when it calls SetName", 
    ()=> {
        //Arrange
        const newName="updated name";


        //Act
        const {result}= renderHook(()=> useName());

        act(()=> { result.current.setName(newName);})


        //Assert
        expect(result.current.name).toEqual("updated name");
    });
});