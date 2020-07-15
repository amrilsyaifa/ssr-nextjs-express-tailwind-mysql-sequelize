import React from "react";
import { useState } from "react";

export const GlobalContext = React.createContext(null);

const GlobalContextContainer = ({ children }) => {
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState(false);
  const [type, setType] = useState("");
  const [text, setText] = useState("");

  const handleOnPressMenu = (e) => {
    setShow(!show);
  };

  const onShow = (type, text) => {
    setToast(true);
    setType(type);
    setText(text);
    setTimeout(() => onClose(), 2000);
  };

  const onClose = () => {
    setToast(false);
    setType("");
    setText("");
  };

  return (
    <GlobalContext.Provider
      value={{
        show,
        toast,
        type,
        text,
        handleOnPressMenu,
        onShow,
        onClose,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextContainer;
