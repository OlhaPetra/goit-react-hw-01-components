import PropTypes from 'prop-types';
import Description from './Description';
import Followers from './Followers';
import Views from './Views';
import Likes from './Likes';
import s from './Profile.module.css';

function Profile({ data }) {
  const { avatar, name, tag, location, stats } = data;

  return (
    <div className={s.profile}>
      {
        <Description
          userImg={avatar}
          userName={name}
          userTag={tag}
          userLocation={location}
        />
      }
      <ul className={s.profile_items}>
        {<Followers quantityFollowers={stats.followers} />}
        {<Views quantityViews={stats.views} />}
        {<Likes quantityLikes={stats.likes} />}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Profile;
