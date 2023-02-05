import { connect } from 'react-redux'
import { SHOW_ALERT, TOGGLE_MODE } from "../redux/actions";
import Alert from "./Alert";
import Navbar from "./Navbar";
import TextArea from "./TextArea";

function Home({ mode, alert, dispatch }) {
  const showAlert = (message, type) => {
    dispatch({
      type: SHOW_ALERT, payload: {
        message, type
      }
    })
    setTimeout(() => {
      dispatch({
        type: SHOW_ALERT, payload: null
      })
    }, 1500);
  };
  const toggleMode = () => {
    dispatch({ type: TOGGLE_MODE })
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
const mapStatetoProps = state => {
  return state
}
export default connect(mapStatetoProps)(Home);
