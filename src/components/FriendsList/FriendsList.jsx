

import {FriendsListContainer} from "components/FriendsList/FriendsList.styled"

import PropTypes from 'prop-types';

import FriendsListItem from "components/FriendsList/FriendsListItem";


export const FriendsList = ({ friends }) =>{
    return (
        <FriendsListContainer>
          {friends.map((friend) => (
                <FriendsListItem
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                />
            ))}
        </FriendsListContainer>
    )
        };
    

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

  