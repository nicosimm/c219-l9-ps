import { Routes, Route } from "react-router-dom";

import Home from "./Home.js";
import Categories from "./Categories.js";
import Category from "./Category.js";
import Modules from "./Modules.js";
import Register from "./Register.js";
import Confirmation from "./Confirmation.js";
import Header from "./Header.js";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />} >
            <Route path=":moduleId" element={<Modules />} />
          </Route>
          <Route index element={<h3>Select a diploma from above</h3>} />
        </Route>
        <Route path="register" element={<Register/>} />
        <Route path="confirmed" element={<Confirmation />} />   
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
