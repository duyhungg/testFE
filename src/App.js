// App.js
import "./App.css";
import Sidebar from "./component/sidebar/sidebar";
import Content from "./component/content/content";
import Footer from "./component/footer/footer";
function App() {
  return (
    <div className="App">
      <div className="Sidebar">
        <Sidebar />
      </div>
      <div className="Content">
        <Content />
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
