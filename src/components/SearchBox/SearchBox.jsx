import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.SearchBox}>
      <label>
        <span>Find contacts by name</span>
        <input
          className="input input-bordered border-2 border-black w-full max-w-xs"
          type="text"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
