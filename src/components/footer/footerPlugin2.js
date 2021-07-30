import FooterComponent from "./FooterComponent";

const footerPlugin2 = {
    Renderer: ({ data }) => (
      <FooterComponent></FooterComponent>
    ),
    id: 'footerPlugin2',
    title: 'footerPlugin2',
    description: 'footerPlugin2',
    version: 1,
    controls: {
      type: 'autoform',
      schema: {
        properties: {
          title: {
            type: 'string',
            default: 'someDefaultValue',
          },
        },
        required: ['title'],
      },
    },
  };
  export default  footerPlugin2;