import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import useStyles from './SiteStyle'

import AllDash from './Dashboards'

function Site() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {AllDash.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.pic}
                  title="Image title"
                />
                <CardContent className={classes.cardContent} style={{textAlign: "center"}}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>
                    {card.details}
                  </Typography>
                </CardContent>
                <CardActions  style={{justifyContent: "center", backgroundColor: "#ce93d8"}}>
                  <Button size="small" color="primary">
                    <a 
                        href={card.url} 
                        style={{ textDecoration: "none", color: "black" }}
                        target= "_blank" 
                        rel= "noopener noreferrer"
                    > 
                        Go
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Site