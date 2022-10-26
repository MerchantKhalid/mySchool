
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import {routes} from './components/Routes/Routes';

function App() {
  return (
    <div className='app'>
    <RouterProvider router={routes}></RouterProvider>
    <Toaster />
    </div>
  );
}

export default App;
