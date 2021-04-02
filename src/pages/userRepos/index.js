import React, { useState, useEffect } from "react";
import {
  Content,
  Breadcrumbs,
  Loading,
  UserDetails,
  UserListRepo,
  Select
} from "../../components";
import { getByUser, getReposByUser } from "../../clients";
import "./styles.scss";

const UserRepo = ({ match, history }) => {
  const { username } = match.params;
  const [user, setUser] = useState({});
  const [repo, setRepo] = useState({ data: [] });
  const filterOptions = [
    { label: "Text asc", sort: 1, key: "name" },
    { label: "Text desc", sort: -1, key: "name" },
    { label: "Date asc", sort: 1, key: "updated_at" },
    { label: "Date desc", sort: -1, key: "updated_at" },
  ];
  const [filterSelected, setFilterSelected] = useState(0);

  if (!username) {
    history.push("/");
  }

  useEffect(() => {
    init();
  }, [username]);

  const init = async () => {
    setUser({ loading: true });
    await getUser();
    await getRepo();
  };

  const getUser = async () => {
    const result = await getByUser(username);
    setUser({ ...result.data, loading: false });
  };

  const getRepo = async () => {
    const result = await getReposByUser(username);
    setRepo({ data: result.data, loading: false });
  };

  const handleChange = (env) => {
    setFilterSelected(env.target.value);
    sortRepo(filterOptions[env.target.value]);
  };

  const dynamicSort = (property, sortOrder) => {
    return (a, b) => {
      const result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };

  const sortRepo = ({ key, sort }) => {
    console.log("here ==", key, sort);
    var result = repo.data.sort(dynamicSort(key, sort));
    setRepo({ data: result });
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
              <Select filterOptions={filterOptions} filterSelected={filterSelected}  handleChange={handleChange}/>
              <UserListRepo data={repo.data} />
            </section>
          </section>
        )}
      </>
    </Content>
  );
};

export default UserRepo;
