

const navPlugin = {
  Renderer: ({ data }) => (
    <nav class="navbar navbar-expand-md navbar-dark  bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{data.title}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          {/* ✎ */}
          {/* <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-light"
              // type="submit" 
              type='button'
            >Search</button>
          </form> */}
        </div>
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
          default: "㊝ Logo",
        },
      },
      required: ["title"],
    },
  },
};
export default navPlugin;
