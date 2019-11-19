import Home from 'routes/Home';
import Projects from 'routes/Projects';
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
        component: NotFound
    }
];

export default Routes;
