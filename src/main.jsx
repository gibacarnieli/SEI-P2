import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// styles
import './styles/main.scss'

//components
import App from './App.jsx'
import Chars from './components/Chars'
import SingleChar from './components/SingleChar'

//loaders
import { getAllChars, getSingleChar } from './utils/loaders/charload'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/characters',
        element: <Chars />,
        loader: getAllChars,
        children: [
          {
            path: '/characters/:charId',
            element: <SingleChar />,
            loader: async ({ params }) => getSingleChar(params.charId)
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
