import React, { useState } from "react";
import Editor from "@react-page/editor";
import slate from "@react-page/plugins-slate";
import image from "@react-page/plugins-image";
import myPlugin from "./components/image/imagePlugin";
import ParentComponent from "././components/parentComponent/parentComponent";
import ChildComponent from "./components/childComponent/childComponent";
import FooterPlugin from "./components/footer/footerPlugin";
import CardPlugin from "./components/CardComponent/CardPlugin";

const cellPlugins = [
  slate(),
  image,
  myPlugin,
  CardPlugin,
  ParentComponent,
  ChildComponent,
  FooterPlugin,
];

export default function SimpleExample() {
  const [value, setValue] = useState(null);
  // console.log(value)
  // const [read, setRead] = useState(false);
  // const handleChange = () => {
  //   setRead(!read);
  // }
  return (
    <>
      <Editor
        readOnly={false}
        cellPlugins={cellPlugins}
        value={value}
        onChange={setValue}
      />
    </>
  );
}
