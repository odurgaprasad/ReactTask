import Header from "./components/Header/header";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css";
import Card from "./components/MainCard/Card";
function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <Header />
        <Card />
      </div>
    </div>
  );
}

export default App;
