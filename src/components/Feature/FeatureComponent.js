import React from "react";

const FeatureComponent = (props) => {
  const { title, text } = props?.data;
  return (
    <div className='m-5'>
      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            {title}
          </h2>
          <p class="lead">
            {/* Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place. */}
            {text}
          </p>
        </div>
        <div class="col-md-4 order-md-1">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
