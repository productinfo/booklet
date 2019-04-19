import React from "react";
import posed from 'react-pose'
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";


const pStyle = {
  padding: "0 10px",
  textAlign: "left",
  color: "grey"
};

const style = {
  margin: "10px 0",
};

const Box = posed.div({
    pressable: true,
    hoverable: true,
    init: {
        scale: 1,
    },
    press: {
        scale:1.1
    },
    hover: {
        scale: 1.2
    }
})

function CategoryRow(props) {
  const categories = props.categories.map(category => {
    return (
      <Grid xs={4} className="centered" key={category.title} item>
        <Link to={category.url}>
          <Box><img src={category.icon_src} alt='icon of the page' className='clickable' height={100} /></Box>
        </Link>
        <h1>{category.title}</h1>
        <p style={pStyle}>{category.description}</p>
      </Grid>
    );
  });

  return (
    <Grid style={style} spacing={24} container>
      {categories}
    </Grid>
  );
}

export default CategoryRow;
