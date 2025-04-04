import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import CustomHeader from "./assets/CustomComponents/CustomHeader";
import CustomFooter from "./assets/CustomComponents/CustomFooter";
import CustomMain from "./assets/CustomComponents/CustomMain";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header></header>
      <CustomHeader />
      <CustomMain />

      <footer className="mt-5">
        <CustomFooter />
      </footer>
    </>
  );
}

export default App;
