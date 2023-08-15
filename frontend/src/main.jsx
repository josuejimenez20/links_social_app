import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
// import { AppRouter } from './routes/AppRouter';
import InitialApp from './initialApp';
import { Provider } from 'react-redux';
import { store } from "./redux/store/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <InitialApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode >,
)
