import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight"
// import "hightlight.js/styles/github-dark.css"
import axios from "axios";
import './App.css';

function App() {
  const [code, setCode] = useState(`function sum() {
  1 + 2;
}`);

  const [review, setReview] = useState('');

  useEffect(() => {
    prism.highlightAll();
  });

  // Function to send code to backend and get AI review
  async function reviewCode() {
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data.result); // Access 'result' property
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("Error getting review from server.");
    }
  }

  return (
    <>
    <header className="header">
        <h1>FixiFy - AI Code Reviewer</h1>
        <p>Instantly review, improve, and debug your code with AI</p>
      </header>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 17,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div onClick={reviewCode} className="button">Review</div>
        </div>

        <div className="right">
          {review ? (
            <div className="review-box">
              <Markdown
              
                  rehypePlugins={[ rehypeHighlight ]}

              >{review}</Markdown>
            </div>
          ) : (
            <p>Click "Review" to get feedback...</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
