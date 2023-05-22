import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function AccessibleTable({ data, columns }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
          <TableCell >S.No</TableCell>
            {
              columns?.map((value) => {
                return <TableCell  key={`header-${value.key}`} >{value.displayName}</TableCell>;
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, i) => (
              <TableRow key={`row-${i}`}>
              <TableCell>{i+1}</TableCell>
              {
                data && columns?.map((cols, km) => {
                  const Cell = cols['Cell'];
                  return (<TableCell key={`row-${i}coulmn-${km}`} >  {Cell ? <Cell row={row} index={i} /> : row[cols.key]} </TableCell>)
                })
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}