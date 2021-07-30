import HeroComponent2 from "./HeroComponent2";

const heroPlugin = {
  Renderer: ({ data }) => (
    <HeroComponent2 data={data}></HeroComponent2>
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
        text: {
          type: "string",
          default: "someDefaultValue",
        }
      },
      required: ['title'],
    },
  },
};
export default heroPlugin;