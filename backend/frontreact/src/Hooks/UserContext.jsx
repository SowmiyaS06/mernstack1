import {createContext} from "react";
// Create a UserContext to manage user data
export const UserContext=createContext();

// Context provider ;passing a single value
export const UserProvider = ({ children }) => {
    const name = ['Sowmiya'];
    return (
        <UserContext.Provider value={name}>
            {children}
        </UserContext.Provider>
    );
}

//the app component is wrapped with this provider in main.js
//this is used in the about page to display the name