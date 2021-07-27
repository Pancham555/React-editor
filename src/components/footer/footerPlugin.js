import * as Inputs from '@react-page/editor'
// use a type here, not an interface


const FooterPlugin = {
    Renderer: (props) => (
        <div style={{
            color: `${props.data.color}`,
            fontSize: `${props.data.fontSize}rem`, padding: "20px 50px",
            background: `${props.data.bgcolor}`, textAlign: "center", display: "block"
        }}>{props.data.text}</div>
    ),
    id: 'FooterCellPlugin',
    title: 'Footer cell plugin',
    description: 'A cell plugin just displays a footer',
    version: 1,
    controls:
    {
        type: 'autoform',
        schema: {
            properties: {
                bgcolor: {
                    type: "string",
                    default: 'black',
                    uniforms: {
                        component: Inputs.ColorPickerField,
                    }
                },
                color: {
                    type: "string",
                    default: 'white',
                    uniforms: {
                        component: Inputs.ColorPickerField,
                    }
                }
                ,
                fontSize: {
                    type: "number",
                    default: 2.0,

                },
                text: {
                    type: "string",
                    default: "",

                },
            },
            required: ['text'],
        },
    }
    ,
};
export default FooterPlugin