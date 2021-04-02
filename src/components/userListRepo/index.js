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
  }

  const formatDate = (value) => {
    return new Date(value).toLocaleDateString("pt-BR", options)
  }

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
            <li key={id}>
              <h1>{name}</h1>
              <p>{description}</p>
              <p>
                language: <strong>{language}</strong>  {stargazers_count > 0 && (<><FontAwesomeIcon icon={faStar} /> <strong>{stargazers_count}</strong> </>)} - last update:{" "}
                <strong>{formatDate(updated_at)}</strong>
              </p>
            </li>
          )
        )}
      </ul>
    </article>
  );
};

export default UserListRepo;
