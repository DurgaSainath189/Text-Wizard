import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Converter" search="Search Here"/>
      <div className="container my-5">
        <TextForm heading="Enter Your Text"/>
      </div>
    </>
  );
}

export default App;
