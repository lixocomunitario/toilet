// import reactLogo from './assets/react.svg'
// import XLogo from './assets/logo-black.png'
import { FunctionComponent } from 'react'
import { Provider } from 'react-redux';
import { AppWrapper } from './AppRouter'; // Alterado de AppRouter para AppWrapper
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const App: FunctionComponent = () => {

  return (
    <PersistGate persistor={persistor}>
        <Provider store={store}>
            <AppWrapper />
        </Provider>
    </PersistGate>
);
}

export { App }


