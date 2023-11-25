import { Provider } from "react-redux";

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './static/bootstrap.css'
import './static/globals.css'
import reportWebVitals from './reportWebVitals';
import { store } from "./redux/store";
import LoaderHoc from "./hoc/LoaderHoc";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
    <LoaderHoc />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
