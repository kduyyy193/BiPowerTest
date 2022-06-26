import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(stt, code, name, email, phoneNumber, date, status) {
  return { stt, code, name, email, phoneNumber, date, status };
}

const rows = [
  createData(
    1,
    "B0001",
    "Nguyễn Văn A",
    "nguyenvana@gmail.com",
    "0987564258",
    "10/10/1994",
    "Đã phê duyệt"
  ),
  createData(
    2,
    "B0001",
    "Nguyễn Văn A",
    "nguyenvana@gmail.com",
    "0987564258",
    "10/10/1994",
    "Đã phê duyệt"
  ),
  createData(
    3,
    "B0001",
    "Nguyễn Văn A",
    "nguyenvana@gmail.com",
    "0987564258",
    "10/10/1994",
    "Đã phê duyệt"
  ),
  createData(
    4,
    "B0001",
    "Nguyễn Văn A",
    "nguyenvana@gmail.com",
    "0987564258",
    "10/10/1994",
    "Đã phê duyệt"
  ),
  createData(
    5,
    "B0001",
    "Nguyễn Văn A",
    "nguyenvana@gmail.com",
    "0987564258",
    "10/10/1994",
    "Đã phê duyệt"
  ),
  createData(
    6,
    "B0001",
    "Nguyễn Văn A",
    "nguyenvana@gmail.com",
    "0987564258",
    "10/10/1994",
    "Đã phê duyệt"
  ),
  createData(
    7,
    "B0001",
    "Nguyễn Văn A",
    "nguyenvana@gmail.com",
    "0987564258",
    "10/10/1994",
    "Đã phê duyệt"
  ),
  createData(
    8,
    "B0001",
    "Nguyễn Văn A",
    "nguyenvana@gmail.com",
    "0987564258",
    "10/10/1994",
    "Đã phê duyệt"
  ),
  createData(
    9,
    "B0001",
    "Nguyễn Văn A",
    "nguyenvana@gmail.com",
    "0987564258",
    "10/10/1994",
    "Đã phê duyệt"
  ),
  createData(
    10,
    "B0001",
    "Nguyễn Văn A",
    "nguyenvana@gmail.com",
    "0987564258",
    "10/10/1994",
    "Đã phê duyệt"
  ),
];

export default function CustomizedTables() {
  return (
    <div className="bg-white mt-4 py-8 px-4">
      <span className="font-semibold text-xl">Danh sách nhân viên</span>
      <TableContainer className="mt-4" component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow className="bg-yellow-500">
              <StyledTableCell>STT</StyledTableCell>
              <StyledTableCell>Mã nhân viên</StyledTableCell>
              <StyledTableCell>Họ và tên</StyledTableCell>
              <StyledTableCell align="center">Email công ty</StyledTableCell>
              <StyledTableCell align="center">Số điện thoại</StyledTableCell>
              <StyledTableCell align="center">
                Ngày tháng năm sinh
              </StyledTableCell>
              <StyledTableCell align="center">Trạng thái</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.stt}>
                <StyledTableCell component="th" scope="row">
                  {row.stt}
                </StyledTableCell>
                <StyledTableCell align="center">{row.code}</StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.phoneNumber}
                </StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
