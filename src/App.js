import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppContainer from "./routes/index"
import {store, persistor} from './redux/store.js'


import './ReactotronConfig';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <AppContainer />
      </PersistGate>
    </Provider>
  )
}
export default App;