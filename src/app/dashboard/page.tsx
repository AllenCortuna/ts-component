import NavLayout from "@/components/Layout";
import PaginationTable from "@/components/pagination/PaginationTable";
import React from "react";

const Dashboard = () => {
  const data = [
    { name: "Elton John", address: "Makati", age:80 },
    { name: "Elton John", address: "Makati", age:80 },
    { name: "Elton John", address: "Makati", age:80 },
    { name: "Elton John", address: "Makati", age:80 },
    { name: "Elton John", address: "Makati", age:80 },
    { name: "Elton John", address: "Makati", age:80 },
    { name: "Elton John", address: "Makati", age:80 },
    { name: "Elton John", address: "Makati", age:80 },
    { name: "Elton John", address: "Makati", age:80 },
    { name: "Elton John", address: "Makati", age:80 },
    { name: "Elton John", address: "Makati", age:80 },
    { name: "Elton John", address: "Makati", age:80 },
  ];
  return (
    <NavLayout>
      <div className="flex">
        <PaginationTable data={data} />
      </div>
    </NavLayout>
  );
};

export default Dashboard;
