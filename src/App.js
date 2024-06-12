// import logo from "./logo.svg";
import "./App.css";
import InputCompo from "./Component/Todo";
import HeaderCompo from "./Component/Header";
import FooterCompo from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <HeaderCompo />
      <InputCompo />
      {/* <TwoFields /> */}
      {/* <FooterCompo /> */}
    </div>
  );
}

export default App;
