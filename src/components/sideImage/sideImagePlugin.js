// import * as Inputs from '@react-page/editor'
// use a type here, not an interface


const SideImagePlugin = {
    Renderer: (props) => (
        <img src={props.data.url} alt="" style={{ display: "block", width: "auto", height: `${props.data.height}rem`, margin: "1rem 1.5rem" }} />
    ),
    id: 'SideImageCellPlugin',
    title: 'SideImage cell plugin',
    description: 'A cell plugin just displays a side image',
    version: 1,
    controls:
    {
        type: 'autoform',
        schema: {
            properties: {
                url: {
                    type: "string",
                    default: "",
                },
                height: {
                    type: "number",
                    default: 10
                }
            },
            required: ['url'],
        },
    }
    ,
};
export default SideImagePlugin