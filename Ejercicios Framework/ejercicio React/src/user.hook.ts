import * as React from "react";
import {user} from "./model";

export const useUser = (initialUser: user)=> {
const [user, setUser]= React.useState(initialUser);

React.useEffect(()=> {
    setTimeout(()=> {
        setUser({name: "Jane", surname: "Smith"});
    }, 500)
}, [])

return {
    user,
    setUser
}
}