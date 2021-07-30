import * as Inputs from '@react-page/editor'
// use a type here, not an interface


const CardPlugin = {
    Renderer: (props) => (
        <div style={{ display: "inline-block", margin: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: `${props.data.headingSize}rem`, textAlign: "center", margin: "5px" }}>{props.data.heading}</div>
            <div style={{ margin: "10px" }}>{props.data.text}</div>
        </div>
    ),
    id: 'CardCellPlugin',
    title: 'Card_cell_plugin',
    description: 'A cell plugin just displays a card',
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
                headingSize: {
                    type: "number",
                    default: 2.6,

                },
                text: {
                    type: "string",
                    default: "SAMPLE TEXT",

                },
                heading: {
                    type: "string",
                    default: "SAMPLE TEXT",

                }
            },
            required: ['text', 'heading'],
        },
    }
    ,
};
export default CardPlugin