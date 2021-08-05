import AlertComponent from "./alertComponent";



const navPlugin = {
    Renderer: ({ data }) => (
        <AlertComponent data={data}></AlertComponent>
    ),
    id: "AlertPlugin",
    title: "Alert",
    description: "Alert",
    version: 1,
    controls: {
        type: "autoform",
        schema: {
            properties: {
                title: {
                    type: "string",
                    default: "Hello world",
                },
                txt: {
                    type: "string",
                    default: "   Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias est maiores iure nesciunt vel perspiciatis aliquid repellat velit earum non.",
                },
                btn: {
                    type: "string",
                    default: "Shop now",
                },
            },
            required: ["title", "txt"],
        },
    },
};
export default navPlugin;
