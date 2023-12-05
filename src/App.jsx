import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";
import Aboutus from "./routes/Aboutus";
import Location from "./routes/Location";
import Servicesadmin from "./routes/Servicesadmin";
import Servicesfiscal from "./routes/Servicesfiscal";
import ServicesJudi from "./routes/Servicesjudi";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Servicesadmin" element={<Servicesadmin />} />
        <Route path="/Servicesfiscal" element={<Servicesfiscal />} />
        <Route path="/Servicesjudi" element={<ServicesJudi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
