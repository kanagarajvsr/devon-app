import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { format } from '../utils/date-format';
import Typography from "./Typography";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

var currentDate = new Date("2023-06-02");

const groupdetails = [
  {
    value:"Group 1",
  },
  {
    value:"Group 2",
  },
  {
    value:"Group 3",
  },
  {
    value:"Group 4",
  }
]

//sesssion filter for session page
export default function SessionFilters({ dataFilter }) {
  const [counter, setCounter] = useState(0);
  const [group, setGroup] = useState("");
  const [date, setDate] = useState(currentDate);
  /* const handleToday = () => {
    setCounter(0)
  } */
  const handlePrev = () => {
    setCounter(counter - 1)
  }

  const handleNext = () => {
    setCounter(counter + 1)
  }

  const handleChange = (event) => {
    setGroup(event.target.value)
  }

  useEffect(() => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + counter);
    setDate(format(nextDate));
    dataFilter(format(nextDate),group);
  }, [counter,group, dataFilter])

  return (
    <Grid container spacing={2}>
      <Grid container item >
      
        <Grid item xs={12} sx={{display:"flex",justifyContent:"right"}} >
          <Select
            value={group}
            onChange={handleChange}
            sx={{ m: 0, mr:1,mt:-1, minWidth: 120 }} size="small"
            inputProps={{ 'aria-label': 'Without label' }}
            displayEmpty
          >
            <MenuItem value=""> <em>Select Group</em> </MenuItem>
            {
              groupdetails.map((group) => (
                <MenuItem key={group.value} value={group.value}>{group.value}</MenuItem>
              ))
            } 
          </Select>
          <Typography component="div" margin={"5px"} label={`Date: ${date}`} />
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
{/*             <Button onClick={handleToday} >Today</Button>
 */}            <Button onClick={handlePrev} >Prev</Button>
            <Button onClick={handleNext} >Next</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
}