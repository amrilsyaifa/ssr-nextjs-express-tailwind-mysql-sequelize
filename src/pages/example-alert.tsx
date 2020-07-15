import React from "react";
import Head from "next/head";
import { useState } from "react";
import Toast from "../components/Alert/Toast";
import BannerAlert from "../components/Alert/BannerAlert";
import Alert from "../components/Alert/Alert";

export default function exampleAlert() {
  const [toast, setToast] = useState(true);
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
      {/* <BannerAlert position="top" type="danger" clickType="full" />

      <BannerAlert position="bottom" type="success" clickType="full" />
      */}

      <Toast
        type="success"
        position="top-right"
        show={toast}
        onClose={() => setToast(false)}
        text="Esse ipsum elit voluptate commodo elit mollit. Lorem consequat nisi aliquip irure sunt reprehenderit cillum non. Proident et occaecat incididunt eu laboris qui id elit incididunt voluptate duis ut ipsum eiusmod. Cillum magna velit fugiat ea occaecat ipsum duis in velit reprehenderit id enim. Reprehenderit duis laborum quis voluptate consectetur. Nulla id labore sit consequat cillum ipsum."
      />
      {/* <Alert
        type="success"
        width="width-half"
        position="top-right"
        title="Success"
        body="Amet deserunt tempor ex ipsum velit est adipisicing ullamco laborum elit nostrud id. Exercitation anim elit enim commodo dolor enim sit consectetur quis. Tempor deserunt aliqua fugiat laboris sit incididunt proident et nostrud voluptate ut. Amet eu ut elit aute excepteur ullamco non minim eu. Cillum aliquip ipsum ipsum nulla elit consequat consequat laboris dolore Lorem ea ut exercitation. Exercitation magna esse laborum officia amet do in tempor amet minim consectetur. Culpa tempor cillum aliquip veniam sunt qui eu labore veniam eu."
      /> */}
    </div>
  );
}
