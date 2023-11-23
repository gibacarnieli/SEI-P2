import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// styles
import './styles/main.scss'

//components
import App from './App.jsx'
import Chars from './components/Chars'
import SingleChar from './components/SingleChar'
import Episode from './components/Episode'
import Home from './components/Home'

//loaders
import { getAllChars, getSingleChar } from './utils/loaders/charLoad'
import { getEpisode } from './utils/loaders/epLoad'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: getAllChars
      },
      {
        path: '/characters',
        element: <Chars />,
        loader: getAllChars,
      },
      {
        path: '/characters/:charId',
        element: <SingleChar />,
        loader: async ({ params }) => getSingleChar(params.charId)
      },
      {
        path: '/episode/:epId',
        element: <Episode />,
        loader: async ({ params }) => getEpisode(params.epId)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
