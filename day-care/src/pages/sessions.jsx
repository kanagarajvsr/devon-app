import { useState } from "react";
import { useQuery, useMutation } from '@tanstack/react-query';
import SessionContent from "../components/SessionContent";
import Table from "../components/Table";
import Typography from "../components/Typography";
import Filters from "../components/Filters";
import { getSessions, updateSessions } from './../api/sessions';
import { getChildren } from './../api/children';
import { format } from '../utils/date-format';

const CustomGroup = ({ row }) => {
  return row.group.name;
};

const columns = [
  {
    key: 'child_id',
    displayName: 'Child Name'
  },
  {
    key: 'group.name',
    displayName: 'Group Name',
    Cell: CustomGroup
  },
  {
    key: 'day',
    displayName: 'Date'
  },
  {
    key: 'start_time',
    displayName: 'Start Time'
  },
  {
    key: 'end_time',
    displayName: 'End Time'
  },
  {
    key: 'presence',
    displayName: 'Status'
  },
  {
    key: 'product_name',
    displayName: 'Product Name'
  }
];

const presenceStatus = {
  'unknown': 'present',
  'present': 'picked up',
  'picked up': 'unknown'
}
const currentDate = new Date();
const nextDate = new Date(currentDate);
nextDate.setDate(currentDate.getDate());
const currentFormatedDate = format(nextDate);


const SessionList = () => {
  const [selectedDate, setSelectedDate] = useState(currentFormatedDate);
  const { isLoading, error, data, refresh } = useQuery({
    queryKey: ['sessionsData', selectedDate],
    queryFn: async () => {
      const sessionData = await getSessions(selectedDate);
      const childrenData = await getChildren();
      return sessionData?.data.map((value) => {
        const childData = childrenData?.data.filter(b => value.child_id === b.id);
        value.child_name = childData[0]["name"];
        value.avatar = childData[0]["avatar"];
        return value;

      })
    }
  })

  const mutation = useMutation({
    mutationFn: async ( row) => { 
      return await updateSessions(row.id, row)
    }
  })

  const dateFilter = (date) => {
    setSelectedDate(date);
  };

  const statusUpdate = (id, row) => {
    delete row.avatar;
    delete row.child_name;
    row.presence = presenceStatus[row.presence];
    mutation.mutate(row);
    console.log(id, row);


    if (mutation.isFetched) {
      refresh();
    }
  };

  return (
    <>
      <Typography variant="h6" label="Sessions" />
      <Filters dateFilter={dateFilter} Date={selectedDate} />
      <SessionContent data={data} statusUpdate={statusUpdate} />
      {/*   <Table 
      data={data}
      columns={columns}
      /> */}
    </>
  )
}

export default SessionList;