

import {FriendsListContainer, FriendStatus, FriendAvatar, FriendName, Online, Offline } from "components/FriendsList/FriendsList.styled"

import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) =>{
    return (
        <FriendsListContainer>
          {friends.map(friend => {
            return (
              <FriendStatus key={friend.id}>
                {friend.isOnline ? <Online /> : <Offline/>}
    
                <FriendAvatar src={friend.avatar} alt={friend.name} width="48" />
                <FriendName>{friend.name}</FriendName>
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
