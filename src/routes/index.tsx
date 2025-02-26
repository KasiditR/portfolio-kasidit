import MainLayout from '@/layouts/MainLayout';
import AboutMe from '@/pages/AboutMe';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import { createBrowserRouter, RouterProvider } from 'react-router';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
