import { useState } from "react";
import Menu from "./components/Menu";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Menu />
      <Content />
    </div>
  );
}

export default App;
