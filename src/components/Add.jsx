import {
  Stack,
  Fab,
  Tooltip,
  Typography,
  TextField,
  Button,
  ButtonGroup,
} from "@mui/material";
import { Add as AddIcon, VideoCameraBack } from "@mui/icons-material";
import React, { useState } from "react";
import { DateRange, EmojiEmotions, Image, PersonAdd } from "@material-ui/icons";
import { Avatar, Box, Modal, styled } from "@mui/material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignContent: "center",
  gap: "10px",
  marginBottom: "20px",
}));

const Add = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% -25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://banner2.cleanpng.com/20180428/bew/kisspng-computer-icons-avatar-emoticon-5ae4984b16cd51.2449395015249306350934.jpg"
            />
            <Typography fontWeight={500} variant="span">
              John
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />{" "}
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
