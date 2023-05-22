import { Link, useLocation } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const menuList = [
    {
        label: 'Sessions',
        path: '/sessions',
        icon: <InboxIcon />
    },
    {
        label: 'News',
        path: '/news',
        icon: <InboxIcon />
    },
    {
        label: 'Children',
        path: '/children',
        icon: <InboxIcon />
    }
]

const Sidebar = () => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <>
            <Drawer
                sx={{
                    width: "220px",
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: "220px",
                        top: "64px"
                    },
                }}
                variant="persistent"
                open={true}
            >
                <List>
                    {menuList.map((menu, index) => (

                        <ListItemButton key={menu.label}
                            component={Link}
                            to={menu.path}
                            selected={menu.path === path}
                        >
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={menu.label} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

        </>
    );
}

export default Sidebar;