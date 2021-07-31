import React, { useEffect, useState } from "react";
import Editor from "@react-page/editor";
import slate from "@react-page/plugins-slate";
import image from "@react-page/plugins-image";
import FooterPlugin from "./components/footer/footerPlugin";
import FooterPlugin2 from "./components/footer/footerPlugin2";
import headingPlugin from './components/Heading/headingPlugin';
import navPlugin from './components/Nav/navPlugin';
import texBlockPlugin from './components/texBlockPlugin/textBlockPlugin';
import CarouselPlugin from "./components/Carousel/carouselPlugin";
import featurePlugin from "./components/Feature/featurPlugin";
import heroPlugin from "./components/Hero/heroPlugin";
import heroPlugin2 from "./components/Hero/heroPlugin2";
import cardPlugin from "./components/cardPlugin/cardPlugin1";
import ApiPlugin from "./components/api/apiPlugin";
import jumbotronPlugin from "./components/Jumbotron/jumbotronPlugin";
import axios from "axios";

const cellPlugins = [slate(), navPlugin, heroPlugin, heroPlugin2, jumbotronPlugin, FooterPlugin, FooterPlugin2, headingPlugin, image, texBlockPlugin, cardPlugin, CarouselPlugin, featurePlugin, ApiPlugin];



export default function SimpleExample() {
  const [value, setValue] = useState(null);
  console.log(value)
  const [read, setRead] = useState(false);
  const handleChange = () => {
    setRead(!read);
  }

  //Sending part

  // useEffect(() => {
  //   axios.post("", value).then((res) => {
  //     console.log(res)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }, [])
  return (

    <div>
      <div style={{ display: "flex", justifyContent: "center", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div >
          <button onClick={handleChange}>Toggle</button>
        </div>
      </div>
      {/* <button onClick={() => console.log(value)}></button> */}
      <Editor readOnly={read} cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </div>
  );
}
