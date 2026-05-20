import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';




function App() {
  return (
    <>
     <Navbar
       title="TextUtils"
       aboutText="About Us"
       logo="/logo.png"
       logoAlt="Textutils logo"
     />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
        <AboutUs />
      </div>
    </>
  );
}

export default App;