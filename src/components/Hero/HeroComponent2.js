import React from "react";

const HeroComponent2 = (props) => {
  const { title, text, url } = props?.data
  return (
    <div className="container p-5 mt-5">
      <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4 fst-italic">
            {title}
          </h1>
          <p class="lead my-3">
            {text}
          </p>
          <p class="lead mb-0">
            <a href={url === "put your url" ? "#" : url} class="text-white fw-bold">
              Continue reading...
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent2;
