import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import BatchesAndBars from "./components/batches";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="heading heading-text">Add Batch & Bar Information</div>
        <BatchesAndBars />
      </div>
    </Provider>
  );
}

export default App;
