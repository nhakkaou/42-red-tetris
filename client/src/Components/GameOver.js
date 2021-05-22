import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import url from "../img/tenor.gif";
import url1 from "../img/README.gif";
const useStyles = makeStyles((theme) => ({
  Dialog: {
    justifyContent: "center",
    background: "none",
  },
}));

export default function MaxWidthDialog({ score, player }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        className="test"
        fullWidth={fullWidth}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="max-width-dialog-title">
          {player.lost === true ? "You lost" : "You Won"}
        </DialogTitle>
        <DialogContent>
          {player.lost === true ? (
            <img src={url} />
          ) : (
            <img style={{ width: "50%" }} src={url1} />
          )}
        </DialogContent>
        <DialogActions>
          <span>Score: {score}</span>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
