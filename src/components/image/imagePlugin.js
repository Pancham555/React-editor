// import { CellPlugin } from '@react-page/editor';
import React from "react";

// use a type here, not an interface

const myFirstcellPlugin = {
  Renderer: ({ data }) => (
    <div
      style={{ marginTop: "4rem", display: "flex", justifyContent: "center" }}
    >
      <div
        style={{
          margin: "0px 3rem",
          borderRadius: "2rem",
          backgroundColor: "wheat",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={data.url}
          alt=""
          style={{ width: "auto", height: "30rem", padding: "3rem 0px" }}
        />
      </div>
    </div>
  ),
  id: "ImageCellPlugin",
  title: "Image cell plugin",
  description: "A cell plugin just displays an image",
  version: 1,
  controls: {
    type: "autoform",
    schema: {
      properties: {
        url: {
          type: "string",
          default: "",
        },
      },
      required: ["url"],
    },
  },
};
export default myFirstcellPlugin;
