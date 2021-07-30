import HeroComponent from "./HeroComponent";

const heroPlugin = {
    Renderer: ({ data }) => (
      <HeroComponent data={data}></HeroComponent>
    ),
    id: 'heroPlugin',
    title: 'heroPlugin',
    description: 'heroPlugin',
    version: 1,
    controls: {
      type: 'autoform',
      schema: {
        properties: {
          title: {
            type: 'string',
            default: 'someDefaultValue',
          },
          url: {
            type: 'string',
            default: 'put your url',
          },
        },
        required: ['title'],
      },
    },
  };
  export default  heroPlugin;