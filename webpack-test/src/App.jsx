import React from 'react';
import ReactDOM from 'react-dom';
import Index from '@/components/index';
function App() {
  return (
    <div>
      <Index />
    </div>
  );
}

const root = document.getElementById('root');

ReactDOM.render(<App />, root);
