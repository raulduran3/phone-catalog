import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import { getPhones } from "../actions/phones";
import CardComp from "../components/Card";

const useStyles = makeStyles((theme) => ({
  root: {
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
    left: "48.75%",
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
                    <CardComp phone={phone} setLoadingState={setLoading} />
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
