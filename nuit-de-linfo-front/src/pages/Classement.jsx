import React from "react";
import { useNavigate } from "react-router-dom";
import TableWithPaginationAndSorting from "../composant/TableWithPaginationAndSorting/TableWithPaginationAndSorting";

const Classement = () => {
  const navigate = useNavigate();

  const fetchUsers = async (page, sortType, filter) => {
    const response = await fetch(
      `http://148.113.45.177:3030/users?page=${page}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    if (response.status !== 200) {
      navigate("/login");
      return { items: {}, totalPages: 1 };
    }
    const data = await response.json();
    return {
      items: data.response.clients,
      totalPages: data.response.totalPages,
    };
  };

  const userColumns = [
    //{ header: "Position", accessor: "position", sortable: false },
    { header: "Username", accessor: "username", sortable: false },
    { header: "XP", accessor: "xp", sortable: false },
  ];

  const userActions = null;

  const selecter = [];

  return (
    <div className="container">
      <h2>Classement</h2>
      <TableWithPaginationAndSorting
        columns={userColumns}
        fetchData={fetchUsers}
        dataKey="_id"
        actions={userActions}
        selecter={selecter}
      />
    </div>
  );
};

export default Classement;
