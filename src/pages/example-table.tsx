import React from "react";
import Head from "next/head";
import Table from "../components/Table/Table";
import makeData from "../helper/makeData";

function ExampeTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Visits",
        accessor: "visits",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Profile Progress",
        accessor: "progress",
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(100), []);

  return (
    <div>
      <Head>
        <title>DiIngat - Tes</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
        />
      </Head>
      <Table
        columns={columns}
        data={data}
        withAction={true}
        addButton={true}
        onEdit={(e) => console.log("isi onEdit ", e)}
        onDelete={(e) => console.log("isi onDelete ", e)}
        onAdd={(e) => alert("add")}
        mode="white"
      />
    </div>
  );
}

export default ExampeTable;
