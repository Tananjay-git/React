// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';

// let name = "Tananjay";
function App() {
  return (
    <>
      {/* <Navbar></Navbar>    This is for the example of default props*/}
      <Navbar title = "TextUtils" aboutText = "About Us"/>
      {/* <About/> */}
      <div className="container my-3">
        <Textform heading = "Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
