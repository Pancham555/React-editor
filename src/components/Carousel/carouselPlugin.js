import CarouselComponent from "./CarouselComponent";

const CarouselPlugin = {
    Renderer: ({ data }) => (
      <CarouselComponent></CarouselComponent>
    ),
    id: 'CarouselPlugin',
    title: 'Carousel',
    description: 'Imagine your carousel',
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
  export default  CarouselPlugin;