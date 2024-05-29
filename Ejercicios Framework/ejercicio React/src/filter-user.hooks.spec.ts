import {renderHook, act, waitFor}from "@testing-library/react"
import * as api from "./api";
import { useFilterUsers } from "./filter-user.hooks";

describe('useFilterUsers specs', () => {
    it ('should call getUsersByFilter only one time when it calls filterUsers when it feeds filter equals two', async ()=> {
        
        //Arrange
        const filter = "doe";
        const getUsersByFilterStub= jest.spyOn(api, 'getUsersByFilter')
        .mockResolvedValue(['John Doe', "Jane Doe"]);

        //Act
        const {result}=renderHook(()=> useFilterUsers(filter));

        //Assert
        expect(result.current.users).toEqual([]);

        await waitFor(()=> {
        expect(getUsersByFilterStub).toHaveBeenCalledWith('doe');
        expect(result.current.users).toEqual(['John Doe', "Jane Doe"]);
        })
        
    });
    
});
describe('useFilterUsers specs', () => {
    it ('should call getUsersByFilter only one time when it calls filterUsers when it feeds filter equals two', async ()=> {
        
        //Arrange
        const filter = "doe";
        const getUsersByFilterStub= jest.spyOn(api, 'getUsersByFilter')
        .mockResolvedValue(['John Doe', "Jane Doe"]);

        //Act
        const {result}=renderHook(()=> useFilterUsers(filter));

        //Assert
        expect(result.current.users).toEqual([]);
        act(()=> {result.current.setFilter('doe');});

        await waitFor(()=> {
        expect(getUsersByFilterStub).toHaveBeenCalledWith('doe');
        expect(getUsersByFilterStub).toHaveBeenCalledTimes(1);
        expect(result.current.users).toEqual(['John Doe', "Jane Doe"]);
        })
        
    });
})

describe('useFilterUsers specs', () => {
    it ('should call getUsersByFilter only one time when it calls filterUsers when it feeds filter equals two', async ()=> {
        
        //Arrange
        const filter = "doe";
        const getUsersByFilterStub= jest.spyOn(api, 'getUsersByFilter')
        .mockResolvedValue(['John Doe', "Jane Doe"]);

        //Act
        const {result}=renderHook(()=> useFilterUsers(filter));

        //Assert
        expect(result.current.users).toEqual([]);
        act(()=> {result.current.setFilter('smith');});

        await waitFor(()=> {
        expect(getUsersByFilterStub).toHaveBeenCalledWith('doe');
        expect(getUsersByFilterStub).toHaveBeenCalledWith('smith');
        expect(getUsersByFilterStub).toHaveBeenCalledTimes(2);
        expect(result.current.users).toEqual(['John Doe', "Jane Doe"]);
        })
        
    });
})