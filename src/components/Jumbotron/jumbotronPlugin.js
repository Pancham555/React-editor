import JumbotronComponent from "./JumbotronComponent";

const jumbotronPlugin = {
    Renderer: ({ data }) => (
      <JumbotronComponent data={data}></JumbotronComponent>
    ),
    id: 'jumbotronPlugin',
    title: 'jumbotronPlugin',
    description: 'jumbotronPlugin',
    version: 1,
    controls: {
      type: 'autoform',
      schema: {
        properties: {
          heading: {
            type: 'string',
            default: 'Jumbotron Heading',
          },
          jumbotronText: {
            type: 'string',
            default: 'Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.',
          },
          buttonText: {
            type: 'string',
            default: 'button',
          },
        },
        required: ['heading','jumbotronText'],
      },
    },
  };
  export default  jumbotronPlugin;