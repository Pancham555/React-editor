import React, { useState } from "react";
import Editor from "@react-page/editor";
import slate from "@react-page/plugins-slate";
import image from "@react-page/plugins-image";
import myPlugin from "./components/image/imagePlugin";
import ParentComponent from "././components/parentComponent/parentComponent";
import ChildComponent from "./components/childComponent/childComponent";
import FooterPlugin from "./components/footer/footerPlugin";
import CardPlugin from "./components/CardComponent/CardPlugin";
import ButtonPlugin from './components/buttons/buttonPlugin';
import CardPlugin_2 from './components/cardbox/card';
import headingPlugin from './components/Heading/headingPlugin';
import navPlugin from './components/Nav/navPlugin';
import texBlockPlugin from './components/texBlockPlugin/textBlockPlugin';
import SideImagePlugin from "./components/sideImage/sideImagePlugin";
import SecondHeadingPlugin from "./components/Heading/headingSecond";
import CarouselPlugin from "./components/Carousel/carouselPlugin";

const cellPlugins = [slate(), image, FooterPlugin, headingPlugin, navPlugin, texBlockPlugin, CarouselPlugin];


export default function SimpleExample() {
  const [value, setValue] = useState(null);
  console.log(value)
  const [read, setRead] = useState(false);
  const handleChange = () => {
    setRead(!read);
  }
  return (
    <div>

      <div style={{ display: "flex", justifyContent: "center", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div >
          <button onClick={handleChange}>Toggle</button>
        </div>
      </div>
      {/* <button onClick={() => console.log(value)}></button> */}
      <Editor readOnly={read} cellPlugins={cellPlugins} value={value} onChange={setValue} />

      {/* https://redux-toolkit.js.org/ */}
      {/* https://redux-toolkit.js.org/img/redux.svg */}

    </div>
  );
}
