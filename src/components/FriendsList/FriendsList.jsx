

import {FriendsListContainer, FriendStatus, Avatar, Name, Online, Offline } from "components/FriendsList/FriendsList.styled"

import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) =>{
    return (
        <FriendsListContainer>
          {friends.map(friend => {
            return (
              <FriendStatus key={friend.id}>
                 {friend.isOnline ? <Online /> : <Offline />}
    
                <Avatar src={friend.avatar} alt={friend.name} width="48" />
                <Name>{friend.name}</Name>
              </FriendStatus>
            );
          })}
        </FriendsListContainer>
      );
    }



FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ),
  };
