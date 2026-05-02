//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    
    <Router>
      <Routes>
        {/* default page */}
        <Route path="/" element={<Login />} />

        {/* register page */}
        <Route path="/register" element={<Register />} />

        {/* dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </Router>
    
  );
}

export default App;