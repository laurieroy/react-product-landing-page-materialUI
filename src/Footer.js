import {
  Button,
  Card,
  Grid,
  Icon,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import { Facebook, Twitter, YouTube } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	companyInformation: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around"
	},
	footer: {
		padding: theme.spacing(6),
		backgroundColor: "#282828",
		color: "white"
	},
	messageButton: {
    width: "100%"
  },
  messageForm: {
    margin: 50,
    width: "80%"
  }
}));

export default function Footer() {
  const { companyInformation, footer, messageButton, messageForm } = useStyles();

  return (
    <footer className={footer}>
      <Grid container>
        <Grid item lg={6} md={12}>
          <Card>
            <form>
              <TextField className={messageForm} label="Get in touch" />
            </form>
          </Card>
          <Button variant="contained" color="primary" className={messageButton}>
            Send Message
          </Button>
        </Grid>

        <Grid item lg={6} md={12} className={companyInformation}>
          <Typography variant="h5">Company Name</Typography>
          <Typography>Company byline, info, etc. for over a decade.</Typography>
					
          <Grid item>
          
            <Icon>
              <YouTube />
            </Icon>

            <Icon>
              <Facebook />
            </Icon>

            <Icon>
              <Twitter />
            </Icon>
					</Grid>
					
        </Grid>
      </Grid>
    </footer>
  );
}
