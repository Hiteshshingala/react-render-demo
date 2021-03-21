import './App.css';
import MainRouter from "./router/index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
        <MainRouter/>
     </BrowserRouter>
    </>
  );
}

export default App;
