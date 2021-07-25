// import logo from './logo.svg';
import Head from './components/navbar'
import Body from './components/jumbotron'
import MyProject from './components/myproject'
import About from './components/aboutMe'
import Quotes from './components/quotes'
import Contact from './components/contact'
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* </header> */}
      <Head />
      <Body />
      <About />
      <MyProject />
      <Quotes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
