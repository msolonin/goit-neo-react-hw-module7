import css from './SearchBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import {changeFilter, selectNameFilter} from "../../redux/filtersSlice.js";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filtersValue = useSelector(selectNameFilter);
    return (
      <div className={css.formSearch}>
          <label>Find contacts by name</label>
          <br/>
          <input type="text" name="filter" value={filtersValue} onChange={
              (e) => dispatch(changeFilter(e.target.value))}/>
      </div>

    );
};

export default SearchBox;
