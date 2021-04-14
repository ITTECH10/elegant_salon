import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Image from './../../assets/images/logo-car.jpg'
import {Grid, Divider, Box} from '@material-ui/core'

const useStyles = makeStyles({
  itemRoot: {
      width: '70%'
  },
  cardRoot: {
    
  },
  cardMediaRoot: {
    objectFit: 'fill'
  },
  cardContentRoot: {
    height: 'auto'
  },
  spanRootDisabled: {
      textDecoration: 'line-through'
  },
  spanRed: {
      color: 'red'
  },
  boxRoot: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem'
  },
  boxPrice: {
    padding: '.5rem 0'
  },
  typoRoot: {
      color: '#666'
  },
  typoPrice: {
      margin: '.5rem 0'
  },
  typoTaxPrice: {
      marginBottom: '.5rem' 
  }
});

export default function Vehicle({vehicle}) {
  const classes = useStyles();
  const {name, price, priceWithTax, year, kilometers} = vehicle

  return (
      <Grid item xs={6} sm={4} md={3} lg={2} className={classes.itemRoot}>
        <Card className={classes.cardRoot}>
        <CardActionArea>
            <CardMedia
                className={classes.cardMediaRoot}
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={Image}
                title="Contemplative Reptile"
            />
            <CardContent className={classes.cardContentRoot}>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Divider />
                <Box className={classes.boxPrice}>
                    <Typography variant="body2" component="p" className={classes.typoRoot}>
                        Cijena: <span className={classes.spanRootDisabled}>30.000KM</span> <span className={classes.spanRed}>29.000KM</span>
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.typoRoot}>
                        Sa PDV-om: <span className={classes.spanRootDisabled}>35.000KM</span> <span className={classes.spanRed}>34.000KM</span>
                    </Typography>
                </Box>
                <Divider />

                <Box className={classes.boxRoot}>
                    <Typography variant="body2" component="p" className={classes.typoRoot}>
                        Godina: 2017
                    </Typography>
                    <Typography variant="body2" component="p" className={classes.typoRoot}>
                        Kilometri: 153.680
                    </Typography>
                </Box>
            </CardContent>
        </CardActionArea>
        </Card>
      </Grid>
  );
}
