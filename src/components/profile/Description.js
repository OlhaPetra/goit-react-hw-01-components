import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import s from './Profile.module.css';

function Description({ userImg, userName, userTag, userLocation }) {
  return (
    <div className={s.description}>
      <img
        className={s.image}
        src={userImg}
        alt="Аватар пользователя"
        width="150"
      />
      <p className={s.textName}>{userName}</p>
      <p className={s.text}>{userTag}</p>
      <p className={s.text}>{userLocation}</p>
    </div>
  );
}

Description.defaultProps = {
  userImg: defaultImage,
};

Description.propTypes = {
  userImg: PropTypes.string,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
};

export default Description;
