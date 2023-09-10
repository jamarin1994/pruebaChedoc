import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';
import logoSeries from '../../assets/series1.jpg';
import logoPeliculas from '../../assets/peliculas.jpg';
import "./home.css"


function home() {

    return (

      <Container sx={{ mt:25}} className="poster" >
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}  >
        <CardActionArea href="/series">
          <CardMedia
            component="img"
            height="140"
            image={logoSeries}
            // alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Popular series
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>    

       </Grid>
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href="/peliculas">
          <CardMedia
            component="img"
            height="140"
            image={logoPeliculas}
            propiedad="movie"
            // alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Popular peliculas
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>        
      </Grid>
      </Grid>
      </Container>

      );
}
export default home