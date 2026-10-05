import {BrowserRouter,Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MedicineDetails from "./pages/MedicineDetails";
import "./App.css";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<HomePage />} />
      <Route path= "/medicine/:id" element={<MedicineDetails />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
