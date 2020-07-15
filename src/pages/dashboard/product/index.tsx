import React from "react";
import Head from "next/head";
import { NextPageContext } from "next";
import { useState, useEffect, useContext } from "react";
import Content from "../../../components/dashboard/Content";
import Outline from "../../../components/Button/Button";
import Table from "../../../components/Table/Table";
import Tabs from "../../../components/Tabs/Tabs";
import { deleteApi, getApiSSR } from "../../../api/index";
import {
  columns,
  columnsCategory,
  columnsProductType,
} from "../../../helper/Table/OptionsTable";

import makeData from "../../../helper/makeData";
import FormCategory from "./FormCategory";
import { AlertWarning } from "../../../components/Alert/Modal";
import { GlobalContext } from "../../../context/GLobalContext";

function Product({ category, productType }) {
  //context
  const flashMessage = useContext(GlobalContext);

  //useState
  const [dataCategory, setDataCategory] = useState(category);
  const [dataProductType, setDataProductType] = useState(productType);

  const [showCategory, setShowCategory] = useState(null);
  const [dataSelect, setDataSelect] = useState({ name: "", id: null });
  const [showAlert, setShowAlert] = useState(false);
  const [tableDelete, setTableDelete] = useState("");

  //table
  const data = React.useMemo(() => makeData(100), []);
  const Columns = React.useMemo(() => columns, []);
  const ColumnsCategory = React.useMemo(() => columnsCategory, []);
  const ColumnsProductType = React.useMemo(() => columnsProductType, []);

  //componentDidmount
  useEffect(() => {
    setDataCategory(category);
    setDataProductType(productType);
  }, [category, productType]);

  const onFinishDataCategory = (e, label) => {
    if (label === "add") {
      setDataCategory((prevDataCategory) => [...prevDataCategory, e]);
    } else if (label === "edit") {
      let newArr = [...dataCategory];
      const index = newArr.findIndex((dt) => dt.id === e.id);
      if (index === -1) {
        setDataCategory(newArr);
      } else {
        newArr[index] = e;
        setDataCategory(newArr);
      }
    }
  };

  console.log("isi ", productType);
  const onDelete = () => {
    if (tableDelete === "category") {
      deleteApi("/product", { id: dataSelect.id })
        .then((data) => {
          setDataCategory(
            dataCategory.filter((item) => item.id !== dataSelect.id)
          );
          setShowAlert(false);
          flashMessage.onShow("success", "success delete data");
        })
        .catch((error) => {
          console.log("isi error ", error);
          flashMessage.onShow("error", error[0].msg);
        });
    }
  };
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
      <Content title="Product">
        <div className="flex flex-wrap mt-6">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
            <div className="flex flex-row justify-between mb-2">
              <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-list mr-3"></i> Kategori
              </p>
              <Outline
                title="Tambah Kategori"
                onClick={() => {
                  setDataSelect({ name: "", id: null });
                  setShowCategory("add-category");
                }}
                backgroundBtn="blue"
                size="small"
                leftIcon="plus"
              />
            </div>
            <div className="p-6 bg-white">
              <div className="bg-white h-64 overflow-auto">
                <Table
                  columns={ColumnsCategory}
                  data={dataCategory}
                  withAction={true}
                  addButton={false}
                  withSearch={false}
                  onEdit={(e) => {
                    setDataSelect(e.original);
                    setShowCategory("edit-category");
                  }}
                  onDelete={(e) => {
                    setShowAlert(!showAlert);
                    setDataSelect(e.original);
                    setTableDelete("category");
                  }}
                  onAdd={(e) => alert("add")}
                  mode="white"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
            <div className="flex flex-row justify-between mb-2">
              <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-clipboard mr-3"></i> Tipe
              </p>
              <Outline
                title="Tambah Tipe"
                onClick={() => console.log("press")}
                backgroundBtn="blue"
                size="small"
                leftIcon="plus"
              />
            </div>
            <div className="p-6 bg-white">
              <div className="bg-white h-64 overflow-auto">
                <Table
                  columns={ColumnsProductType}
                  data={dataProductType}
                  withAction={true}
                  addButton={false}
                  withSearch={false}
                  onEdit={(e) => console.log("isi onEdit ", e)}
                  onDelete={(e) => console.log("isi onDelete ", e)}
                  onAdd={(e) => alert("add")}
                  mode="white"
                />
              </div>
            </div>
          </div>
          <div className="w-full pl-0 lg:pl-2 mt-10 ">
            <div className="flex flex-row justify-between mb-2">
              <p className="text-xl pb-3 flex items-center">
                <i className="fas fa-table mr-3"></i> Nama Produk
              </p>
            </div>
            <Tabs>
              <div className="bg-white max-h-screen overflow-auto">
                <Table
                  columns={Columns}
                  data={data}
                  withAction={true}
                  addButton={true}
                  withSearch={true}
                  onEdit={(e) => console.log("isi onEdit ", e)}
                  onDelete={(e) => console.log("isi onDelete ", e)}
                  onAdd={() => flashMessage.onShow("error", "testing")}
                  mode="white"
                />
              </div>
            </Tabs>
          </div>
        </div>
        <FormCategory
          show={showCategory}
          data={dataSelect}
          onClose={() => setShowCategory(null)}
          onSubmit={(e) => onFinishDataCategory(e, "add")}
          onUpdate={(e) => onFinishDataCategory(e, "edit")}
        />
        <AlertWarning
          show={showAlert}
          onClose={() => setShowAlert(false)}
          name={dataSelect.name}
          onContinue={() => onDelete()}
        />
      </Content>
    </div>
  );
}

export default Product;

//client side rendering
Product.getInitialProps = getInitialProps;

async function getInitialProps(ctx: NextPageContext) {
  const jsonCategory = await getApiSSR("/product", ctx);
  const jsonProductType = await getApiSSR("/product-type", ctx);
  return { category: jsonCategory.data, productType: jsonProductType.data };
}
