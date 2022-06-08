import React from 'react';
// import React-DOM from 'react-dom';
import tippy from 'tippy.js'

function useTooltip(id, content) {
  React.useEffect(() => {
    tippy(`#${id}`, { content });
  }, [id, content]);
}

function App() {
  useTooltip('myButton', 'Hello world!');
  useTooltip('myParagraph', 'This is anothor tooltip.');
  
  return (
    <React.Fragment>
    <button id="myButton">Hover me</button>
    <p>
      <span id = "myParagraph">Hover me too!</span>
    </p>
    </React.Fragment>
  );
}

export default App;