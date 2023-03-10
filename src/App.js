import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routes/Router/Router';


function App() {
  // className='max-w-[1440px] mx-auto'
  return (
    <div>
       <RouterProvider router={router}></RouterProvider>
       <Toaster></Toaster>
    </div>
  );
}

export default App;
