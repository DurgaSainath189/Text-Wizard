import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const changeMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Switched to Light Mode", "Success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#111111";
      showAlert("Switched to Dark Mode", "Success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Text Wizard"
          search="Search Here"
          mode={mode}
          changeMode={changeMode}
        />
        <Alert alert={alert} />
        <div className="container my-5" mode={mode}>
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
