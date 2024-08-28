import React from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom'; // Import Routes and Route
import Nav from './components/Nav';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Pawdopt from './pages/Pawdopt';
import Pawcare from './pages/Pawcare';
import Pawshelther from './pages/Pawshelther';
import Pawoctor from './pages/Pawoctor';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import Testimonials from './sections/Testimonials';
import Team from './sections/Team';

function App() {
  const location = useLocation();
   // Hide Nav on specific routes
   const hideNavOnRoutes = ['/login','/signup'];

  return (
    
      <main className="relative">
        {!hideNavOnRoutes.includes(location.pathname) && <Nav />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section>
                  <Hero />
                </section>
                <section>
                  <Features />
                </section>
                <section>
                  <Testimonials />
                </section>
                <section>
                  <Team />
                </section>
              </>
            }
          />
          <Route path="/pawdopt" element={<Pawdopt />} />
          <Route path="/pawcare" element={<Pawcare />} />
          <Route path="/pawshelther" element={<Pawshelther />} />
          <Route path="/pawoctor" element={<Pawoctor />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </main>
    
  );
}

export default App;
