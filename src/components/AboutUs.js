import React from 'react';

export default function AboutUs(props) {

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? '#20282e' : 'white',
    border: props.mode === 'dark'
      ? '1px solid white'
      : '1px solid #dee2e6'
  };

  return (
    <div className="container my-3" style={myStyle}>

      <h1>About Us</h1>

      <div
        className={`accordion ${
          props.mode === 'dark'
            ? 'dark-accordion'
            : ''
        }`}
        id="accordionExample"
        style={myStyle}
      >

        <div
          className="accordion-item"
          style={myStyle}
        >
          <h2 className="accordion-header">

            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze Your Text
            </button>

          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={myStyle}
            >
              TextUtils gives you a way to analyze your text quickly and efficiently.
              Be it word count, character count, or removing extra spaces.
            </div>
          </div>
        </div>

        <div
          className="accordion-item"
          style={myStyle}
        >
          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free To Use
            </button>

          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={myStyle}
            >
              TextUtils is a free character counter and word counter utility
              that can be used to manipulate your text efficiently.
            </div>
          </div>
        </div>

        <div
          className="accordion-item"
          style={myStyle}
        >
          <h2 className="accordion-header">

            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser Compatible
            </button>

          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={myStyle}
            >
              This word counter software works in any web browser such as
              Chrome, Firefox, Edge, Safari, and Opera.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}