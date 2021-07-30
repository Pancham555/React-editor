
// use a type here, not an interface


const SecondHeadingPlugin = {
    Renderer: ({ data }) => (
        <div style={{ fontSize: `${data.size}rem`, fontWeight: "bold", margin: "1rem" }}>
            {data.heading}
        </div>
    ),
    id: 'SecondHeadingPlugin',
    title: 'Second Heading',
    description: 'Put you blog Second Heading',
    version: 1,
    controls: {
        type: 'autoform',
        schema: {
            properties: {
                heading: {
                    type: 'string',
                    default: 'Put your heading',
                },
                size: {
                    type: "number",
                    default: 2,
                }

            },
            required: ['heading'],
        },
    },
};
export default SecondHeadingPlugin;