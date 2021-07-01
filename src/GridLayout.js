import React from "react";
import { Grid } from "@material-ui/core";

import MainGridItem from "./MainGridItem";
import Pricing from "./Pricing";
import ProductInformation from "./ProductInformation";

export default function GridLayout() {
  return (
    <Grid container>
      <Grid item>
        <MainGridItem />
      </Grid>
      <Grid item>
        <ProductInformation />
      </Grid>
      <Grid item>
        <Pricing />
      </Grid>
    </Grid>
  );
}
