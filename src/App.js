import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import WatchPage from './components/WatchPage';
import SearchVideo from './components/SearchVideo';

function App() {
  const appRouting = createBrowserRouter([{
    path:'/',
    element:<Body />,
    children:[{
      path:'/',
      element:<MainComponent />
    },
  {
    path:'/searchVideo',
    element:<SearchVideo /> 
  },
  {
    path:'/watch',
    element:<WatchPage />
  }
]
  }]);
  return (
    <Provider store={appStore}>
    <div className="App">
      <RouterProvider router={appRouting} />
    </div>
    </Provider>
  );
}

export default App;
