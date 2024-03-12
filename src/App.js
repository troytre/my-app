import Footer from "./common/Footer";
import Header from "./common/Header";
import './App.css'
import styled from "styled-components";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div >
  );
}

export default App;
