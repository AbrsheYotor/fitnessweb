import './App.css';
import  Hero from './component/Hero.jsx'
import Program from'./Program'
import Reasons from './Reasons'
import Plans from './Plans'
import Testimonials from './Testimonials';
import Join from './Join'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
         <Hero />
         <Program /> 
         <Reasons />
         <Plans />
         <Testimonials />
         <Join />
         <Footer />
         

    </div>
  );
}

export default App;
