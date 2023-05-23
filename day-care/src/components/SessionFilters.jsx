import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { format } from '../utils/date-format';
var currentDate = new Date();

//sesssion filter for session page
export default function SessionFilters({ dateFilter }) {
  const [counter, setCounter] = useState(0);
  const [date, setDate] = useState(currentDate);
  const handleToday = () => {
    setCounter(0)
  }
  const handlePrev = () => {
    setCounter(counter - 1)
  }

  const handleNext = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + counter);
    setDate(format(nextDate));
    dateFilter(format(nextDate));
  }, [counter, dateFilter])



  return (
    <Grid container spacing={2}>
      <Grid container item >
        <Grid item xs={4}>
          <TextField disabled variant="standard" value={`Selected Date: ${date}`} />
        </Grid>
        <Grid item xs={5}>
        </Grid>
        <Grid item xs={2} >
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={handleToday} >Today</Button>
            <Button onClick={handlePrev} >Prev</Button>
            <Button onClick={handleNext} >Next</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
}