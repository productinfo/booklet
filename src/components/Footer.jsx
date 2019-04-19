import React from "react";
import Grid from '@material-ui/core/Grid'

const style = {
    backgroundColor: 'rgb(68, 68, 68)',
    color: 'white',
    borderRadius: '0 0 10px 10px',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
}


function Footer() {
  return (
      <Grid container style={style} justify='center'>
          <Grid item xs={12} sm={5} style={{padding:15}}>
              <h5 style={{marginBottom:0}}>This site was built with React, React-Router, Redux, React-Redux and Material-UI.</h5>
          </Grid>
          <Grid item xs={12} sm={5} style={{padding:15}}>
              <div>
                  <h5 style={{marginBottom:0}}>
                      Icons made by <a style={{color:'white'}} href="https://www.freepik.com/" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/nhor-phai" style={{color:'white'}} title="Nhor Phai">Nhor Phai</a> and <a href="https://www.flaticon.com/authors/mynamepong" style={{color:'white'}} title="mynamepong">mynamepong</a>
                  </h5>
                <h5 style={{marginTop:0}}>
                    from <a style={{color:'white'}} href="https://www.flaticon.com/" title="Flaticon">flaticon.com</a> is licensed by  <a style={{color:'white'}} href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY.</a>
                </h5>

              </div>


          </Grid>
      </Grid>
);
}

export default Footer;
