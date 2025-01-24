import "bootstrap/dist/css/bootstrap.min.css";
import AppleBar from "./components/AppleBar.jsx";
import AppleNovita from "./components/AppleNovita.jsx";
import AppleOthers from "./components/AppleOthers.jsx";
import AppleFooter from "./components/AppleFooter.jsx";
import AppleNew from "./components/AppleNew.jsx";


function App() {
  return (
    <>
      <div className="d-lg-flex">
        <AppleBar />
        <div>
          <AppleNovita />
          <AppleNew/>
          <AppleOthers />
          <AppleFooter />
        </div>
      </div>
    </>
  );
}

export default App;
