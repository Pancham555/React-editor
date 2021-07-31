// import { CellPlugin } from '@react-page/editor';
import React from 'react';
import * as Inputs from '@react-page/editor'

// use a type here, not an interface

const myFirstcellPlugin = {
  Renderer: (props) => (
    <div className='d-flex justify-content-center m-auto'>
      <img src={props.data.url} alt="" className='d-inline-block m-auto' />
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
        url: {
          type: "string",
          default: "https://media.istockphoto.com/photos/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-picture-id968086564?k=6&m=968086564&s=612x612&w=0&h=akcSZ4mvydFK9xnXi45PSo4mXizwMGxb7j3O_A1qTEU="
        }
      },
      required: ['url'],
    },
  },
};
export default myFirstcellPlugin;
