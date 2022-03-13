import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useLocation } from "react-router-dom";
import CardComp from "../components/Card";

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
  const phone = { ...from };

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <Paper className={classes.paper}>
          <Grid className={classes.container} container spacing={3}>
            <Grid item xs={12}>
              <CardComp phone={phone} detail />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default PhoneView;
