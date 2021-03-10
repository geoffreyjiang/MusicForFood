import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Uploads from "./pages/Upload";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Messages from "./pages/Messages";
import ProductListing from "./pages/ProductListing";

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/upload" component={Uploads} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/productlist" component={ProductListing} />
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
