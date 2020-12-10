
import React from 'react';
import { IonApp } from '@ionic/react';

import Search from './components/search'
import '../src/App.css'


const App: React.FC = () => {

  return (
    <IonApp>

      <Search />
    </IonApp>
  );
};

export default App;
