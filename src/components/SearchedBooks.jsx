import React from "react";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import Book from "./Book.jsx"

const styles = {
  container: {
    marginTop: 150,
    backgroundColor: "white",
    overflow: "scroll",
    margin: "auto",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    height: 600,
    borderRadius: 5
  },
};

function SearchedBooks(props) {
  if (!props.books) return <div />;

  const { classes } = props;
  const books = props.books.map(book => {
    return (
      <Grid item xs={12} sm={10} md={5} key={2}>
         <Book book={book} />
      </Grid>
    );
  });

  return (
    <Grid
      container
      spacing={24}
      alignItems="stretch"
      justify="center"
      className={classes.container}
      xs={12} sm={11}
    >
      {books}
    </Grid>
  );
}

export default withStyles(styles)(SearchedBooks);
