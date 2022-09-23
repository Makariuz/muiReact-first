import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail, Notifications } from "@material-ui/icons";

import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",

  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"

        open={open}
      onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          SAM.
        </Typography>
        {/*   <WhatshotIcon sx={{ display: { xs: "block", sm: "none" } }} /> */}
        <Search>
          <InputBase placeholder="Search..." />{" "}
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://banner2.cleanpng.com/20180428/bew/kisspng-computer-icons-avatar-emoticon-5ae4984b16cd51.2449395015249306350934.jpg"
            onClick={e=> setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=> setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://banner2.cleanpng.com/20180428/bew/kisspng-computer-icons-avatar-emoticon-5ae4984b16cd51.2449395015249306350934.jpg"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
