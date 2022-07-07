import axios from "axios"

const api = axios.create({
    baseURL: "https://api.github.com",
  });

 export const GetUsers = async (name) => {


try
{
 const {data} =   await api.get(`/users/${name? name : ''}`)
 
 if(data?.login) {  return(data) } } 
   
   catch (error) {
     console.log("ERRO")
        alert("Usuário não encontrado")
    }
  }