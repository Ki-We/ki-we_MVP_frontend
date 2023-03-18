import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  return (
    <div className=" w-full px-4 relative">
      <h6 className=" font-bold">{props.title}</h6>
      <input
        type={props.type}
        className={`border-2 rounded-md font-extrabold border-black px-2 w-full my-1 py-${props.height}`}
        placeholder={props.children}
      />
      {props.number && (
        <>
          <button className="absolute right-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
          <button className="absolute bottom-0.5 right-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  height: 2,
};

Input.propsTypes = {
  children: PropTypes.node.isRequired,
};
