import Auth from "pages/Auth";
import Todo from "pages/Todo";
<<<<<<< HEAD
=======

>>>>>>> 6eee9cb (feat : conflict 해결)
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
