import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Michael Ronald"
        content="Lorem ipsum"
      />
    </div>
  )
}

export default App
