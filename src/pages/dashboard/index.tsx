// import Head from "next/head";
// import Content from "../../components/dashboard/Content";
// import DashContent from "../../components/DashContent";

// export default function Dashboard() {
//   return (
//     <div>
//       <Head>
//         <title>DiIngat - Dashboard</title>
//         <link rel="icon" href="/favicon.ico" />
//         <link
//           rel="stylesheet"
//           href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
//           integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
//           crossOrigin="anonymous"
//         />
//         <link
//           rel="stylesheet"
//           href="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
//         />
//       </Head>
//       <div className="flex h-screen bg-gray-900 font-sans">
//         <Content>
//           <div className="flex-row flex">
//             <DashContent />
//             <div className="ml-5">
//               Amet occaecat ad consequat dolor laboris minim duis dolor
//               voluptate. Pariatur reprehenderit ipsum id dolor aliquip est et
//               cupidatat. Reprehenderit incididunt sit officia et velit qui
//               dolore sit veniam. Deserunt culpa consequat et consectetur. Amet
//               occaecat ad consequat dolor laboris minim duis dolor voluptate.
//               Pariatur reprehenderit ipsum id dolor aliquip est et cupidatat.
//               Reprehenderit incididunt sit officia et velit qui dolore sit
//               veniam. Deserunt culpa consequat et consectetur.
//             </div>
//           </div>
//         </Content>
//       </div>
//     </div>
//   );
// }

import Head from "next/head";
import Content from "../../components/dashboard/Content";
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

      <Content title="Dashboard">
        <div className="flex-row flex">
          <DashContent />
          <div className="w-full ml-5">
            <p className="text-xl pb-3 flex items-center">
              <i className="fas fa-list mr-3"></i> Latest Reports
            </p>
            <div className="bg-white overflow-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                      Name
                    </th>
                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                      Last name
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                      Phone
                    </th>
                    <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="w-1/3 text-left py-3 px-4">Lian</td>
                    <td className="w-1/3 text-left py-3 px-4">Smith</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="w-1/3 text-left py-3 px-4">Emma</td>
                    <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                    <td className="w-1/3 text-left py-3 px-4">Williams</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                    <td className="w-1/3 text-left py-3 px-4">Brown</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-left py-3 px-4">Lian</td>
                    <td className="w-1/3 text-left py-3 px-4">Smith</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="w-1/3 text-left py-3 px-4">Emma</td>
                    <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                    <td className="w-1/3 text-left py-3 px-4">Williams</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-200">
                    <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                    <td className="w-1/3 text-left py-3 px-4">Brown</td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        622322662
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href="mailto:jonsmith@mail.com"
                      >
                        jonsmith@mail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
}
