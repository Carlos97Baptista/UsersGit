import * as React from "react";
import styled from "styled-components";
import { useUser } from "../../Providers/users";

const Profile = (props) => {
    const {users} = useUser()
  return (
    <Form>
      {users ? (
        <>
          <Row>
          <a style={{textDecoration: "none"}} href={users.html_url} target="_blank"> <Thumbnail>
              <Image src={users.avatar_url} />
            </Thumbnail></a>
            <div>
            <a style={{textDecoration: "none"}} href={users.html_url} target="_blank"><Title >{users.name ? users.name : users.login}</Title></a>
            <span style={{color: "#ddd"}}>{users.bio}</span>
            </div>
          </Row>
          <Divider/>
          <div>     
            <div>
            <span style={{color: "#ddd"}}><strong>Blog:</strong> {users.blog}</span>
            </div>
            <div>
            <span style={{color: "#ddd"}}><strong>E-mail:</strong> {users.email}</span>
            </div>
            <div>
            <span style={{color: "#ddd"}}><strong>Local:</strong> {users.location}</span>
            </div>
            <div>
            <span style={{color: "#ddd"}}><strong>Repositórios:</strong> <a style={{color: "#ff00ff"}} href={users.repos_url} target="_blank">{users.public_repos} repositórios</a></span>
            </div>
          </div>
        </>
      ) : null}
    </Form>
  );
};

export default Profile;

const Form = styled.div`
  display: flex;
  flex-direction: column ;
`;
const Row = styled.div`
display: flex ;
  flex-direction: row;
  width: 100% ;
  margin: 10px;

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
