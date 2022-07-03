import React from "react";

export const UserContext = React.createContext({});

export const UserProvider = (props) => {
    const [users, setUsers] = React.useState([]);

    const addUser = (user) => {
        const oldArray = [...users];
        oldArray.push(user);
        oldArray.sort(function(a,b) {
            return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
        });
        setUsers(oldArray)
    }
  return (
    <UserContext.Provider value={{ users, addUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext)