import * as Inputs from '@react-page/editor'
// use a type here, not an interface


const ParentPlugin = {
    Renderer: (props) => (
        <div style={{
            display: "flex", justifyContent: "space-between",
            color: `${props.data.color}`, fontWeight: "bold", fontSize: `${props.data.fontSize}rem`,
            width: "100%", height: `${props.data.height}rem`, background: `${props.data.bgcolor}`, textAlign: "center"
        }}>
            <div style={{ margin: "auto 50px", width: "auto" }}>{props.data.text}</div>

            <div style={{ margin: "auto 50px", width: "auto", display: "flex", justifyContent: "space-evenly" }}>
                {props.children}
            </div>
        </div>
    ),
    id: 'ParentCellPlugin',
    title: 'Parent cell plugin',
    description: 'A cell plugin just displays a parent component',
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
                height: {
                    type: "number",
                    default: 5.0,

                },
                fontSize: {
                    type: "number",
                    default: 2,

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
export default ParentPlugin

