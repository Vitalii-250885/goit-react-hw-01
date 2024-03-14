import css from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.profileDescription}>
        <img src={image} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.table}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.number}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.number}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.number}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
