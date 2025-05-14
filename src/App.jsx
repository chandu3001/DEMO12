import { useState } from 'react';
import './App.css';

function App() {
  const [names] = useState(['Alice', 'Bob', 'Charlie', 'David']);

  return (
    <div className="container mt-5">
      {names.map((name, index) => (
        <div key={index} className="card bg-primary text-white mb-3">
          <div className="card-body">
            <div>
              <span className="fs-4">Name</span>: <span>{name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
