import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function BasicModal({ open, onClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Sensor
          </Typography>
          <br />
          <TextField id="outlined-basic" label="Sensor Placement" variant="outlined" />
          <br />
          <TextField id="outlined-basic" label="Tennant link" variant="outlined" />
          <br />
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "#fff",
            }}
            onClick={onClose}
          >
            Add Sensor
          </Button>
        </Box>
      </Modal>
    </div>
  );
  BasicModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };
}
