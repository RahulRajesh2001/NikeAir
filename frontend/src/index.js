import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import HomeScreen from './screens/HomeScreen'
import ProductDetailScreen from './screens/ProductDetailScreen';
import LoginScreen from './screens/LoginScreen';
import Development from '../src/components/Development/Development'
import RegisterScreen from './screens/RegisterScreen';
import LandingPage from '../src/components/LandingPage/LandingPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<LandingPage/>} />
      <Route  path='/home' element={<HomeScreen />} />
      <Route  path='/search/:keyword' element={<HomeScreen />} />
      <Route  path='/product/:id' element={<ProductDetailScreen />} />
      <Route  path='/login' element={<LoginScreen />} />
      <Route  path='/register' element={<RegisterScreen/>} />
      <Route  path='/dev' element={<Development />} />

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
