
// use a type here, not an interface


const texBlockPlugin = {
  Renderer: ({ data }) => (
    <div>
      <p style={{ padding: `${data.padding}px`, margin: "1rem" }}>{data.text}</p>
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
          type: 'number',
          default: 15,
        },
      },
      required: ['text', 'padding'],
    },
  },
};
export default texBlockPlugin;