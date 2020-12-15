import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Federico Scaglione",
      image:
        "https://i.pinimg.com/originals/56/36/92/5636928ae9614a18fec33ea17ba48f2e.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
