import * as Inputs from '@react-page/editor'
// use a type here, not an interface


const FooterPlugin = {
    Renderer: (props) => (
        <div style={{
            display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "column",
            padding: "16px", background: `${props.data.bgcolor}`,
        }}>
            <div style={{ width: "auto" }}>
                <img src={props.data.url} alt="" style={{ margin: "auto", width: "64px", height: "auto" }} />
            </div>
            <div style={{
                color: `${props.data.color}`,
                fontSize: `${props.data.fontSize}rem`, textAlign: "center"
            }}>{props.data.text}</div>
        </div>
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
                url: {
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