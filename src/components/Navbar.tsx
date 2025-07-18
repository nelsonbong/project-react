import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { FC } from 'react';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = ['/', '/login'].includes(location.pathname);
  const togglePath = isLoginPage ? '/register' : '/login';
  const toggleLabel = isLoginPage ? 'Register' : 'Login';

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 48, sm: 56, md: 64, lg: 72 } }}>
        <Typography variant="h6" sx={{ fontSize: { xs: '15px', sm: '17px', md: '19px', lg: '22px' } }}>
          IFCA MSC Berhad
        </Typography>
        <Box>
          <Button
            color="inherit"
            onClick={() => navigate(togglePath)}
            sx={{ textTransform: 'none', fontSize: { xs: '15px', sm: '17px', md: '19px', lg: '22px' } }}
          >
            {toggleLabel}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
