import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
//Table Filter menu
export default function Filters({link,label}) {
  return (
    <Grid container spacing={2} pb={2}>
      <Grid container item >
        
        <Grid item xs={12} sx={{display:"flex",justifyContent:"right"}} >
          <Button
          variant="outlined"
          sx={{textTransform:"capitalize"}}
            component={Link}
            to={link}
          >  {label} </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}