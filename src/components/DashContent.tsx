import React from "react";

export default function DashContent() {
  return (
    <div
      id="dash-content"
      className="bg-gray-700 py-6 lg:py-0 w-full lg:max-w-sm flex flex-wrap content-start"
    >
      <div className="w-1/2 lg:w-full">
        <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
          <div className="flex flex-col items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-3 bg-gray-300">
                <i className="fa fa-wallet fa-fw fa-inverse text-indigo-500"></i>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-3xl">
                $3249{" "}
                <span className="text-green-500">
                  <i className="fas fa-caret-up"></i>
                </span>
              </h3>
              <h5 className="font-bold text-gray-500">Total Revenue</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 lg:w-full">
        <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
          <div className="flex flex-col items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-3 bg-gray-300">
                <i className="fas fa-users fa-fw fa-inverse text-indigo-500"></i>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-3xl">
                249{" "}
                <span className="text-orange-500">
                  <i className="fas fa-exchange-alt"></i>
                </span>
              </h3>
              <h5 className="font-bold text-gray-500">Total Users</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 lg:w-full">
        <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
          <div className="flex flex-col items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-3 bg-gray-300">
                <i className="fas fa-user-plus fa-fw fa-inverse text-indigo-500"></i>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-3xl">
                2{" "}
                <span className="text-yellow-600">
                  <i className="fas fa-caret-up"></i>
                </span>
              </h3>
              <h5 className="font-bold text-gray-500">New Users</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 lg:w-full">
        <div className="border-2 border-gray-400 border-dashed hover:border-transparent hover:bg-white hover:shadow-xl rounded p-6 m-2 md:mx-10 md:my-6">
          <div className="flex flex-col items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-3 bg-gray-300">
                <i className="fas fa-server fa-fw fa-inverse text-indigo-500"></i>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-3xl">152 days</h3>
              <h5 className="font-bold text-gray-500">Server Uptime</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
