import { CellPlugin } from '@react-page/editor';
import React from 'react';

// use a type here, not an interface


const myFirstcellPlugin = {
    Renderer: ({ data }) => (
        <div style={{ background: "lightblue", padding: "36px", color: "white", textAlign: "center" }}>
            <h1> {data.title}</h1>
        </div >
    ),
    id: 'myFirstCellPlugin',
    title: 'My first cell plugin',
    description: 'My first cell plugin just displays a title',
    version: 1,
    controls: {
        type: 'autoform',
        schema: {
            properties: {
                title: {
                    type: 'string',
                    default: '',
                },
            },
            required: ['title'],
        },
    },
};
export default myFirstcellPlugin
