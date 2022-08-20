import React from 'react';
import Navigation from './src/navigation/NavigationRoute';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
}

export default App;
