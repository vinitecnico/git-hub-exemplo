import React from "react";
import './styles.scss'

const UserDetails = ({ user }) => {
  const { avatar_url, name, login, followers, following, bio, location } = user;

  return (
    <article className="user-details">
      <img src={avatar_url} className="user-avatar" alt={name} />
      <h2 className="name">{name}</h2>
      <h3 className="login">{login}</h3>
      <h4 className="location">{location}</h4>
      <p>{bio}</p>
      <p>
        {followers} followers {following} following{" "}
      </p>
    </article>
  );
};

export default UserDetails;
