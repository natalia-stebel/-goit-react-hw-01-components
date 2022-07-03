import styled from 'styled-components';

export const FriendsListContainer = styled.div`
width: 360px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`;

export const FriendStatus = styled.li`
  
  width: 350px;
  display: flex;
  align-items: center;
  
  }
`;

export const Online = styled.span`
  display: block;
  background-color: green;
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

export const Offline = styled.span`
  display: block;
  background-color: red;
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

export const Name = styled.p`
    
`;

export const Avatar = styled.img`
    
`;