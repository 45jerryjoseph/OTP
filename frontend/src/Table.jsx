import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables({ users }) {
  return (
    <TableContainer >
      <Table sx={{ Width: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Index</StyledTableCell>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align="left">{i}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.FirstName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.LastName}</StyledTableCell>
              <StyledTableCell align="center">{row.Email}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
