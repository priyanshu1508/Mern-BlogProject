import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import IndexPage from "./components/IndexPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import {UserContextProvider} from "./components/UserContext";
import CreatePost from "./components/CreatePost";
import PostPage from './components/PostPage';
import Home from './components/Home'

function App() { 
  return (
    <UserContextProvider> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path='/' element={<Home />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;