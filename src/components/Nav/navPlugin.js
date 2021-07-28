

const navPlugin = {
  Renderer: ({ data }) => (
    <nav style={{ position: "relative" }}>
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
          style={{ display: "flex",justifyContent: "center",
          alignItems: "center", listStyle: "none", padding: "0", margin: "0 20px 0 0" }}
          class="navList"
        >
          <li >
            <a style={{textDecoration: "none", marginRight:"15px",color:"black"}}href="#">Home</a>
          </li>
          <li>
            <a style={{textDecoration: "none", marginRight:"15px",color:"black"}} href="#">Store</a>
          </li>
          <li>
            <a style={{textDecoration: "none", marginRight:"15px",color:"black"}} href="#">Community</a>
          </li>
          <li>
            <a style={{textDecoration: "none", marginRight:"15px",color:"black"}} href="#">Contact</a>
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
