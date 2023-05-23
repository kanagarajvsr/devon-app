import Typography from '@mui/material/Typography';
// Reuse component for title and subtitle
export default function Types(props) {
  return<Typography {...props}>{props.label}</Typography>;
}
