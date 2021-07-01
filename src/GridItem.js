import React from "react";
import {
  Container,
  Grid,
  Icon,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  Build,
  CardMembership,
  Face,
  Loyalty,
  Public,
  School,
  ThumbUp,
  VerifiedUser,
  VideoLibrary,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    padding: 50,
  },
}));

export default function GridItem(props) {
  const { gridItem } = useStyles();

  return (
    <Container className={gridItem} align="left">
      <Icon>{props.icon}</Icon>
      <Typography variant="h5">{props.title}</Typography>
      <Typography>{props.description}</Typography>
    </Container>
  );
}
