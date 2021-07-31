import "semantic-ui-css/semantic.min.css";
import logo from "./logo.svg";
import "./App.css";
import PostList from "./components/PostList";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PostList />
    </div>
  );
}
