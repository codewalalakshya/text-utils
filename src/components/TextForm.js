import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const [text, setText] = useState('')

  // Convert to Uppercase
  const handleConvertToUppercase = (event) => {
    event.preventDefault()
    setText(text.toUpperCase())
    props.showAlert("Converted to Uppercase","success");
  }

  // Convert to Lowercase
  const handleConvertToLowercase = (event) => {
    event.preventDefault()
    setText(text.toLowerCase())
    props.showAlert("Converted to Lowercase","success");
  }

  // Clear Text
  const handleClear = (event) => {
    event.preventDefault()
    setText('')
    props.showAlert("Text has been cleared","success");
  }

  // Copy Text
 const handleCopy = (event) => {
  event.preventDefault()

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(() => {
        props.showAlert("Text copied successfully!", "success")
      })
      .catch(() => {
        props.showAlert("Failed to copy text", "danger")
      })
  } else {
    // Fallback method
    let textArea = document.createElement("textarea")
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()

    try {
      document.execCommand("copy")
      props.showAlert("Text copied successfully!", "success")
    } catch (err) {
      props.showAlert("Copy failed", "danger")
    }

    document.body.removeChild(textArea)
  }
}

  // Remove Extra Spaces
  const handleExtraSpaces = (event) => {
    event.preventDefault()

    let newText = text.split(/\s+/)
    setText(newText.join(' '))
    props.showAlert("Extra spaces have been removed","success");
  }

  // Handle Change
  const handleOnChange = (event) => {
    setText(event.target.value)

  }

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <form>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
            >
              <h2>{props.heading}</h2>
            </label>

            <textarea
              className={`form-control ${
                props.mode === 'dark'
                  ? 'bg-dark text-light'
                  : 'bg-white text-dark'
              }`}
              id="exampleFormControlTextarea1"
              rows="10"
              value={text}
              onChange={handleOnChange}
            ></textarea>

            <div
              id="emailHelp"
              className="form-text"
              style={{
                color: props.mode === 'dark' ? 'white' : 'black'
              }}
            >
              We'll never share your data with anyone else.
            </div>
          </div>

          <button
            type="button"
            onClick={handleConvertToUppercase}
            className="btn btn-primary mx-2 my-1"
          >
            Convert to Uppercase
          </button>

          <button
            type="button"
            onClick={handleConvertToLowercase}
            className="btn btn-primary mx-2 my-1"
          >
            Convert to Lowercase
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="btn btn-primary mx-2 my-1"
          >
            Clear Text
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="btn btn-primary mx-2 my-1"
          >
            Copy Text
          </button>

          <button
            type="button"
            onClick={handleExtraSpaces}
            className="btn btn-primary mx-2 my-1"
          >
            Remove Extra Spaces
          </button>
        </form>
      </div>

      {/* Text Summary */}
      <div
        className="container my-4"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h2>Your Text Summary</h2>

        <p>
          {text.trim() ? text.trim().split(/\s+/).length : 0} words and{' '}
          {text.length} characters
        </p>

        <p>
          {text.trim()
            ? (0.008 * text.trim().split(/\s+/).length).toFixed(2)
            : 0}{' '}
          Minutes read
        </p>

        <h2>Preview</h2>

        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string,
  mode: PropTypes.string
}

TextForm.defaultProps = {
  heading: 'Enter the text to analyze below',
  mode: 'light'
}