import React from 'react';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';

export default function Layout(props) {
  return (
    <>
      <Header />
      <Main>{props.children}</Main>
      <Nav />
    </>
  );
}
