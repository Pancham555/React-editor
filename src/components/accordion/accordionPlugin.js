import AccordionComponent from "./accordionComponent";
const AccordionPlugin = {
    Renderer: ({ data }) => (
        <AccordionComponent data={data}></AccordionComponent>
    ),
    id: 'AccordionPlugin',
    title: 'Accordion Plugin',
    description: 'put your accordion here',
    version: 1,
    controls: {
        type: 'autoform',
        schema: {
            properties: {
                title: {
                    type: 'string',
                    default: 'Heading',
                },
                txt: {
                    type: 'string',
                    default: "put your text here",
                },
            },
            required: ['title', 'txt'],
        },
    },
};
export default AccordionPlugin;