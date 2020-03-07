import React from "react";

export default function Search(props) {
  return (
    <form>
      <input
        type="search"
        name="search"
        placeholder="search"
        onChange={props.handleSearch}
      />
    </form>
  );
}
