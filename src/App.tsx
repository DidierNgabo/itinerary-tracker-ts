import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import TracksProvider from './context/TracksContext';
import Index from './pages/Index';
import About from './pages/About';
import AddIterinary from './pages/AddIterinary';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <TracksProvider>
    <Router>
      <div className="relative max-w-md mt-16 mx-auto">
      <div className="max-w-md mx-auto mt-10 mb-4 relative z-50 bg-white   shadow-xl p-4">
        <NavBar />
        <Routes>
          <Route  path="/" element={ <Index />}>
          </Route>
          <Route  path="/about" element={<About />}/>
          <Route  path="/add" element={<AddIterinary />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
      <img src="assets/images/shape2.jpg" className="absolute  h-80  z-0 -bottom-16 -left-20" alt="shape" />
      </div>
    </Router>
  </TracksProvider>
  );
}

export default App;
