import React from "react";
import {render} from "@testing-library/react";
import { SayHello } from "./say-hello";

describe("SayHello component specs", ()=> {
    it('should display then person name', ()=> {
        //Arrange
        const person="John";

        //Act
        const {getByText}= render(<SayHello person={person} />);

        //Assert
        const element= getByText("Hello John");
        expect(element).not.toBeNull();
        expect(element.tagName).toEqual('H1');
    });
});
