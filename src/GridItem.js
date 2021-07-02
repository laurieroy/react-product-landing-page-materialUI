import {
  Container,
  Icon,
  makeStyles,
  Typography,
} from "@material-ui/core";

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
