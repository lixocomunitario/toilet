// import reactLogo from './assets/react.svg'
// import XLogo from './assets/logo-black.png'
import { FunctionComponent } from 'react'
import { Provider } from 'react-redux';
import { AppRouter } from './AppRouter';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const App: FunctionComponent = () => {

  return (
    <PersistGate persistor={persistor}>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </PersistGate>
);
}

export { App }
