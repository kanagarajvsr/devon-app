import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ListItems from './ListItems'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 344,
    color: theme.palette.text.secondary,
}));

const GridTitle=({title})=><Grid item sx={{ padding:0 }}>
<Item><Typography >{title}</Typography></Item>
</Grid>

const Content = ({ data,statusUpdate }) => {

    const applyRender=(data)=> {
        const sessionList = {
            "Morning only": [],
            "Whole day": [],
            "Afternoon": []
        }
        data?.forEach(session => {
            sessionList[`${session.product_name}`].push(<ListItems statusUpdate={statusUpdate} key={session.id} data={session} />)
        })
        return (
            <>
                <Item>{sessionList["Morning only"]}</Item>
                <Item>{sessionList["Afternoon"]}</Item>
                <Item>{sessionList["Whole day"]}</Item>
            </>
        )
    }

    return (
        <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 9 }}>
            <Grid container spacing={1} mt={2} mb={1}>
                <GridTitle title="Morning" />
                <GridTitle title="Afternoon" />
                <GridTitle title="Whole day" /> 
            </Grid>
            <Stack direction="row" spacing={1}  > 
                {applyRender(data)}
            </Stack>
        </Grid>
    )
}

export default Content;