import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Login from '~/pages/Login';
import Canlendar from '~/pages/Canlendar';
import Documents from '~/pages/Documents';
import Reports from '~/pages/Reports';
import Dashboard from '~/pages/Dashboard';
import Logout from '~/pages/Logout';


// Public routes
const publicRoutes = [
    { path: config.routes.index, component: Login, layout: null },
    { path: config.routes.home, component: Home },    
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.canlendar, component: Canlendar },
    { path: config.routes.documents, component: Documents },
    { path: config.routes.reports, component: Reports },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.logout, component: Logout, layout: null },

];

const privateRoutes = [
    { path: config.routes.dashboard, component: Dashboard },
    { path: config.routes.live, component: Live },
    { path: config.routes.search, component: Search, layout: null },
];

export { publicRoutes, privateRoutes };
