import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const style = {
    color: 'text.secondary',
    fontSize: '12px',
    textAlign: 'left'
}

const presenceStatus = {
    'unknown': 'unknown to present',
    'present': 'present to picked up',
    'picked up': 'picked up to unknown'
}

const ListItems = ({ data,statusUpdate }) => {

    const statusUpdateHandler =(id,row)=>{
        statusUpdate(id,row)
    }
    return (
        <List sx={{ padding: 0, width: 344 }}>
            <ListItem >
                <ListItemAvatar>
                    <Avatar sx={{ width: 95, height: 95 }} alt="Remy Sharp" src={data?.avatar} />
                </ListItemAvatar>
                <ListItemText>
                    <Typography sx={style}>Date: {data.day}</Typography>
                    <Typography sx={style}>Child Name: {data.child_name}</Typography>
                    <Typography sx={style}>Group Name: {data.group.name}</Typography>
                    <Typography sx={style}>Presence: {data.presence}</Typography>
                    <Typography sx={style}>Start Time: {data.start_time} - End Time:{data.end_time} </Typography>
                    <Typography sx={style}>Change: <Button onClick={()=>statusUpdateHandler(data.id,data)}  sx={{fontSize:9,paddingRight:1,paddingLeft:1}} size="small">{presenceStatus[`${data.presence}`]}</Button></Typography>
                </ListItemText>
            </ListItem>
            <Divider />
        </List>
    )
}

export default ListItems;