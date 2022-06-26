import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationButtons() {
  return (
    <div className="pb-4 bg-white text-center  mx-auto">
      <Stack spacing={2}>
        <Pagination count={5} showFirstButton showLastButton shape="rounded" />
      </Stack>
    </div>
  );
}
