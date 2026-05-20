import React from 'react'
import { useState } from 'react'

export default function TextForm() {
  const [text, setText] = useState('')

  const handleConvertToUppercase = (event) => {
    event.preventDefault()
    setText(text.toUpperCase())
  }
  const handleConvertToLowercase = (event) => {
    event.preventDefault()
    setText(text.toLowerCase())
  }
  const handleclear = (event) => {
    event.preventDefault()
    setText('')
  }
  const handleCopy = (event) => {
    event.preventDefault()
    navigator.clipboard.writeText(text)
  }
  const handleExtraSpaces = (event) => {
    event.preventDefault()
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }

  return (
   <>
   
    <div>
      <form >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Enter your Text Here!!</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div id="emailHelp" className="form-text">We'll never share your Data with anyone else.</div>
        </div>
        <button type="submit" onClick={handleConvertToUppercase} className="btn btn-primary mx-2">Convert to Uppercase</button>
         <button type="submit" onClick={handleConvertToLowercase} className="btn btn-primary mx-2">Convert to lowercase</button>
         <button type="submit" onClick={handleclear} className="btn btn-primary mx-2">Clear Text</button> 
         <button type="submit" onClick={handleCopy} className="btn btn-primary mx-2">Copy Text</button>
         <button type="submit" onClick={handleExtraSpaces} className="btn btn-primary mx-2">Remove Extra Spaces</button>
      </form>
    </div>
    <div className="container">
      <h2>Your Text Summary</h2>
      <p>{text.trim() ? text.trim().split(/\s+/).length : 0} words and {text.length} characters</p>
      <p>{0.008 * text.split(' ').length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>   
    </div>
  
    </>
  )
}
