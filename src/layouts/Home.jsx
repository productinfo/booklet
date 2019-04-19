import React from "react";

import CenterIcon from "../components/CenterIcon.jsx";
import TextBox from "../components/TextBox.jsx";
import CategoryRow from "../components/CategoryRow.jsx";
import MainHeading from '../components/MainHeading.jsx';
import Footer from '../components/Footer.jsx';

import { categories } from "../data/booklet.js";

import Grid from '@material-ui/core/Grid'


class Home extends React.Component {
  render() {
    return (
      <Grid container justify='center' className='home-container'>
        <CenterIcon />
        <Grid item xs={12} sm={11} md={10} className='home-item'>
            <MainHeading title='BOOKLET v2.0'></MainHeading>

            <Grid container justify='center'>
                <Grid item xs={12} sm={10} md={8} lg={8}>
                    <TextBox title="The Project">
                        <p>Booklet is a react based website about your favorite thing, <strike>beer.</strike> books. Browse for books, create a virtual collection of all the books you have and add your wanted books to your personal list.</p>
                    </TextBox>
                </Grid>


                <CategoryRow categories={categories} />


                <Grid item xs={12} sm={10} md={8} lg={8}>
                    <TextBox title="The Context">
                        <p>This project was made as a capstone project for Coursera's Full Stack Web-Development with React course provided by the Hong Kong University.</p>
                        <h4>Project by Joao Schapke</h4>
                    </TextBox>
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
