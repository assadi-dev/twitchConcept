import React, { useState } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const SearchBar = () => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={styles.searchBarContainer}>
      <form className={classNames(styles.searchBaForm, focus && styles.focus)}>
        <input
          className={styles.serachField}
          type="text"
          placeholder="Rechercher"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <span className={styles.searchButton}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </form>
      <ul className={styles.searchResult}>
        <li>Fifa 21</li>
        <li>Destiny 2</li>
        <li>Valorant</li>
      </ul>
    </div>
  );
};

export default SearchBar;
