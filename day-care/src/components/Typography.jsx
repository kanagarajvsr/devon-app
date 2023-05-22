import Typography from '@mui/material/Typography';

export default function Types(props) {
  return<Typography {...props}>{props.label}</Typography>;
}
