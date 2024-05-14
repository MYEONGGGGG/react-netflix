import './App.css';
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <AppLayout /> } />
      </Routes>
    </div>
  );
}

export default App;
