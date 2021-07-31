import React from 'react';

const JumbotronComponent = (props) => {
    const {heading,jumbotronText,buttonText} = props?.data;
    return (
        <div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">{heading}</h1>
                <p class="col-md-8 fs-4">{jumbotronText}</p>
                <button class="btn btn-primary btn-lg" type="button">{buttonText}</button>
            </div>
        </div>
    );
};

export default JumbotronComponent;