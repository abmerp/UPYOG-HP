import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "", minWidth: 40 },
  { id: "LandType", label: "LandType", minWidth: 70 },
  { id: "highapproved", label: "Approved" },
  { id: "highcertificateIssued", label: "Certificate Issued" },
  { id: "highreverted", label: "Reverted" },
  { id: "highrejected", label: "Rejected" },
  { id: "highpending", label: "Pending" },
  { id: "moderateapproved", label: "Approved" },
  { id: "moderatecertificateIssued", label: "Certificate Issued" },
  { id: "moderatereverted", label: "Reverted" },
  { id: "moderaterejected", label: "Rejected" },
  { id: "moderatepending", label: "Pending" },
  { id: "lowapproved", label: "Approved" },
  { id: "lowcertificateIssued", label: "Certificate Issued" },
  { id: "lowreverted", label: "Reverted" },
  { id: "lowrejected", label: "Rejected" },
  { id: "lowpending", label: "Pending" },
  { id: "total", label: "Total" },
];

function createData(
  name,
  LandType,
  highapproved,
  highcertificateIssued,
  highreverted,
  highrejected,
  highpending,
  moderateapproved,
  moderatecertificateIssued,
  moderatereverted,
  moderaterejected,
  moderatepending,
  lowapproved,
  lowcertificateIssued,
  lowreverted,
  lowrejected,
  lowpending,
  total
) {
  return {
    name,
    LandType,
    highapproved,
    highcertificateIssued,
    highreverted,
    highrejected,
    highpending,
    moderateapproved,
    moderatecertificateIssued,
    moderatereverted,
    moderaterejected,
    moderatepending,
    lowapproved,
    lowcertificateIssued,
    lowreverted,
    lowrejected,
    lowpending,
    total,
  };
}

const rows = [
  createData("1", "Commercial", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  createData(
    "2",
    "Residential",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ),
  createData(
    "3",
    "Public & semipublic",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ),
  createData(
    "4",
    "Industrial",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ),
  createData(
    "5",
    "Tourism Unit",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ),
  createData(
    "6",
    "Mix Land Use",
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ),
];

export default function RiskBasedTimeline() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", marginTop: "2rem" }}>
      <h1>Risk Based Timeline report</h1>
      <TableContainer
        sx={{
          width: "100%",
          marginTop: "2rem",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                Sl.#
              </TableCell>
              <TableCell
                align="left"
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                Land Type
              </TableCell>
              <TableCell
                align="left"
                colSpan={5}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                High Risk
              </TableCell>
              <TableCell
                align="left"
                colSpan={5}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                Moderate Risk
              </TableCell>
              <TableCell
                align="left"
                colSpan={5}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                Low Risk
              </TableCell>
              <TableCell
                align="left"
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                Total
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{
                    borderRight: "1px solid #e0e0e0",
                  }}
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.name}
                    sx={{
                      borderRight: "1px solid #e0e0e0",
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{
                            borderRight: "1px solid #e0e0e0",
                          }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            <TableRow>
              <TableCell
                colSpan={2}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                Total Applications
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
              <TableCell
                colSpan={1}
                sx={{
                  borderRight: "1px solid #e0e0e0",
                }}
              >
                0
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
