import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import { getPhones, deletePhone } from "../actions/phones";

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
  link: {
    textDecoration: "none",
  },
  spinner: {
    position: "fixed",
    top: "43%",
    left: "47%",
  },
}));

const PhonesView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getPhones());
  }, [dispatch]);

  const phones = useSelector((state) => state.phones);

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        {phones.length === 0 ? (
          <LinearProgress className="loading" />
        ) : (
          <>
            <Paper className={classes.paper}>
              <Box display="flex">
                <Box flexGrow={1}>
                  <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                  >
                    Phones
                  </Typography>
                </Box>
                <Box>
                  <Link className={classes.link} to="/create">
                    <Button variant="contained" color="primary">
                      Create new phone
                    </Button>
                  </Link>
                </Box>
              </Box>
              <Grid className={classes.container} container spacing={3}>
                {phones.map((phone) => (
                  <Grid item xs={12} md={6} key={phone._id}>
                    <Card>
                      <CardMedia
                        component="img"
                        image={phone.imageFileName}
                        alt="phone"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {phone.name}
                        </Typography>
                        <Typography variant="body2" color="textPrimary">
                          {phone.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Link
                          className={classes.link}
                          to="/phone"
                          state={{ from: phone }}
                        >
                          <Button color="primary">View</Button>
                        </Link>
                        <Link
                          className={classes.link}
                          to="/edit"
                          state={{ from: phone }}
                        >
                          <Button color="primary">Edit</Button>
                        </Link>
                        <Button
                          color="secondary"
                          onClick={() =>
                            dispatch(deletePhone(phone._id, setLoading))
                          }
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              {loading && <CircularProgress className={classes.spinner} />}
            </Paper>
          </>
        )}
      </Container>
    </div>
  );
};

export default PhonesView;
