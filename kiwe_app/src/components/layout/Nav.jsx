import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
const MyBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  '& .MuiBottomNavigationAction-iconOnly': {
    fontSize: theme.spacing(4),
    marginTop: theme.spacing(0.5),
    color: '#000', // set default color
  },
  '&.Mui-selected': {
    color: '#3dbe14',
    '& .MuiBottomNavigationAction-iconOnly': {
      color: '#3dbe14',
    },
  },
  '& .MuiBottomNavigationAction-label': {
    fontSize: theme.spacing(1.6),
    fontWeight: '600',
    marginTop: theme.spacing(0.7),
    color: '#000', // set default color
  },
  '&.Mui-selected .MuiBottomNavigationAction-label': {
    color: '#3dbe14',
  },
}));
const MyAddCircleOutlineOutlinedIcon = styled(AddCircleOutlineOutlinedIcon)({
  fontSize: '2.5rem',
});
const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  '& .MuiBottomNavigationAction-root': {
    width: 'auto',
    minWidth: '80px',
    maxWidth: '120px',
    flexGrow: 1,
    margin: theme.spacing(0, 0.5), // add margin
  },
}));

export default function Nav() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <StyledBottomNavigation
        sx={{ height: '80px' }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <MyBottomNavigationAction label="HOME" icon={<HomeOutlinedIcon />} />
        <MyBottomNavigationAction label="WISH" icon={<FavoriteBorderOutlinedIcon />} />
        <MyBottomNavigationAction icon={<MyAddCircleOutlineOutlinedIcon />} />
        <MyBottomNavigationAction label="CHAT" icon={<ChatBubbleOutlineOutlinedIcon />} />
        <MyBottomNavigationAction label="MY" icon={<AccountCircleOutlinedIcon />} />
      </StyledBottomNavigation>
    </Paper>
  );
}
