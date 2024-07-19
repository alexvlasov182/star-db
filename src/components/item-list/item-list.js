import React from "react";
import PropTypes from "prop-types";

import "./item-list.css";

const ItemList = (props) => {
  const { data, onItemSelected } = props;
  const items = data.map(({ id, name }) => {
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {name}
      </li>
    );
  });
  return (
    <div className="card-body">
      <ul className="item-list list-group">{items}</ul>
    </div>
  );
};

ItemList.defaultProps = {
  onItemSelected: () => {},
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemList;
