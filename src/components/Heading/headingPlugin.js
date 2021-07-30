
// use a type here, not an interface

import { Avatar } from "@material-ui/core";


const headingPlugin = {
    Renderer: ({ data }) => (
      <div style={{margin:"20px",padding:"20px 60px"}}>
          <div>
            <h1 style={{fontSize:"40px",padding:"15px"}}>{data.heading}</h1>
          </div>
          <div>
          <div style={{display:"flex"}}>
                <Avatar alt="Remy Sharp" src={data.imageUrl} /><p style={{marginLeft:"20px"}}>Written by <i>{data.author}</i></p>
          </div>
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
          imageUrl: {
            type: 'string',
            default: "https://media-exp1.licdn.com/dms/image/C5603AQE3gkmO0dnN4A/profile-displayphoto-shrink_800_800/0/1622290398675?e=1632960000&v=beta&t=pO-y2tSDXvbdexvDyoBJL8FbRF0BrRqhkxb9WdqMTpc",
          },
        },
        required: ['heading',"author"],
      },
    },
  };
  export default  headingPlugin;