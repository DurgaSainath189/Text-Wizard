import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#111111",
        color: props.mode === "dark" ? "white" : "#111111",
      }}
    >
      <h1 className="my-5">About Text Wizard</h1>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
                fontSize:18
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <b>Number of Words and Characters</b>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
              }}
            >
              When a paragraph is entered or modified, the app analyzes the text
              to count the number of words (separated by spaces) and the total
              number of characters, including spaces and punctuation.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
                fontSize:18
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <b>Average Time Taken to Read</b>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
              }}
            >
              Based on typical reading speed assumptions (e.g., 200-250 words
              per minute for average readers), the app calculates how long it
              would take, on average, for a person to read the entire paragraph.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
                fontSize:18
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <b>Toggle Between Dark and Light Theme</b>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
              }}
            >
              Users can change the app's visual appearance to suit their
              preferences or adapt to different lighting conditions by toggling
              between dark and light themes.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
                fontSize:18
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              <b>Convert to Uppercase</b>
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
              }}
            >
              When the user selects this option, all text in the paragraph is
              transformed to uppercase, making it entirely capitalized.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
                fontSize:18
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              <b>Convert to Lowercase</b>
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
              }}
            >
              When the user selects this option, all text in the paragraph is
              transformed to lowercase, making it entirely in small letters.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
                fontSize:18
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              <b>Copy to Clipboard</b>
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
              }}
            >
              When the user selects this option, the app uses the clipboard API
              to copy the paragraph's content to the user's system clipboard,
              making it easy to paste elsewhere.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
                fontSize:18
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              <b>Clear Text</b> 
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
              }}
            >
              When the user selects this option, all text in the paragraph input
              area is removed, providing a clean slate for new content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
                fontSize:18
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              <b>Remove Extra Spaces</b>
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#2b3035",
                color: props.mode === "dark" ? "white" : "#2b3035",
              }}
            >
              When the user selects this option, any excess spaces between words
              are condensed to a single space, improving the readability and
              consistency of the text.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
