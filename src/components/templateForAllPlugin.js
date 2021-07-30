const myFirstcellPlugin = {
    Renderer: ({ data }) => (
      <p>{data.title}</p>
    ),
    id: 'myFirstCellPlugin',
    title: 'My first cell plugin',
    description: 'My first cell plugin just displays a title',
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
  export default  myFirstcellPlugin;