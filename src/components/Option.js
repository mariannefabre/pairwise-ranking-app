import "../styles.css";
import { useDispatch} from "react-redux";
import { useState } from "react";
import Delete from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckSharpIcon from '@material-ui/icons/CheckSharp';

const Option = ({ option }) => {
  const { id, text} = option;
  const [content, setContent] = useState(text);
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch({ type: "REMOVE_OPTION", id: id });
  };
  const handleEdit = () => {
    if (isEditable) {
      if (content !== text) {
        dispatch({ type: "EDIT_OPTION", id, name: content });
      }
      setIsEditable(false);
    } else {
      setIsEditable(true);
    }
  };
  const handleChange = (e) => {
    setContent(e.target.value);
  };

    return (
      <li className="list-item">
        {isEditable ? (
          <input
            className="option-edit"
            value={content}
            onChange={handleChange}
          ></input>
        ) : (
          <p className="option">{text}</p>
        )}
        {isEditable ? <CheckSharpIcon id="icon" onClick={handleEdit}></CheckSharpIcon> : <EditIcon id="icon" onClick={handleEdit}></EditIcon>}
        
        <Delete id="icon" onClick={handleRemove}/>
      </li>
    );
  
};

export default Option;
