import { Provider } from 'react-redux';

import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';



function TekMiApp() {
    return ( <Provider store={ store }>
      <AppRouter />
  </Provider>
    );
}

export default TekMiApp;