import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilters } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector((state) => state.filters.name);

  return (
    <div className={css.container}>
      <label className={css.text} htmlFor="searchText">
        Find contacts by name
      </label>
      <input
        className={css.field}
        type="text"
        // id={searchText}
        value={filterValue}
        onChange={(event) => dispatch(setFilters(event.target.value))}
      />
    </div>
  );
}
