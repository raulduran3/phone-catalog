import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePhone } from "../actions/phones";
import CardTextComp from "./CardText";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
  },
}));

const CardComp = ({ phone, setLoadingState, detail }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <>
      <Card>
        <CardMedia component="img" image={phone.imageFileName} alt="phone" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {phone.name}
          </Typography>
          <Typography variant="body2" color="textPrimary">
            {phone.description}
          </Typography>
        </CardContent>
        {!detail && (
          <CardActions>
            <Link className={classes.link} to="/phone" state={{ from: phone }}>
              <Button color="primary">View</Button>
            </Link>
            <Link className={classes.link} to="/edit" state={{ from: phone }}>
              <Button color="primary">Edit</Button>
            </Link>
            <Button
              color="secondary"
              onClick={() => dispatch(deletePhone(phone._id, setLoadingState))}
            >
              Delete
            </Button>
          </CardActions>
        )}
      </Card>
      {detail && (
        <Grid container>
          <Grid item xs={6}>
            <CardTextComp title={"Color"} content={phone.color} />
          </Grid>
          <Grid item xs={6}>
            <CardTextComp title={"Manufacturer"} content={phone.manufacturer} />
          </Grid>
          <Grid item xs={6}>
            <CardTextComp title={"Price"} content={phone.price} />
          </Grid>
          <Grid item xs={6}>
            <CardTextComp title={"Processor"} content={phone.processor} />
          </Grid>
          <Grid item xs={6}>
            <CardTextComp title={"Ram"} content={phone.ram} />
          </Grid>
          <Grid item xs={6}>
            <CardTextComp title={"Screen"} content={phone.screen} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CardComp;
