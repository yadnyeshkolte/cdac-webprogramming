import { createContext, useContext } from "react";
import { useState } from "react";
//userContext: It contains info about the current user of the Application. 
export const UserContext = createContext('Guest');//Creating a variable of the type string that I want to use across the app. 
//Use this code for allowing children to update the Context object. 
export function UserProvider({ children}){
    let [userDetail, setUserDetail] = useState('Guest');
    return(
        <UserContext.Provider value={{userDetail, setUserDetail}}> {/* Sending useState hook to allow childrent to update/modify the state */}
            {children}
        </UserContext.Provider>        
    )
}
export const useUser = () =>useContext(UserContext);//This user object shall be refered among the components. 