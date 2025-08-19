import React from 'react'

export default function About() {
  return (
    <div className='container my-3'>

      <h2>About us</h2>

      <div className="accordion" id="accordionExample">
        
        {/* Accordion Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              TextUtils - Features
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>TextUtils</strong> is a simple React-based text utility app that helps you perform quick text operations. 
              You can convert text to <b>uppercase</b>, <b>lowercase</b>, <b>clear text</b>, and even <b>copy text</b> with a single click. 
              It’s designed to save time and improve productivity when working with text.
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              How It Works
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils provides an input box where you can type or paste your text. 
              With the available buttons, you can instantly transform your text format. 
              It also shows <b>word count, character count, and reading time estimation</b> for the entered text, making it very handy for writers and students.
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Benefits of Using TextUtils
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <ul>
                <li>⚡ Fast and easy to use for text manipulation</li>
                <li>📋 One-click copy and clear options</li>
                <li>🔤 Helps format content for blogs, assignments, or social media</li>
                <li>⏱️ Calculates reading time for better content planning</li>
              </ul>
              Whether you’re a student, developer, or content creator, TextUtils makes text handling effortless!
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
