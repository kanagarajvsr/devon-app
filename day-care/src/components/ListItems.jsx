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
    fontSize: '13px',
    textAlign: 'left'
}

const presenceStatus = {
    'unknown':{
        value:'present',
        color:'#f74d4d'
    }, 'present': {
        value:'picked up',
        color:'#0c9b0c'
    },
    'picked up': {
        value:'unknown',
        color:'#efb957'
    }
}

// Reusable list item for displaying
const ListItems = ({ data,statusUpdate }) => {

    const statusUpdateHandler =(id,row)=>{
        statusUpdate(id,row)
    }
    return (
        <List sx={{ padding: 0,margin:0,marginBottom:1,borderRadius:1, width: 344,bgcolor:presenceStatus[`${data.presence}`]["color"] }}>
            <ListItem >
                <ListItemAvatar >
                    <Avatar sx={{ width: 95, height: 95,marginRight:1 }} alt="Remy Sharp" src={data?.avatar} />
                </ListItemAvatar>
                <ListItemText>
                    <Typography sx={style}>Date: {data.day}</Typography>
                    <Typography sx={style}>Child Name: {data.child_name}</Typography>
                    <Typography sx={style}>Group Name: {data.group.name}</Typography>
                    <Typography sx={{...style}} >Presence: {data.presence}</Typography>
                    <Typography sx={style}>Start Time: {data.start_time} - End Time:{data.end_time} </Typography>
                    <Typography sx={style}>Change Status: <Button onClick={()=>statusUpdateHandler(data.id,data)}  sx={{fontSize:12,paddingRight:1,paddingLeft:1,textTransform:"capitalize",backgroundColor:"#e9e7e1"}} size="small">{presenceStatus[`${data.presence}`]["value"]}</Button></Typography>
                </ListItemText>
            </ListItem> 
        </List>
    )
}

export default ListItems;