import HomeIcon from '@mui/icons-material/Home';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import ExploreIcon from '@mui/icons-material/Explore';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import Person2Icon from '@mui/icons-material/Person2';
export const navigationMenu=[
    {
        title:'Home',
        icon:<HomeIcon/>,
        path:"/"
    },
    {
        title:'Reels',
        icon:<ExploreIcon/>,
        path:"/"
    },
    {
        title:'Create Reels',
        icon:<GroupWorkIcon/>,
        path:"/"
    },
    {
        title:'Message',
        icon:<MessageIcon/>,
        path:"/message"
    },
    {
        title:'Notifications',
        icon:<HomeIcon/>,
        path:"/"
    },
    {
        title:'Communties',
        icon:<PeopleIcon/>,
        path:"/"
    },
    {
        title:'Lists',
        icon:<ChecklistRtlIcon/>,
        path:"/"
    },
    {
        title:'Profile',
        icon:<Person2Icon/>,
        path:"/profile/:1"
    }
];
