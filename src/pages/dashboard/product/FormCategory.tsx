import React from "react";
import { NextPageContext } from "next";
import { useState, useEffect, useContext } from "react";
import Modal from "../../../components/Modal/Modal";
import { postApi, putApi } from "../../../api";
import { GlobalContext } from "../../../context/GLobalContext";

export default function FormCategory({
  onClose,
  show,
  data,
  onSubmit,
  onUpdate,
}) {
  //context
  const flashMessage = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [kode, setKode] = useState("");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (data.name) {
      setName(data.name);
      setKode(data.product_code);
      setID(data.id);
    } else {
      setName("");
      setKode("");
    }
  }, [data]);

  const defaultError = () => {
    setError(false);
    setErrorText("");
  };

  const submitData = () => {
    if (show === "add-category") {
      postApi("/product", { name, product_code: kode })
        .then((data) => {
          onSubmit(data);
          onClose();
          flashMessage.onShow("success", "success create data");
        })
        .catch((error) => {
          setError(true);
          setErrorText(error[0].msg);
          flashMessage.onShow("error", "error create data");
        });
    } else if (show === "edit-category") {
      putApi("/product", { name, product_code: kode, id })
        .then((data) => {
          onUpdate(data);
          onClose();
        })
        .catch((error) => {
          setError(true);
          setErrorText(error[0].msg);
        });
    }
  };
  return (
    <Modal
      title={
        show === "add-category"
          ? "Tambah Produk"
          : show === "edit-category"
          ? "Edit Produk " + name
          : ""
      }
      show={show !== null}
      onClose={() => onClose()}
      onAction={submitData}
      size="large"
    >
      <div>
        <form className="p-10 rounded shadow-xl">
          <div className="">
            <label className="block text-sm text-gray-600">Nama Kategory</label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="cus_name"
              name="cus_name"
              type="text"
              placeholder="Nama Produk"
              aria-label="Name"
              value={name}
              onChange={(e) => {
                defaultError();
                setName(e.target.value);
              }}
            />
          </div>
          <div className="">
            <label className="block text-sm text-gray-600">Kode</label>
            <input
              className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
              id="cus_name"
              name="cus_name"
              type="text"
              placeholder="Produk Kode"
              aria-label="Name"
              value={kode}
              onChange={(e) => {
                defaultError();
                setKode(e.target.value);
              }}
            />
          </div>
          {error && (
            <div className="text-center text-red-500 capitalize">
              {errorText}
            </div>
          )}
        </form>
      </div>
    </Modal>
  );
}
