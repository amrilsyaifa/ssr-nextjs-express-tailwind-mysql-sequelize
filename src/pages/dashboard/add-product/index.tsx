import Head from "next/head";
import Content from "../../../components/dashboard/Content";

export default function AddProduct() {
  return (
    <div>
      <Head>
        <title>DiIngat - Add Product</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="flex h-screen bg-gray-900 font-sans">
        <Content>
          <div className="flex-row flex">
            <div className="ml-5">Tambah Produk</div>
          </div>
        </Content>
      </div>
    </div>
  );
}
