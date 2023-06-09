import * as React from 'react';
import './style.css';
import HomeContainer from './Containers/HomeContainer';
import HeaderContainer from './Containers/HeaderContainer';
export default function App() {
  return (
    <div>
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}
