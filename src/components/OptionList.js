import { useSelector } from "react-redux";
import Option from "./Option";
import "../styles.css";

const OptionList = () => {
  const options = useSelector((state) => state.options);

  const renderedListItems = options.map((option) => {
    return <Option key={option.id} option={option} />;
  });

  return <ul className="options-list">{renderedListItems}</ul>;
};

export default OptionList;
