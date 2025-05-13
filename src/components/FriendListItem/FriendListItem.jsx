import FriendListItemCss from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={FriendListItemCss.friendItem}>
            <img src={avatar} alt="Avatar" width="60" />
            <p>{name}</p>
            <p className={isOnline ? FriendListItemCss.online : FriendListItemCss.offline}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
}

export default FriendListItem;