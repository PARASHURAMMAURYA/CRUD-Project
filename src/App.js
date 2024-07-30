import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./components/students/View";
import Edit from "./components/students/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} /> 
          <Route path="/view/:id" Component={View} />
          <Route path="/edit/:id" Component={Edit} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
