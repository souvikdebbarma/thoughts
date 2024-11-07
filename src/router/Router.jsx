import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Body from '../components/Body/Body';
import CommonplaceBook from '../components/CommonplaceBook/CommonplaceBook';
import Posts from '../components/Posts/Posts';
import PostDetail from '../components/Posts/PostDetail';
import Principles from '../components/Principles/Principles';
import Questions from '../components/Questions/Questions';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/commonplace",
        element: <CommonplaceBook />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:slug",
        element: <PostDetail />,
      },
      {
        path: "/principles",
        element: <Principles />,
      },
      {
        path: "/questions",
        element: <Questions />,
      },
    ],
  },
]);
