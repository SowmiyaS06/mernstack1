import {createContext} from "react";
export const UserContext1=createContext();//creating a context for passing user data
export const UserProvider1 = ({ children }) => {//creating a provider for the context and wrapping the app component with it in main.js
    const user = { id: 1, name: 'Sowmiya',age: 18};
    return (
        <UserContext1.Provider value={user}>
            {children}
        </UserContext1.Provider>
    );
};

//this is displayed in the about page