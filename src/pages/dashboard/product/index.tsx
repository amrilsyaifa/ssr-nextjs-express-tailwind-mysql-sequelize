import Head from "next/head";
import Layout from "../../../components/dashboard/Layout";

export default function Product() {
  return (
    <div>
      <Head>
        <title>DiIngat - Product</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="flex h-screen bg-gray-900 font-sans">
        <Layout>
          {/* <div className="flex-row flex">
            <div className="ml-5">Produk</div>
          </div> */}
          <table className="table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Author</th>
                <th className="border px-4 py-2">Views</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Intro to CSS</td>
                <td className="border px-4 py-2">Adam</td>
                <td className="border px-4 py-2">858</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">
                  A Long and Winding Tour of the History of UI Frameworks and
                  Tools and the Impact on Design
                </td>
                <td className="border px-4 py-2">Adam</td>
                <td className="border px-4 py-2">112</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Intro to JavaScript</td>
                <td className="border px-4 py-2">Chris</td>
                <td className="border px-4 py-2">1,280</td>
              </tr>
            </tbody>
          </table>
        </Layout>
      </div>
    </div>
  );
}
