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
          default: 'Responsive left-aligned hero with image',
        },
        url: {
          type: 'string',
          default: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        },
        text: {
          type: "string",
          default: "Hello world"
        }
      },
      required: ['title'],
    },
  },
};
export default heroPlugin;