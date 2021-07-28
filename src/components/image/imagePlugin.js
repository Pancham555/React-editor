// import { CellPlugin } from '@react-page/editor';
import React from 'react';
import * as Inputs from '@react-page/editor'

// use a type here, not an interface

const myFirstcellPlugin = {
  Renderer: (props) => (
    <div style={{
      display: "flex", justifyContent: "center", fontWeight: "bold", flexDirection: "column",
      fontSize: `${props.data.fontSize}rem`, color: `${props.data.color}`, textAlign: "center",
      backgroundColor: `${props.data.bgcolor}`, width: "auto", height: `${props.data.height}rem`
    }}>
      <div style={{ width: "auto", margin: "20px auto 20px auto" }}> {props.data.text}</div>
      <div style={{ width: "auto", margin: "10px auto 10px auto", fontSize: "1.6rem" }}> {props.data.secText}</div>
      <div style={{ margin: "20px auto 20px auto" }}>{props.children}</div>
    </div>
  ),
  id: 'TopCellPlugin',
  title: 'Top cell plugin',
  description: 'A cell plugin just displays the top of page',
  version: 1,
  controls: {
    type: 'autoform',
    schema: {
      properties: {
        text: {
          type: "string",
          default: "SAMPLE TEXT",
        },
        secText: {
          type: "string",
          default: "SAMPLE TEXT",
        }
        ,
        color: {
          type: "string",
          default: "white",
          uniforms: {
            component: Inputs.ColorPickerField
          },
        }
        ,
        bgcolor: {
          type: "string",
          default: "white",
          uniforms: {
            component: Inputs.ColorPickerField
          },

        },
        height: {
          type: "number",
          default: 26,
        },
        fontSize: {
          type: "number",
          default: 3,
        }
      },
      required: ['text', 'secText'],
    },
  },
};
export default myFirstcellPlugin;
