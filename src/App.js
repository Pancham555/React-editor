import React, { useState } from 'react';

// The editor core
// import type { Value } from '@react-page/editor';
import Editor from '@react-page/editor';

// import the main css, uncomment this: (this is commented in the example because of https://github.com/vercel/next.js/issues/19717)
// import '@react-page/editor/lib/index.css';

// The rich text area plugin
import slate from '@react-page/plugins-slate';
// image
import image from '@react-page/plugins-image';
import myPlugin from './components/image/imagePlugin';
import ParentComponent from '././components/parentComponent/parentComponent';
import ChildComponent from './components/childComponent/childComponent';
import FooterPlugin from './components/footer/footerPlugin';
import ButtonPlugin from './components/buttons/buttonPlugin';
import CardPlugin from './components/cardbox/card';
// import PageLayout from '../../components/PageLayout';

// Stylesheets for the rich text area plugin
// uncomment this
//import '@react-page/plugins-slate/lib/index.css';

// Stylesheets for the imagea plugin
//import '@react-page/plugins-image/lib/index.css';

// Define which plugins we want to use.
const cellPlugins = [slate(), image, myPlugin, ParentComponent, ChildComponent, FooterPlugin, ButtonPlugin, CardPlugin];

export default function SimpleExample() {
  const [value, setValue] = useState(null);
  // console.log(value)
  // const [read, setRead] = useState(false);
  // const handleChange = () => {
  //   setRead(!read);
  // }
  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "center", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div >
          <button onClick={handleChange}>Toggle</button>
        </div>
      </div> */}
      <Editor readOnly={false} cellPlugins={cellPlugins} value={value} onChange={setValue} />

      {/* https://redux-toolkit.js.org/ */}
      {/* https://redux-toolkit.js.org/img/redux.svg */}
    </>
  );
}