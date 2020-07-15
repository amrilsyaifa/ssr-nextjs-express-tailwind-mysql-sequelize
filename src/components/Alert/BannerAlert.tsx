import React from "react";

export default function BannerAlert({ position, type, clickType }) {
  const bgAlert =
    type === "danger"
      ? "bg-red-500"
      : type === "warning"
      ? "bg-yellow-500"
      : type === "success"
      ? "bg-green-500"
      : null;
  const positionRender =
    position === "top" ? "top-0" : position === "bottom" ? "bottom-0" : "";
  const renderBanner =
    clickType === "x" ? (
      <div className={"alert-footer w-full fixed " + positionRender}>
        <input type="checkbox" className="hidden" id="footeralert" />

        <div
          className={
            "flex items-center justify-between w-full p-2 shadow text-white " +
            bgAlert
          }
        >
          Footer Alert (Only use X to close)
          <label
            className="close cursor-pointer"
            title="close"
            // for="footeralert"
          >
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </label>
        </div>
      </div>
    ) : clickType === "full" ? (
      <div className={"alert-banner w-full fixed " + positionRender}>
        <input type="checkbox" className="hidden" id="banneralert" />

        <label
          className={
            "close cursor-pointer flex items-center justify-between w-full p-2 shadow text-white " +
            bgAlert
          }
          title="close"
          //   for="banneralert"
        >
          Banner Alert (click anywhere to close)
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </label>
      </div>
    ) : null;
  return <div>{renderBanner}</div>;
}
