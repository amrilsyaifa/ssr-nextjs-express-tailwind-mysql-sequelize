import React from "react";
import Head from "next/head";
import ButtonExample from "../components/Button/ButtonExample";

export default function exampleButton() {
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
      <ButtonExample />
    </div>
  );
}
