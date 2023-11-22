import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// styles

//components
import App from './App.jsx'
import Chars from './components/Chars'

//loaders
import { getAllChars } from './utils/loaders/charload'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/characters',
        element: <Chars />,
        loader: getAllChars
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
