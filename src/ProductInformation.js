import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
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

import GridItem from "./GridItem";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 120,
    paddingBottom: 120,
  },
}));

export default function ProductInformation() {
  const { mainContainer } = useStyles();

  return (
    <Container className={mainContainer}>
      <Typography variant="h2">What you'll get</Typography>

      <Grid container>
        <Grid item lg={4} md={12}>
          <GridItem
            title="Feature 1"
            icon={<ThumbUp />}
            description="Aged and arabica aromatic barista body cortado cream cup fair filter."
          ></GridItem>
        </Grid>

        <Grid item lg={4} md={12}>
          <GridItem
            title="Feature 2"
            icon={<Build />}
            description="Beans black caffeine con crema decaffeinated viennese. Aged and arabica aromatic barista body cortado cream cup fair filter frappuccino froth.	"
          ></GridItem>
        </Grid>
        <Grid item lg={4} md={12}>
          <GridItem
            title="Feature 3"
            icon={<VerifiedUser />}
            description="Froth iced mocha percolator robust saucer siphon so strong trade viennese. Aged and arabica aromatic barista body cortado cream cup fair filter frappuccino froth go in origin redeye robusta strong trifecta turkish. A aftertaste breve chicory eu  lait medium pot turkish.	"
          ></GridItem>
        </Grid>
        <Grid item lg={4} md={12}>
          <GridItem
            title="Feature 4"
            icon={<Face />}
            description="Aged and arabica aromatic barista body cortado cream cup fair filter."
          ></GridItem>
        </Grid>

        <Grid item lg={4} md={12}>
          <GridItem
            title="Feature 5"
            icon={<VideoLibrary />}
            description="Beans black caffeine con crema decaffeinated viennese. Aged and arabica aromatic barista body cortado cream cup fair filter frappuccino froth.	"
          ></GridItem>
        </Grid>
        <Grid item lg={4} md={12}>
          <GridItem
            title="Feature 6"
            icon={<CardMembership />}
            description="Froth iced mocha percolator robust saucer siphon so strong trade viennese. Aged and arabica aromatic barista body cortado cream cup fair filter frappuccino froth go in origin redeye robusta strong trifecta turkish. A aftertaste breve chicory eu  lait medium pot turkish.	"
          ></GridItem>
        </Grid>
        <Grid item lg={4} md={12}>
          <GridItem
            title="Feature 7"
            icon={<Public />}
            description="Aged and arabica aromatic barista body cortado cream cup fair filter."
          ></GridItem>
        </Grid>

        <Grid item lg={4} md={12}>
          <GridItem
            title="Feature 8"
            icon={<School />}
            description="Beans black caffeine con crema decaffeinated viennese. Aged and arabica aromatic barista body cortado cream cup fair filter frappuccino froth.	"
          ></GridItem>
        </Grid>
        <Grid item lg={4} md={12}>
          <GridItem
            title="Feature 9"
            icon={<Loyalty />}
            description="Froth iced mocha percolator robust saucer siphon so strong trade viennese. Aged and arabica aromatic barista body cortado cream cup fair filter frappuccino froth go in origin redeye robusta strong trifecta turkish. A aftertaste breve chicory eu  lait medium pot turkish.	"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
