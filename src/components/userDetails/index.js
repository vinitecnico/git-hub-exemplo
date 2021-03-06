import React from "react";
import { faHome, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

const UserDetails = ({ user }) => {
  const { avatar_url, name, login, followers, following, bio, location } = user;

  return (
    <section className="user-details card">
      <img src={avatar_url} className="card-img-top" alt={name} />
      <article className="card-body">
        <h2 className="name">{name}</h2>
        <h3 className="login">{login}</h3>
        {location && (
          <h4 className="location">
            <FontAwesomeIcon icon={faHome} /> {location}
          </h4>
        )}
        <p>{bio}</p>
        <p>
          <FontAwesomeIcon icon={faUserFriends} /> <strong>{followers}</strong>{" "}
          followers <strong>{following}</strong> following
        </p>
      </article>
    </section>
  );
};

export default UserDetails;
