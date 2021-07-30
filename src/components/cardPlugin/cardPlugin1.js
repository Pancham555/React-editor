import CardComponent from "./CardComponent";




const cardPlugin = {
    Renderer: ({ data }) => (
      <CardComponent data={data}></CardComponent>
    ),
    id: 'cardPlugin',
    title: 'Card',
    description: 'Card sample 1',
    version: 1,
    controls: {
      type: 'autoform',
      schema: {
        properties: {
          title: {
            type: 'string',
            default: 'someDefaultValue',
          },
          imgUrl: {
            type: 'string',
            default: 'put your image URL',
          },
          cardText: {
            type: 'string',
            default: 'put your card main text',
          },
          extendText1: {
            type: 'string',
            default: 'card text 2',
          },
          extendText2: {
            type: 'string',
            default: 'card text 3',
          },
        },
        required: ['title'],
      },
    },
  };
  export default  cardPlugin;