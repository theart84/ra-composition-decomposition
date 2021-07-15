import "./App.css";
import {TopNews} from "./components/TopNews/TopNews";
import Currency from "./components/Currency/Currency";
import Search from "./components/Search/Search";
import WidgetContainer from "./components/WidgetContainer/WidgetContainer";
import Service from "./components/Service/Service";

function App() {
  return (
    <div className="wrapper">
      <TopNews/>
      <Currency/>
      <Service/>
      <Search/>
      <WidgetContainer/>
    </div>
  );
}

export default App;
