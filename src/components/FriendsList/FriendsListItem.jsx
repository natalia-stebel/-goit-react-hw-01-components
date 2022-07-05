import {Avatar, Name, Online, Offline,FriendStatus } from "./FriendsList.styled"
import PropTypes from 'prop-types';

 export const FriendsListItem = ({avatar, name, isOnline}) =>{
        
    return (

        <FriendStatus>
                 {isOnline ? <Online /> : <Offline />}
    
                <Avatar src={avatar} alt={name} width="48" />
                <Name>{name}</Name>
              </FriendStatus>
    )

    }

    FriendsListItem.propTypes = {
        friends: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
          })
        ),
      };
   

      export default FriendsListItem;