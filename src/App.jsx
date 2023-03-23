import React from 'react';
import "./Styles/App.css"
// Import des pages
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import AppRoutes from "./AppRoutes"

const App = () => {
    return (
        <>
        <div className="main-container">
        <Header />
          <AppRoutes />
        </div>
        <Footer />
       </> 
    );
};
export default App;