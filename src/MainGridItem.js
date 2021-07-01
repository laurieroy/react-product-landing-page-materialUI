import React from "react";
import {
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    height: 300,
	},
	imageCard: {
		margin: 40
	},
	mainContainer: {
		paddingTop: 120,
		paddingBottom: 120,
		backgroundColor: "darkOrange"
	},
	mainItem: {
		padding: theme.spacing(8),
		textAlign: "left"
	}
}));

export default function MainGridItem() {
  const { cardMedia, imageCard, mainContainer,  mainItem } = useStyles();
  return (
    <Container className={mainContainer}>
      <Card>
        <Grid container className={mainItem}>
          <Grid item md={6}>
            <Typography variant="h2">Unlimited Subscription</Typography>
            <Typography>2,000 hours of online courses.</Typography>
            <Button color="primary" variant="contained">
              Sign up
            </Button>
          </Grid>
          <Grid item md={6}>
            <Card className={imageCard}>
              <CardMedia
                className={cardMedia}
                image="https://cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_1280.jpg"
              />
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
