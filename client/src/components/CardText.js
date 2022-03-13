import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CardTextComp = ({ title, content }) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textPrimary">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardTextComp;
