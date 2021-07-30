import React from 'react';

const HeroComponent = (props) => {
    const { url, title, text } = props?.data;
    return (
        <div class="container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                {/* col-10 col-sm-8 col-lg-6 */}
                <div class="col-lg-6 col-sm-8  d-flex justify-content-center align-items-center">
                    <img src={`${url}`} class="d-block mx-lg-auto img-fluid" alt="check url" width="auto" height="auto" loading="lazy" />
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-3 mb-3">{title}</h1>
                    <p class="lead">{text}</p>
                    {/* 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.' */}
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" class="btn btn-dark btn-lg px-4 me-md-2">Primary</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeroComponent;