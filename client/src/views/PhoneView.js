import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const PhoneView = () => {
  const classes = useStyles();
  const location = useLocation();
  const { from } = location.state;

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Paper className={classes.paper}>
          <Grid className={classes.container} container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardMedia
                  component="img"
                  image={from.imageFileName}
                  alt="phone"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {from.name}
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    {from.description}
                  </Typography>
                </CardContent>
              </Card>
              <Grid container>
                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Color
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        {from.color}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Manufacturer
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        {from.manufacturer}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Price
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        {from.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Processor
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        {from.processor}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Ram
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        {from.ram}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Screen
                      </Typography>
                      <Typography variant="body2" color="textPrimary">
                        {from.screen}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default PhoneView;
