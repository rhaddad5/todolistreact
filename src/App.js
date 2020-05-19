import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Todo from "./Todo"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

library.add(faTimesCircle)

function App() {
  return (
    <div className="container">
      <Todo/>
    </div>
  );
}

export default App;
