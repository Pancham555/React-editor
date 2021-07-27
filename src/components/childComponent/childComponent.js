import * as Inputs from '@react-page/editor'
// use a type here, not an interface


const ChildPlugin = {
    Renderer: (props) => (
        <div style={{
            borderRadius: `${props.data.radius}rem`, color: `${props.data.color}`,
            fontSize: `${props.data.fontSize}rem`, padding: "5px 10px", border: `2px solid ${props.data.bordercolor}`,
            background: `${props.data.bgcolor}`, margin: " 10px auto", display: "block"
        }}>{props.data.text}</div>
    ),
    id: 'ChildCellPlugin',
    title: 'Child cell plugin',
    description: 'A cell plugin just displays a child component',
    version: 1,
    controls:
    {
        type: 'autoform',
        schema: {
            properties: {
                bgcolor: {
                    type: "string",
                    default: 'blue',
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
                    default: "",

                }
                ,
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
export default ChildPlugin