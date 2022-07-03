import * as React from "react";
import styled from "styled-components";
import { useUser } from "../../Providers/users";
import { useNavigate } from "react-router-dom";

import { GetUsers } from "../../Services/usersService";

const List = (props) => {
    const {search, setSearch,setUsers, setLoading, changeHistoric} = useUser()
    const navigate = useNavigate();
    const [historic, setHistoric] =React.useState([])

  React.useState(()=>{
    var value = JSON.parse(localStorage.getItem("historic"));
    console.log(value)
    setHistoric(value)
  },[])
    const handleClick = async (val)=> {
      var value = await GetUsers(val)
      setUsers(value);
      changeHistoric({data: value, date: new Date });
      setLoading(false);
      navigate('/');
    }

    const getTime = (val) => {
      const date = new Date();
      const userDate = new Date(val)
      if(userDate < date){
        return `Hoje: ${userDate.getHours()}:${userDate.getMinutes()
      }`
      }
      return `${userDate.getDay()}/${userDate.getMonth() +1}/${userDate.getFullYear()}`
    }
  return (
    <Form>
          <Divider/>
      {Array.isArray(historic) ? (
        <>{historic.map(val => <>  <Row key={"H-"+val.data.id} onClick={() => handleClick(val.data.name ? val.data.name : val.data.login)}>
          <div style={{display: "flex", flexDirection: "row"}}>
         <Thumbnail>
                <Image src={val.data.avatar_url} />
              </Thumbnail>
              <div>
             <Title >{val.data.name ? val.data.name : val.data.login}</Title>
              <span style={{color: "#ddd", marginRight: 20}}>{val.data.bio}</span>
              </div>
              </div>
              <Time>{getTime(val.date)}</Time>
            </Row>
            <Divider/></> )}
        
         
        </>
      ) : null}
    </Form>
  );
};

export default List;


const Time = styled.div`
display: flex ;
justify-content: flex-end ;
align-items: flex-end ;
padding-right: 10px ;
color: #888;
font-weight: bold ;
`

const Form = styled.div`
  display: flex;
  flex-direction: column ;
`;
const Row = styled.div`
display: flex ;
  flex-direction: row;
  justify-content: space-between ;
  width: 100% ;
  margin: 10px;
  cursor: pointer;
`;
const Thumbnail = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50px;
  border:5px solid #ff00ff;
  contain: content ;
  margin-right: 50px ;
`;
const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 10px;
`
const Title = styled.h1`
 color: #ddd;
 cursor: pointer;
 text-decoration: none ;
`;

const Divider = styled.div`
height: 1px;
width:100%;
margin-top: 5px ;
margin-bottom: 5px ;
background-color: #777`
