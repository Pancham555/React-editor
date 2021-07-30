

const navPlugin = {
  Renderer: ({ data }) => (
    <nav style={{ position: "relative", boxShadow: "0px 0.5px 5px black" }}>
      <div
        style={{
          position: "relative",
          height: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          padding: "0 2rem",
          background: "#fff",
        }}
      >
        <div
          style={{
            position: "relative",
            heightfontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          {data.title}
        </div>
        <ul
          style={{
            display: "flex", justifyContent: "center",
            alignItems: "center", listStyle: "none", padding: "0", margin: "0 20px 0 0"
          }}
          class="navList"
        >
          <li >
            <a style={{ textDecoration: "none", marginRight: "15px", color: "black", cursor: "pointer" }} >Home</a>
          </li>
          <li>
            <a style={{ textDecoration: "none", marginRight: "15px", color: "black", cursor: "pointer" }} >Store</a>
          </li>
          <li>
            <a style={{ textDecoration: "none", marginRight: "15px", color: "black", cursor: "pointer" }} >Community</a>
          </li>
          <li>
            <a style={{ textDecoration: "none", marginRight: "15px", color: "black", cursor: "pointer" }} >Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  ),
  id: "navPlugin",
  title: "Nav",
  description: "Navbar",
  version: 1,
  controls: {
    type: "autoform",
    schema: {
      properties: {
        title: {
          type: "string",
          default: "Logo",
        },
      },
      required: ["title"],
    },
  },
};
export default navPlugin;
