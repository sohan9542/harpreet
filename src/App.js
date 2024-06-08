import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import FindLaywer from "./pages/Find-laywer";
import SearchResult from "./pages/Search-result";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/find-lawyer" element={<FindLaywer />} />
        <Route path="/search-result" element={<SearchResult />} />
 
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
