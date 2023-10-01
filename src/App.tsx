import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <div>Home Index</div>
      },
      {
        path: 'about',
        element: <div>About</div>
      },
      {
        path: 'contact',
        element: <div>Contact</div>
      }
    ]
  }
])

function App () {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
