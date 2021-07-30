import React, { useState } from "react";
import Editor from "@react-page/editor";
import slate from "@react-page/plugins-slate";
import image from "@react-page/plugins-image";
import FooterPlugin from "./components/footer/footerPlugin";
import headingPlugin from './components/Heading/headingPlugin';
import navPlugin from './components/Nav/navPlugin';
import texBlockPlugin from './components/texBlockPlugin/textBlockPlugin';
import CarouselPlugin from "./components/Carousel/carouselPlugin";
import featurePlugin from "./components/Feature/featurPlugin";

const cellPlugins = [slate(), image, FooterPlugin, headingPlugin, navPlugin, texBlockPlugin, CarouselPlugin,featurePlugin];


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
