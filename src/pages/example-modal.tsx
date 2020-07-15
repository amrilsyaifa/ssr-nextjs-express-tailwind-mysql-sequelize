import React from "react";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Modal2 from "../components/Modal/Modal2";

export default function exampleModal() {
  const [modal, setModal] = useState(false);

  //   const modalActive = modal ? "modal-active" : "";
  //   active
  //   modal fixed w-full h-full top-0 left-0 flex items-center justify-center

  // not active
  // modal fixed w-full h-full top-0 left-0 flex items-center justify-center opacity-0 pointer-events-none
  return (
    <div className={"bg-gray-200 flex items-center justify-start h-screen "}>
      <button
        onClick={() => setModal(!modal)}
        className="modal-open bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold py-2 px-4 rounded-full"
      >
        Open Modal
      </button>
      <Modal
        title="Simple Modal!"
        show={modal}
        onClose={() => setModal(false)}
        onAction={() => alert("action")}
        size="small"
      >
        <p>Modal content can go here</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
      </Modal>
      <Modal2 />
    </div>
  );
}
