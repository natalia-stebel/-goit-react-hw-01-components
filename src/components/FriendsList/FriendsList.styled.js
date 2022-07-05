import styled from 'styled-components';

export const FriendsListContainer = styled.div`
width: 360px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
margin-top:50px;
`;

export const FriendStatus = styled.li`
  
  width: 250px;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid rgb(180, 178, 178);
  box-shadow: 5px 5px 10px rgb(172, 169, 169);
  margin-bottom:7px;

  }
`;

export const Online = styled.span`
  display: block;
  background-color: green;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-right: 7px;
`;

export const Offline = styled.span`
  display: block;
  background-color: red;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin-right: 7px;
`;

export const Name = styled.p`
    margin-left: 10px;
    font-weight: 600;
    font-size: 20px;
`;

export const Avatar = styled.img`
    
`;

export const FriendsList = styled.img`
    
`;