import React from "react";
import List from "./List";
import Form from './Form'
const App = () => (
  <div className="row mt-10">
    <div className="col-md-9 offset-md-1">

      <Form />
    </div>
    <div className="col-md-9 offset-md-1">

      <List />
    </div>

  </div>);
export default App;