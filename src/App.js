import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import appStore from './utils/appStore';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import WatchPage from './components/WatchPage';

function App() {
  const appRouting = createBrowserRouter([{
    path:'/',
    element:<Body />,
    children:[{
      path:'/',
      element:<MainComponent />
    },
  {
    path:'watch',
    element:<WatchPage />
  }]
  }]);
  return (
    <Provider store={appStore}>
    <div className="App">
      <Head />
      <RouterProvider router={appRouting} />
    </div>
    </Provider>
  );
}

export default App;
