import FriendListItem from '../FriendListItem/FriendListItem'
import FriendListCss from './FriendList.module.css'


const FriendList = ({ friends }) => {
    return (
        <ul className={FriendListCss.friendList}>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
}

export default FriendList