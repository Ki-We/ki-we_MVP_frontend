/* eslint-disable react/prop-types */
import React from 'react';

export default function Main(props) {
  return (
    <main id="page-body">
      <div>{props.children}</div>
    </main>
  );
}
