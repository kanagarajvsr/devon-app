import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

 const Header = ({title}) => <AppBar position="fixed" open={false}>
    <Toolbar>
        <Typography variant="h6" noWrap component="div">
            {title}
        </Typography>
    </Toolbar>
</AppBar>;

export default Header;