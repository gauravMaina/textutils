import { useState } from "react";
import Alert from "./Alert";
import Navbar from "./Navbar";
import TextArea from "./TextArea";

function Home() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#1c3a83";
      showAlert("Enable Dark Mode", "success");
      document.title = "Text Utils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.title = "Text Utils - light Mode";
    }
  };
  return (
    <>
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
      <div style={{ height: "60px" }}>
        <Alert alert={alert} />
      </div>
      <TextArea mode={mode} showAlert={showAlert} />
    </>
  );
}

export default Home;
