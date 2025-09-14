import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Badge from '@mui/material/Badge';
import UserContex from '../store/user-context';


const drawerWidth = 240;

const Navbar = (props) => {
    // U need cart here as well to get the length of the cart
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { isLoggedIn, user, logout, cartLength } = useContext(UserContex);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/" sx={{ textAlign: 'center' }}>
                        <ListItemText primary='Home' />
                    </ListItemButton>
                </ListItem>
                {isLoggedIn && user && <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/profile" sx={{ textAlign: 'center' }}>
                        <ListItemText primary={user.username} />
                    </ListItemButton>
                </ListItem>}
                {!isLoggedIn && <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/login" sx={{ textAlign: 'center' }}>
                        <ListItemText primary='Login' />
                    </ListItemButton>
                </ListItem>}
                {!isLoggedIn && <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/register" sx={{ textAlign: 'center' }}>
                        <ListItemText primary='SignUp' />
                    </ListItemButton>
                </ListItem>}
                 {isLoggedIn && <ListItem disablePadding>
                    <ListItemButton onClick={logout} sx={{ textAlign: 'center' }}>
                        <ListItemText primary='Logout' />
                    </ListItemButton>
                </ListItem>}
                {isLoggedIn && <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/cart" sx={{ textAlign: 'center' }}>
                        <Badge badgeContent={cartLength} color="secondary">
                            <ShoppingBagIcon color='secondary' />
                        </Badge>
                    </ListItemButton>
                </ListItem>}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', marginBottom: '100px' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button component={NavLink} to="/" sx={{ color: '#fff' }}>
                            Home
                        </Button>
                        {isLoggedIn && user && <Button component={NavLink} to="/profile" sx={{ color: '#fff' }}>
                            {user.username}
                        </Button>}
                        {!isLoggedIn && <Button component={NavLink} to="/login" sx={{ color: '#fff' }}>
                            Login
                        </Button>}
                        {!isLoggedIn && <Button component={NavLink} to="/register" sx={{ color: '#fff' }}>
                            SignUp
                        </Button>}
                        {isLoggedIn && <Button component={NavLink} to="/cart" sx={{ color: '#fff' }}>
                            <Badge badgeContent={cartLength} color="primary">
                                <ShoppingBagIcon color='action' />
                            </Badge>
                        </Button>}
                         {isLoggedIn && <Button onClick={logout} sx={{ color: '#fff' }}>
                            Logout
                        </Button>}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;
