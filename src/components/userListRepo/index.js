import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

const UserListRepo = ({ data = [] }) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatDate = (value) => {
    return new Date(value).toLocaleDateString("pt-BR", options);
  };

  return (
    <article className="user-list-repo">
      <ul>
        {data.map(
          ({
            id,
            name,
            language,
            stargazers_count,
            updated_at,
            description,
          }) => (
            <li key={id} className="card">
              <article className="card-body">
                <h1>{name}</h1>
                <p className="description-bio">{description}</p>
                <p>
                  {language && (
                    <span>
                      language: <strong>{language}</strong>
                    </span>
                  )}
                  {stargazers_count > 0 && (
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <strong>{stargazers_count}</strong>
                    </span>
                  )}
                  <span>
                    last update: <strong>{formatDate(updated_at)}</strong>
                  </span>
                </p>
              </article>
            </li>
          )
        )}
      </ul>
    </article>
  );
};

export default UserListRepo;
