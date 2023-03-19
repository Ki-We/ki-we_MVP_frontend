import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Item(props) {
  return (
    <div className="w-full my-2">
      <Link to={`/${props.path}}`} className="block w-full text-left text-lg font-semibold pl-5 py-3">
        {props.children}
      </Link>
    </div>
  );
}

Item.defaultProps = {};

Item.propsTypes = {
  children: PropTypes.node.isRequired,
};
