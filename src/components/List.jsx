import "./List.css";
const List = ({ content }) => {
  return (
    <li className="list">
      <div className="list_bullet"></div> {content}
    </li>
  );
};

export default List;
