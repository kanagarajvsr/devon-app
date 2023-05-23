import { useState } from "react";
import { useQuery, useMutation } from '@tanstack/react-query';
import SessionContent from "../components/SessionContent"; //
import Table from "../components/Table"; // common table components for each page
import { toast } from "react-toastify";
import Typography from "../components/Typography"; // Common Typography for each component
import SessionFilters from "../components/SessionFilters"; // Common component for session filters
import { getSessions, updateSessions } from './../api/sessions';// To get session data from the API
import { getChildren } from './../api/children'; // To get children data from the API
import { format } from '../utils/date-format'; // user defined date format has been declared

//To get group name for table structure
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
  const [selectedDate, setSelectedDate] = useState(currentFormatedDate); // Set the current date for the session

  const { data, refresh } = useQuery({
    queryKey: ['sessionsData', selectedDate],
    queryFn: async () => {
      const sessionData = await getSessions(selectedDate); // Get the session data
      const childrenData = await getChildren(selectedDate);// Get the children data
      return sessionData?.data.map((value) => { // merging the data based on child_id
        const childData = childrenData?.data.filter(b => value.child_id === b.id);
        value.child_name = childData[0]["name"];
        value.avatar = childData[0]["avatar"];
        return value;

      })
    }
  })

  // Child Presence status update with react-query
  const { mutate, isFetched } = useMutation(updateSessions, { 
    onSuccess: () => { // success toast message with green color
      toast.success(`Presence status changed successfully!`, {
        position: "bottom-center",
        autoClose: 2000,
      });
    },
    onError: (err) => { // error toast message with red color
      toast.error(`Presence status not changed ${err}!`, {
        position: "bottom-center",
        autoClose: 2000,
      });
    }
  });

  // Date filter for today, previous and next dates.
  const dateFilter = (date) => {
    setSelectedDate(date);
  };

  // Child Presence status update called from child component.
  const statusUpdate = (id, row) => {
    delete row.avatar;
    delete row.child_name;
    row.presence = presenceStatus[row.presence];
    mutate(row); // this function use to update presence
    if (isFetched) {
      refresh(); // this function use to refresh the session data
    }
  };

  return (
    <>
      <Typography variant="h6" label="Sessions" />
      <SessionFilters dateFilter={dateFilter} Date={selectedDate} />
      <SessionContent data={data} statusUpdate={statusUpdate} />
      {/*   <Table 
      data={data}
      columns={columns}
      /> */}
    </>
  )
}

export default SessionList;