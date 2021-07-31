import ApiComponent from "./apiComponent";

const ApiPlugin = {
    Renderer: ({ data }) => (
        <ApiComponent data={data}></ApiComponent>
    ),
    id: 'ApiPlugin',
    title: 'ApiPlugin',
    description: 'ApiPlugin',
    version: 1,
    controls: {
        type: 'autoform',
        schema: {
            properties: {
                link: {
                    type: 'string',
                    default: 'http://localhost:8000/',
                },

            },
            required: ['link'],
        },
    },
};
export default ApiPlugin;