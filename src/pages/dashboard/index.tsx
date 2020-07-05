import Head from "next/head";
import Layout from "../../components/dashboard/Layout";
import DashContent from "../../components/DashContent";

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>DiIngat - Dashboard</title>
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
      <div className="flex h-screen bg-gray-900 font-sans">
        <Layout>
          <div className="flex-row flex">
            <DashContent />
            <div className="ml-5">
              Amet occaecat ad consequat dolor laboris minim duis dolor
              voluptate. Pariatur reprehenderit ipsum id dolor aliquip est et
              cupidatat. Reprehenderit incididunt sit officia et velit qui
              dolore sit veniam. Deserunt culpa consequat et consectetur. Amet
              occaecat ad consequat dolor laboris minim duis dolor voluptate.
              Pariatur reprehenderit ipsum id dolor aliquip est et cupidatat.
              Reprehenderit incididunt sit officia et velit qui dolore sit
              veniam. Deserunt culpa consequat et consectetur.
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}
