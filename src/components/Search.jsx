import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";


const classes = theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%",

  },
  appBar: {
    borderRadius: 3,
    background: '#0071bc'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      "&:focus": {
      }
    }
  },
  icon: {
      display:'block',
    float: 'right',
    marginLeft: 15
  },
  fullWidth: {
     width: '100%'
  }

});

function Search(props) {
  const { classes } = props;

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} sm={11}>
        <AppBar position="static" color="primary" className={classes.appBar}>
          <Toolbar className={classes.fullWidth}>
            <form onSubmit={props.handleSubmit} className={classes.fullWidth}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>

                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  value={props.value}
                  onChange={props.handleInput}
                />
              </div>
            </form>
          </Toolbar>

        </AppBar>
      </Grid>
    </Grid>
  );
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(classes)(Search);
