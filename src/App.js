import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import PostEditor from "./PostEditor";
import Author from "./Authors";

function App() {
    return (
        <div className="App container">
            <div className="wrapper">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route
                            path="/admin/postEditor/:id"
                            element={<PostEditor />}
                        />
                        <Route path="/author/:id" element={<Author />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
