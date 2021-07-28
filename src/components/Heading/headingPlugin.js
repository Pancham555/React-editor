
// use a type here, not an interface


const headingPlugin = {
    Renderer: ({ data }) => (
      <div style={{margin:"20px",padding:"20px"}}>
          <div>
            <h1 style={{fontSize:"40px",padding:"15px"}}>{data.heading}</h1>
          </div>
          <div>
              <p style={{marginLeft:"20px"}}>Written by <i>{data.author}</i></p>
          </div>
      </div>
    ),
    id: 'headingPlugin',
    title: 'Heading',
    description: 'Put you blog heading',
    version: 1,
    controls: {
      type: 'autoform',
      schema: {
        properties: {
          heading: {
            type: 'string',
            default: 'Put your heading',
          },
          author: {
            type: 'string',
            default: 'Put your author name',
          },
        },
        required: ['heading',"author"],
      },
    },
  };
  export default  headingPlugin;