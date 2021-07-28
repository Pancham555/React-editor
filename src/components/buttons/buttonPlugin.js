import * as Inputs from '@react-page/editor'
// use a type here, not an interface


const ButtonPlugin = {
    Renderer: (props) => (
        <div style={{
            borderRadius: `${props.data.radius}rem`, padding: "15px 30px", display: "inline",
            border: `2px solid ${props.data.bordercolor}`, fontWeight: "bold", fontSize: `${props.data.fontSize}rem`,
        }}>{props.data.text}</div>
    ),
    id: 'ButtonCellPlugin',
    title: 'Button cell plugin',
    description: 'A cell plugin just displays a button component',
    version: 1,
    controls:
    {
        type: 'autoform',
        schema: {
            properties: {
                color: {
                    type: "string",
                    default: 'white',
                    uniforms: {
                        component: Inputs.ColorPickerField,
                    }
                },
                bordercolor: {
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
                    default: "SAMPLE TEXT",

                },
                radius: {
                    type: "number",
                    default: 0,

                }
            },
            required: ['text'],
        },
    }
    ,
};
export default ButtonPlugin