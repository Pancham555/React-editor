
// use a type here, not an interface


const texBlockPlugin = {
    Renderer: ({ data }) => (
      <div>
          <p style={{padding:`${data.padding}`}}>{data.text}</p>
      </div>
    ),
    id: 'textBlock',
    title: 'Text block',
    description: 'put your text here',
    version: 1,
    controls: {
      type: 'autoform',
      schema: {
        properties: {
          text: {
            type: 'string',
            default: 'put your text please',
          },
          padding: {
            type: 'string',
            default: '15px',
          },
        },
        required: ['text','padding'],
      },
    },
  };
  export default  texBlockPlugin;