import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormEditor from "./pages/FormEditor";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormEditor />} />
      </Routes>
    </Router>
  );
};

export default App;


