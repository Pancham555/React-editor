import * as Inputs from '@react-page/editor'
// use a type here, not an interface


const ChildPlugin = {
    Renderer: (props) => (
        <div style={{
            borderBottom: `2px solid ${props.data.bordercolor}`, fontWeight: "bold", fontSize: `${props.data.fontSize}rem`,
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
                    default: "CHILD CELL",

                }
            },
            required: ['text'],
        },
    }
    ,
};
export default ChildPlugin