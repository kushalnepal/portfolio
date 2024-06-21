import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewComponent from "./component/NewComponent/NewComponent";
import Hire from "./component/Hire/Hire.component";

const AppRouting = () => {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<NewComponent />} />
        <Route path="/home" element={<NewComponent />} />
        <Route path="/about" element={<NewComponent />} />
        <Route path="/service" element={<NewComponent />} />
        <Route path="/skills" element={<NewComponent />} />
        <Route path="/projects" element={<NewComponent />} />
        <Route path="/contact" element={<NewComponent />} />
        <Route path="/hire_me" element={<Hire />} />
      </Routes>
    </Router>
  );
};

export default AppRouting;
