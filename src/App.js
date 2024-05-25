import  React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Anylitics from './components/anylitics';
import Newsletter from './components/newsletter';
import Cards from './components/cards';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero/>
    <Anylitics/>
    <Newsletter/>
   <Cards/>
   <Footer/>
    </div>
  );
}

export default App;
