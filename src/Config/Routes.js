import Home from 'routes/Home';
import Projects from 'routes/Projects';
import Redirect from 'routes/Redirect';
import NotFound from 'routes/NotFound';

const Routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/redirect/:src',
        component: Redirect
    },
    {
        component: NotFound
    }
];

export default Routes;
