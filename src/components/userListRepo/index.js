import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import goIcon from "../../assets/go-lang.png";
import csharpIcon from "../../assets/c-logo.png";
import javascriptIcon from "../../assets/javascript.png";
import htmlIcon from "../../assets/arquivo-html.png";
import arquivoIcon from "../../assets/arquivo.png";
import typeScriptIcon from "../../assets/typescript.png";
import shellIcon from "../../assets/shell.png";
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

  const SetIcon = ({ value }) => {
    switch (value) {
      case "C#":
        return <img src={csharpIcon} alt={value} />;
      case "JavaScript":
        return <img src={javascriptIcon} alt={value} />;
      case "Go":
        return <img src={goIcon} alt={value} />;
      case "Html":
        return <img src={htmlIcon} alt={value} />;
      case "TypeScript":
        return <img src={typeScriptIcon} alt={value} />;
      case "Shell":
        return <img src={shellIcon} alt={value} />
      default:
        return <img src={arquivoIcon} alt={value} />;
    }
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
                      <SetIcon value={language} /> <strong>{language}</strong>
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
