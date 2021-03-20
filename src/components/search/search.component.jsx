import React from "react";
import "./search.styles.css";

export const Search = ({ handleOnChange }) => <input className="search" type="search" placeholder="Search monsters" onChange={handleOnChange} />;
