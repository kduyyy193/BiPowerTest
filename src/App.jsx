import { Header } from "./layouts/header/Header";
import { SideBar } from "./layouts/sidebar/SideBar";
import Manager from "./pages/form/Manager";
import "./App.css";

function App() {
  return (
    <div className="">
      <Header />
      <SideBar />
      <Manager />
    </div>
  );
}

export default App;
