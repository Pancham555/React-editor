import HeroComponent2 from "./HeroComponent2";

const heroPlugin = {
    Renderer: ({ data }) => (
      <HeroComponent2></HeroComponent2>
    ),
    id: 'heroPlugin2',
    title: 'heroPlugin2',
    description: 'heroPlugin2',
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