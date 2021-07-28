import "./Card.css";

const CardPlugin = {
  Renderer: (props) => (
    <div className="card">
      <img src={props.data.url} alt="Avatar" style={{ width: "100%", height: "50%" }} />
      <div className="container">
        <h4>
          <b>{props.data.title}</b>
        </h4>
        <p>{props.data.desc}</p>
      </div>
    </div>
  ),
  id: "Card Plugin",
  title: "Card cell plugin",
  description: "A card plugin which helps to create cards.",
  version: 1,
  controls: {
    type: "autoform",
    schema: {
      properties: {
        fontSize: {
          type: "number",
          default: 1.0,
        },
        url: {
          type: "string",
          default: "",
        },
        title: {
          type: "string",
          default: "",
        },
        desc: {
          type: "string",
          default: "",
        },
      },
      required: ["title", "url", "desc"],
    },
  },
};
export default CardPlugin;
