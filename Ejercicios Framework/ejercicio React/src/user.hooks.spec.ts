import { renderHook, act, waitFor } from "@testing-library/react";
import { useUser } from "./user.hook";
import { user } from "./model";

describe('useUser specs', ()=> {
    it("should return user with initial values and setUser method when it calls it", async ()=> {
//Arrange
const initialUser= {
    name: "John",
    surname: "Doe"
}
//Act
const  {result}= renderHook(()=> useUser(initialUser));

//Assert
expect(result.current.user).toEqual(initialUser);
expect(result.current.setUser).toEqual(expect.any(Function));


    });
})
    describe('useUser specs', ()=> {
        it("should update user when it calls setUser",async ()=> {
    //Arrange
    const initialUser= {
        name: "John",
        surname: "Doe"
    }
    //Act
    const  {result}= renderHook(()=> useUser(initialUser));

    act(()=> {
        result.current.setUser({
            name:"updated name",
            surname: "updated surname",
        })
    })
    
    //Assert
    expect(result.current.user).toEqual({
        name: "updated name",
        surname: "updated surname"
    })


    const updateUser: user= {
        name: "Jane",
        surname: "Smith"
    };
    await waitFor(()=> {expect(result.current.user).toEqual(updateUser)})
    
});
})