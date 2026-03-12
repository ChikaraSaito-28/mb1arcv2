import { Box, Typography, Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import { AlertBanner } from '../components/AlertBanner';
import { FilterToolbar } from '../components/FilterToolbar';
import { DataTable } from '../components/DataTable';

export function MillSheetList() {
  return (
    <Box sx={{ flex: 1, overflow: 'auto', bgcolor: '#fafafa' }}>
      {/* Page Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          bgcolor: 'white',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <Typography variant="h5">ミルシート一覧</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Download />}
          sx={{ textTransform: 'uppercase' }}
        >
          一括ダウンロード
        </Button>
      </Box>

      {/* Alert Banner */}
      <AlertBanner />

      {/* Filter Toolbar */}
      <FilterToolbar />

      {/* Data Table */}
      <DataTable />
    </Box>
  );
}
