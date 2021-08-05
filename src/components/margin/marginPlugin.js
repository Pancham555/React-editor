
const VerticalMarginPlugin = {
    Renderer: ({ data }) => (
        <div style={{ margin: `${data.margin}rem`, width: "auto", height: "100%" }}>
        </div>
    ),
    id: 'MarginPlugin',
    title: 'Margin',
    description: 'Put you blog Margin',
    version: 1,
    controls: {
        type: 'autoform',
        schema: {
            properties: {
                margin: {
                    type: 'number',
                    default: 2,
                }
            },
            required: ['margin',],
        },
    },
};
export default VerticalMarginPlugin;