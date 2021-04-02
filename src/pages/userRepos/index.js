import React, { useState, useEffect } from "react";
import {
  Content,
  Breadcrumbs,
  Loading,
  UserDetails,
  UserListRepo,
} from "../../components";
import { getByUser, getReposByUser } from "../../clients";
import "./styles.scss";

const UserRepo = ({ match, history }) => {
  const { username } = match.params;
  const [user, setUser] = useState({});
  const [repo, setRepo] = useState({ data: [] });

  if (!username) {
    history.push("/");
  }

  useEffect(() => {
    init();
  });

  const init = async () => {
    const result = await getByUser(username);
    setUser({ ...result.data, loading: false });
    getRepo();
  };

  const getRepo = async () => {
    const result = await getReposByUser(username);
    setRepo({ data: result.data, loading: false });
  };

  return (
    <Content>
      <>
        <Breadcrumbs crumbs={[`username: ${username}`]} />
        {user.loading && <Loading />}
        {!user.loading && user.name && (
          <section className="row user-repo">
            <section className="col-md-2">
              <UserDetails user={user} />
            </section>
            <section className="col-md-10">
              <UserListRepo data={repo.data} />
            </section>
          </section>
        )}
      </>
    </Content>
  );
};

export default UserRepo;
