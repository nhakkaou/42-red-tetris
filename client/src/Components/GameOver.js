import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

import url from "../img/tenor.gif";
import url1 from "../img/README.gif";

export default function MaxWidthDialog({ score, player }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        className="test"
        fullWidth={true}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="max-width-dialog-title">
          {player?.lost === true ? "You lost" : "You Won"}
        </DialogTitle>
        <DialogContent>
          {player?.lost === true ? (
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
