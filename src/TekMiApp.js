import { Provider } from 'react-redux';

import { store } from './store/store';
import { MainRouter } from './routers/MainRouter';



function TekMiApp() {
    return ( <Provider store={ store }>
      <MainRouter />
  </Provider>
    );
}

export default TekMiApp;