import { useQuery } from '@tanstack/react-query';
import Typography from "../components/Typography";
import { getChildren } from './../api/children';
import Table from "../components/Table";
import Avatar from '@mui/material/Avatar';

const CustomImage = ({ row }) => {
  return <Avatar sx={{ width: 50, height: 50 }}   src={row?.avatar} /> 
};

const columns = [
  {
    key: 'name',
    displayName: 'Child Name'
  },
  {
    key: 'avatar',
    displayName: 'Image',
    Cell: CustomImage
  }
];

const SessionList = () => {


  const { isLoading, error, data } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildren(),
  })


  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <Typography variant="h6" label="Children" />
      <Table
        data={data.data}
        columns={columns}
      />

    </>
  )
}

export default SessionList;