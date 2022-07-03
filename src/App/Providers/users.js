import React from "react";

export const UserContext = React.createContext({});

export const UserProvider = (props) => {
    const [users, setUsers] = React.useState(null);
    const[search, setSearch] =  React.useState("");
    const [loading, setLoading] = React.useState(false);

    const changeHistoric = (val) =>{
      if(val?.data?.login === undefined) return;
  
       var oldArray = Array.isArray(JSON.parse(localStorage.getItem("historic"))) ? JSON.parse(localStorage.getItem("historic")) : [];
      if(oldArray === "") {
        oldArray = [];
        localStorage.setItem("historic", oldArray)
      }

      let index = oldArray.findIndex(item => item.data.id == val.data.id);
      if(index >= 0){
        oldArray.splice(index, 1);
      }
        oldArray.push(val);
        oldArray.sort(( a, b ) => {
          const A = new Date(a.date)
          const B = new Date(b.date)
          const dateA = `${A.getFullYear()}${A.getMonth()}${A.getDay()}${A.getHours()}${A.getMinutes()}${A.getSeconds()}`
          const dateB = `${B.getFullYear()}${B.getMonth()}${B.getDay()}${B.getHours()}${B.getMinutes()}${B.getSeconds()}`
            if ( parseInt(dateA) > parseInt(dateB) ){
              return -1;
            }
            if ( parseInt(dateA) < parseInt(dateB) ){
              return 1;
            }
            return 0;
          })
          localStorage.setItem("historic",JSON.stringify(oldArray))
    }
  return (
    <UserContext.Provider value={{ users, setUsers, search, setSearch, changeHistoric, loading,setLoading }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext)