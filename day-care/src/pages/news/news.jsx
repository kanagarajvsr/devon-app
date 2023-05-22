import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';

import Typography from "../../components/Typography";
import { getNews } from '../../api/news';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const SessionList = () => {
  


  const { isLoading, error, data } = useQuery({
    queryKey: ['news'],
    queryFn: () => getNews(),
  })


  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <Typography variant="h6" label="News" />
      <Box >
      <Stack direction="row" spacing={1} sx={{ mb: 1 }} >
      <TextField
           
          variant="standard"
        />
        <Button size="small" >
          Remove a row
        </Button>
        <Button size="small"> Add a row </Button>
      </Stack>
    </Box>
      {data?.data?.map((row, i) => (
        <Card key={row.id} sx={{ marginBottom: 1 }}>
          <CardContent >
            <Typography variant="h6" label={row.title}/>
            <Typography variant="subtitle1" label={row.author}/>
            <Typography variant="body1"  color="text.secondary" label={row.content}/>
          </CardContent>
        </Card>
      ))
      }
    </>
  )
}

export default SessionList;