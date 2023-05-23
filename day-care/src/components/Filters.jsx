import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
//Table Filter menu
export default function Filters({link,label}) {
  return (
    <Grid container spacing={2}>
      <Grid container item >
        <Grid item xs={5}>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={1} >
          <Button
            component={Link}
            to={link}
          >  {label} </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}