import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

// components
import PrivateRoute from "./PrivateRoute";
import Contracts from "../mytasks/Contracts";
import Patients from "../mytasks/Patients";
import HomeVisits from "../mytasks/HomeVisits";
import ContractsEdit from "../mytasks/ContractsEdit";
import ContractCreate from "../mytasks/ContractCreate";
import PatientsEdit from "../mytasks/PatientsEdit";
import PatientsCreate from "../mytasks/PatientsCreate";
import Roles from "../mytasks/Roles";
import Users from "../mytasks/Users";
import UsersEdit from "../mytasks/UsersEdit";
import UsersCreate from "../mytasks/UsersCreate";
import Settings from "../mytasks/Settings";
// import Root from "./Root";

// lazy load all the views

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Logout = React.lazy(() => import("../pages/auth/Logout"));
const Confirm = React.lazy(() => import("../pages/auth/Confirm"));
const ForgetPassword = React.lazy(() => import("../pages/auth/ForgetPassword"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const LockScreen = React.lazy(() => import("../pages/auth/LockScreen"));

// landing
const Landing = React.lazy(() => import("../pages/landing/"));

// dashboard
const EcommerceDashboard = React.lazy(
  () => import("../pages/dashboard/Ecommerce/")
);
const AnalyticsDashboard = React.lazy(
  () => import("../pages/dashboard/Analytics/")
);

// apps
const CalendarApp = React.lazy(() => import("../pages/apps/Calendar/"));
const Projects = React.lazy(() => import("../pages/apps/Projects/"));
const ProjectDetail = React.lazy(
  () => import("../pages/apps/Projects/Detail/")
);
// - chat
const ChatApp = React.lazy(() => import("../pages/apps/Chat/"));
// - email
const Inbox = React.lazy(() => import("../pages/apps/Email/Inbox"));
const EmailDetail = React.lazy(() => import("../pages/apps/Email/Detail"));
const EmailCompose = React.lazy(() => import("../pages/apps/Email/Compose"));
// - tasks
const TaskList = React.lazy(() => import("../pages/apps/Tasks/List/"));
const Kanban = React.lazy(() => import("../pages/apps/Tasks/Board/"));
// - file
const FileManager = React.lazy(() => import("../pages/apps/FileManager"));

// extra pages
const Error404 = React.lazy(() => import("../pages/error/Error404"));
const Error500 = React.lazy(() => import("../pages/error/Error500"));
// -other
const Starter = React.lazy(() => import("../pages/other/Starter"));
const Profile = React.lazy(() => import("../pages/other/Profile"));
const Activity = React.lazy(() => import("../pages/other/Activity"));
const Invoice = React.lazy(() => import("../pages/other/Invoice"));
const Maintenance = React.lazy(() => import("../pages/other/Maintenance"));
const Pricing = React.lazy(() => import("../pages/other/Pricing"));

// uikit
const UIElements = React.lazy(() => import("../pages/uikit"));

// widgets
const Widgets = React.lazy(() => import("../pages/widgets/"));

// icons
const Unicons = React.lazy(() => import("../pages/icons/Unicons"));
const FeatherIcons = React.lazy(() => import("../pages/icons/Feather/"));
const BootstrapIcon = React.lazy(() => import("../pages/icons/Bootstrap/"));

// forms
const BasicForms = React.lazy(() => import("../pages/forms/Basic"));
const FormAdvanced = React.lazy(() => import("../pages/forms/Advanced"));
const FormValidation = React.lazy(() => import("../pages/forms/Validation"));
const FormWizard = React.lazy(() => import("../pages/forms/Wizard"));
const FileUpload = React.lazy(() => import("../pages/forms/FileUpload"));
const Editors = React.lazy(() => import("../pages/forms/Editors"));

// charts
const Charts = React.lazy(() => import("../pages/charts/"));

// tables
const BasicTables = React.lazy(() => import("../pages/tables/Basic"));
const AdvancedTables = React.lazy(() => import("../pages/tables/Advanced"));

// maps
const GoogleMaps = React.lazy(() => import("../pages/maps/GoogleMaps"));
const VectorMaps = React.lazy(() => import("../pages/maps/VectorMaps"));

export interface RoutesProps {
  path: RouteProps["path"];
  name?: string;
  element?: RouteProps["element"];
  route?: any;
  exact?: boolean;
  icon?: string;
  header?: string;
  roles?: string[];
  children?: RoutesProps[];
}

// dashboards
const dashboardRoutes: RoutesProps = {
  path: "/dashboard",
  name: "Dashboards",
  icon: "airplay",
  header: "Navigation",
  children: [
    {
      path: "/",
      name: "Root",
      element: <Navigate to="/dashboard/ecommerce" />,
      route: PrivateRoute,
    },
    {
      path: "/dashboard/ecommerce",
      name: "Ecommerce",
      element: <EcommerceDashboard />,
      route: PrivateRoute,
    },
    {
      path: "/dashboard/analytics",
      name: "Analytics",
      element: <AnalyticsDashboard />,
      route: PrivateRoute,
    },
    {
      path: "/dashboard/contracts",
      name: "Contracts",
      element: <Contracts></Contracts>,
      route: PrivateRoute,
      children: [
        {
          path: `/dashboard/contracts/edit/:id`,
          name: "Edit",
          element: <ContractsEdit />,
          route: PrivateRoute,
        },
        {
          path: "/dashboard/contracts/create",
          name: "Create",
          element: <ContractCreate></ContractCreate>,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/dashboard/patients",
      name: "Patients",
      element: <Patients></Patients>,
      route: PrivateRoute,
      children: [
        {
          path: `/dashboard/patients/edit/:id`,
          name: "Edit",
          element: <PatientsEdit></PatientsEdit>,
          route: PrivateRoute,
        },
        {
          path: "/dashboard/patients/create",
          name: "Create",
          element: <PatientsCreate></PatientsCreate>,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/dashboard/homevisits",
      name: "Home Visits",
      element: <HomeVisits></HomeVisits>,
      route: PrivateRoute,
    },
    {
      path: "/dashboard/roles",
      name: "Roles",
      element: <Roles></Roles>,
      route: PrivateRoute,
    },
    {
      path: "/dashboard/users",
      name: "Users",
      element: <Users></Users>,
      route: PrivateRoute,
      children: [
        {
          path: `/dashboard/users/edit/:id`,
          name: "Edit",
          element: <UsersEdit></UsersEdit>,
          route: PrivateRoute,
        },
        {
          path: "/dashboard/users/create",
          name: "Create",
          element: <UsersCreate></UsersCreate>,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/dashboard/settings",
      name: "General Settings",
      element: <Settings></Settings>,
      route: PrivateRoute,
    },
  ],
};

const calendarAppRoutes: RoutesProps = {
  path: "/apps/calendar",
  name: "Calendar",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "calendar",
  element: <CalendarApp />,
  header: "Apps",
};

const chatAppRoutes: RoutesProps = {
  path: "/apps/chat",
  name: "Chat",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "message-square",
  element: <ChatApp />,
};

const emailAppRoutes: RoutesProps = {
  path: "/apps/email",
  name: "Email",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "mail",
  children: [
    {
      path: "/apps/email/inbox",
      name: "Inbox",
      element: <Inbox />,
      route: PrivateRoute,
    },
    {
      path: "/apps/email/details",
      name: "Email Details",
      element: <EmailDetail />,
      route: PrivateRoute,
    },
    {
      path: "/apps/email/compose",
      name: "Compose Email",
      element: <EmailCompose />,
      route: PrivateRoute,
    },
  ],
};

const projectAppRoutes: RoutesProps = {
  path: "/apps/projects",
  name: "Projects",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "uil-briefcase",

  children: [
    {
      path: "/apps/projects/list",
      name: "List",
      element: <Projects />,
      route: PrivateRoute,
    },
    {
      path: "/apps/projects/details",
      name: "Detail",
      element: <ProjectDetail />,
      route: PrivateRoute,
    },
  ],
};

const taskAppRoutes: RoutesProps = {
  path: "/apps/tasks",
  name: "Tasks",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "clipboard",
  children: [
    {
      path: "/apps/tasks/list",
      name: "Task List",
      element: <TaskList />,
      route: PrivateRoute,
    },
    {
      path: "/apps/tasks/kanban",
      name: "Kanban",
      element: <Kanban />,
      route: PrivateRoute,
    },
  ],
};

const fileAppRoutes: RoutesProps = {
  path: "/apps/file-manager",
  name: "File Manager",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "folder-plus",
  element: <FileManager />,
};

const appRoutes = [
  calendarAppRoutes,
  chatAppRoutes,
  emailAppRoutes,
  projectAppRoutes,
  taskAppRoutes,
  fileAppRoutes,
];

// pages
const extrapagesRoutes: RoutesProps = {
  path: "/pages",
  name: "Pages",
  icon: "package",
  header: "Custom",
  children: [
    {
      path: "/pages/starter",
      name: "Starter",
      element: <Starter />,
      route: PrivateRoute,
    },
    {
      path: "/pages/profile",
      name: "Profile",
      element: <Profile />,
      route: PrivateRoute,
    },
    {
      path: "/pages/activity",
      name: "Activity",
      element: <Activity />,
      route: PrivateRoute,
    },
    {
      path: "/pages/invoice",
      name: "Invoice",
      element: <Invoice />,
      route: PrivateRoute,
    },
    {
      path: "/pages/pricing",
      name: "Pricing",
      element: <Pricing />,
      route: PrivateRoute,
    },
  ],
};

// ui
const uiRoutes: RoutesProps = {
  path: "/components",
  name: "Components",
  icon: "package",
  header: "UI Elements",
  children: [
    {
      path: "/components/ui-elements",
      name: "UIElements",
      element: <UIElements />,
      route: PrivateRoute,
    },
    {
      path: "/components/widgets",
      name: "Widgets",
      element: <Widgets />,
      route: PrivateRoute,
    },
    {
      path: "/icons",
      name: "Icons",
      children: [
        {
          path: "/icons/unicons",
          name: "Unicons",
          element: <Unicons />,
          route: PrivateRoute,
        },
        {
          path: "/icons/feather",
          name: "Feather",
          element: <FeatherIcons />,
          route: PrivateRoute,
        },
        {
          path: "/icons/bootstrap",
          name: "Bootstrap Icon",
          element: <BootstrapIcon />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/forms",
      name: "Forms",
      children: [
        {
          path: "/forms/basic",
          name: "Basic Elements",
          element: <BasicForms />,
          route: PrivateRoute,
        },
        {
          path: "/forms/advanced",
          name: "Form Advanced",
          element: <FormAdvanced />,
          route: PrivateRoute,
        },
        {
          path: "/forms/validation",
          name: "Form Validation",
          element: <FormValidation />,
          route: PrivateRoute,
        },
        {
          path: "/forms/wizard",
          name: "Form Wizard",
          element: <FormWizard />,
          route: PrivateRoute,
        },
        {
          path: "/forms/upload",
          name: "File Upload",
          element: <FileUpload />,
          route: PrivateRoute,
        },
        {
          path: "/forms/editors",
          name: "Editors",
          element: <Editors />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/components/charts",
      name: "Charts",
      element: <Charts />,
      route: PrivateRoute,
    },
    {
      path: "/tables",
      name: "Tables",
      children: [
        {
          path: "/tables/basic",
          name: "Basic",
          element: <BasicTables />,
          route: PrivateRoute,
        },
        {
          path: "/tables/advanced",
          name: "Advanced",
          element: <AdvancedTables />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/maps",
      name: "Maps",
      children: [
        {
          path: "/maps/googlemaps",
          name: "Google Maps",
          element: <GoogleMaps />,
          route: PrivateRoute,
        },
        {
          path: "/maps/vectorMaps",
          name: "Google Maps",
          element: <VectorMaps />,
          route: PrivateRoute,
        },
      ],
    },
  ],
};

// auth
const authRoutes: RoutesProps[] = [
  {
    path: "/auth/login",
    name: "Login",
    element: <Login />,
    route: Route,
  },
  {
    path: "/auth/register",
    name: "Register",
    element: <Register />,
    route: Route,
  },
  {
    path: "/auth/confirm",
    name: "Confirm",
    element: <Confirm />,
    route: Route,
  },
  {
    path: "/auth/forget-password",
    name: "Forget Password",
    element: <ForgetPassword />,
    route: Route,
  },
  {
    path: "/auth/lock-screen",
    name: "Lock Screen",
    element: <LockScreen />,
    route: Route,
  },
  {
    path: "/auth/logout",
    name: "Logout",
    element: <Logout />,
    route: Route,
  },
];

// public routes
const otherPublicRoutes: RoutesProps[] = [
  {
    path: "/landing",
    name: "landing",
    element: <Landing />,
    route: Route,
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    element: <Maintenance />,
    route: Route,
  },
  {
    path: "/error-404",
    name: "Error - 404",
    element: <Error404 />,
    route: Route,
  },
  {
    path: "/error-500",
    name: "Error - 500",
    element: <Error500 />,
    route: Route,
  },
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
  let flatRoutes: RoutesProps[] = [];

  routes = routes || [];
  routes.forEach((item: RoutesProps) => {
    flatRoutes.push(item);

    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

// All routes
const authProtectedRoutes = [
  dashboardRoutes,
  ...appRoutes,
  extrapagesRoutes,
  uiRoutes,
];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
  publicRoutes,
  authProtectedRoutes,
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
};
