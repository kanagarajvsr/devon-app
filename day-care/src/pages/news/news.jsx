import { useQuery } from '@tanstack/react-query';
import Typography from "../../components/Typography";
import { getNews } from '../../api/news';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Filter from './../../components/Filters';

//This use to display the NEWS
const News = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['news'],
    queryFn: () => getNews(),// Get the news from the API
  })


  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <Typography variant="h6" label="News" />
      <Filter link="/news/add" label="Create new Post"/>
      {data?.data?.map((row) => (
        <Card key={row.id} sx={{ marginBottom: 1 }}>
          <CardContent >
            <Typography variant="h6" label={row.title} />
            <Typography variant="subtitle1" label={row.author} />
            <Typography variant="body1" color="text.secondary" label={row.content} />
          </CardContent>
        </Card>
      ))
      }
    </>
  )
}

export default News;