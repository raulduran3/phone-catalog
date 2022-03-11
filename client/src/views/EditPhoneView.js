import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { updatePhone } from "../actions/phones";
import { useNavigate, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  spinner: {
    position: "fixed",
    top: "43%",
    left: "47%",
  },
}));

const EditPhoneView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state;
  const [phoneData, setPhoneData] = useState({
    name: from.name,
    manufacturer: from.manufacturer,
    description: from.description,
    color: from.color,
    price: from.price,
    imageFileName: from.imageFileName,
    screen: from.screen,
    processor: from.processor,
    ram: from.ram,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updatePhone(from._id, phoneData, setLoading));
    navigate("/");
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Edit Phone
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Phone Name"
                value={phoneData.name}
                onChange={(e) =>
                  setPhoneData({ ...phoneData, name: e.target.value })
                }
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="manufacturer"
                label="Manufacturer"
                value={phoneData.manufacturer}
                onChange={(e) =>
                  setPhoneData({ ...phoneData, manufacturer: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                value={phoneData.description}
                onChange={(e) =>
                  setPhoneData({ ...phoneData, description: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="color"
                label="Color"
                value={phoneData.color}
                onChange={(e) =>
                  setPhoneData({ ...phoneData, color: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                id="price"
                label="Price"
                value={phoneData.price}
                onChange={(e) =>
                  setPhoneData({ ...phoneData, price: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="screen"
                label="Screen"
                value={phoneData.screen}
                onChange={(e) =>
                  setPhoneData({ ...phoneData, screen: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="processor"
                label="Processor"
                value={phoneData.processor}
                onChange={(e) =>
                  setPhoneData({ ...phoneData, processor: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="ram"
                label="Ram"
                value={phoneData.ram}
                onChange={(e) =>
                  setPhoneData({ ...phoneData, ram: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Edit Phone
          </Button>
          {loading && <CircularProgress className={classes.spinner} />}
        </form>
      </div>
    </Container>
  );
};

export default EditPhoneView;
