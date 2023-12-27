import Add from "../pages/Add";
import Fashion from "../pages/Fashion";
import Home from "../pages/Home";
import News from "../pages/News";
import Root from "../pages/Root";
import Team from "../pages/Team";
import Travel from "../pages/Travel";

export const ROUTES = [{
    path: "/",
    element: <Root />,
    children: [{

        path: "",
        element: <Home />,

    },
    {

        path: "news",
        element: <News />,

    },
    {

        path: "travel",
        element: <Travel />,

    },
    {

        path: "fashion",
        element: <Fashion />,

    },
    {

        path: "team",
        element: <Team />,

    },
    {
        path:"add",
        element:<Add/>
    }
    ]

}]