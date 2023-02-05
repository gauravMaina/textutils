import { connect } from "react-redux";
import { SET_TEXT } from "../redux/actions";

function TextArea({ mode, showAlert, dispatch, text }) {

  const handleOnChange = (event) => {
    dispatch({
      type: SET_TEXT,
      payload: {
        text: event.target.value
      }
    })
  };
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    dispatch({
      type: SET_TEXT,
      payload: { text: newText }
    })
    showAlert('Text is converted into UpperCase', 'success')
  };
  const handleLowClick = () => {
    const newText = text.toLowerCase();
    dispatch({
      type: SET_TEXT,
      payload: { text: newText }
    })
    showAlert('Text is converted into LowerCase', 'success')
  };
  const handleClearClick = () => {
    const newText = '';
    dispatch({
      type: SET_TEXT,
      payload: { text: newText }
    })
    showAlert('Text is Cleared', 'success')
  };
  return (
    <div className="container">
      <div className="mb-3">
        <h1 style={{ color: mode === 'dark' ? 'white' : 'black' }}>Enter the Text below to analysed</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          style={{ color: mode === 'dark' ? 'white' : 'black', background: mode === 'dark' ? 'grey' : 'white' }}
          value={text}
          onChange={handleOnChange}
        />
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <div className="container">
        <h2 style={{ color: mode === 'dark' ? 'white' : 'black' }}>Your text summary is</h2>
        <p style={{ color: mode === 'dark' ? 'white' : 'black' }}>
          {text.split(/\s+/).filter((element) => element.length !== 0).length} Words and {text.length} Characters
        </p>
        <p style={{ color: mode === 'dark' ? 'white' : 'black' }}>{0.008 * text.split(" ").length} mins to read</p>
        <h1 style={{ color: mode === 'dark' ? 'white' : 'black' }}>Preview</h1>
        <p style={{ color: mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text : 'Enter some text for Preview'}</p>
      </div>
    </div>
  );
}
const mapStatetoProps = state => {
  return state
}
export default connect(mapStatetoProps)(TextArea)
