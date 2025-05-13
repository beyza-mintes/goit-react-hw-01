import ProfileCss from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
    return (
        <div className={ProfileCss.profileContainer}>
            <div className={ProfileCss.info}>
                <img
                    src={image}
                    alt={name}
                    className={ProfileCss.icon}
                />
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul className={ProfileCss.stats}>
                <li className={ProfileCss.statItems}>
                    <span>Followers</span>
                    <span>{followers}</span>
                </li>
                <li className={ProfileCss.statItems}>
                    <span>Views</span>
                    <span>{views}</span>
                </li>
                <li className={ProfileCss.statItems}>
                    <span>Likes</span>
                    <span>{likes}</span>
                </li>
            </ul>
        </div>

    )
}

export default Profile