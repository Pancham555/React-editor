import React from 'react';
import { createContentPlugin } from '@react-page/create-plugin-materialui';

export const basicCustomContentPlugin = createContentPlugin < {
    // define the fields the plugin should have
    name: "",
} > ({
    Renderer: ({ state }) => (
        <div style={{ borderRadius: "50px", fontSize: "2rem", background: "green", border: "2px solid blue" }} >
            Hello ji
        </div>

    ),
    version: '0.0.1',
    // a unique name
    name: 'button-plugin',
    // a user facing plugin name
    Button: 'Button content plugin',
    // description shown below the user facing name in the plugin menu
    description: 'Button plugin',
    schema: {
        title: 'Optional schema title',
        required: ['name'],
    },
});
