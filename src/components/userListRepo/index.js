import React from "react";
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
                language: {language} - star: {stargazers_count} - last update:{" "}
                {formatDate(updated_at)}
              </p>
            </li>
          )
        )}
      </ul>
    </article>
  );
};

export default UserListRepo;
