import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  return (
    <div>
      <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
        <circle
          cx='100'
          cy='50'
          r='40'
          stroke='black'
          strokeWidth='2'
          fill='orange'
        />
      </svg>
    </div>
  );
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
