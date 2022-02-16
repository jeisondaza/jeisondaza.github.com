import "./Message.css";

function Message({ msg, color }) {
  return <p className={`style ${color}`}>{msg}</p>;
}

export default Message;
