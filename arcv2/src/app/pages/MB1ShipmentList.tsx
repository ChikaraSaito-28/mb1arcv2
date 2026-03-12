import { useState } from 'react';
import { Box, Button } from '@mui/material';
import {
  FilterList,
  ExpandMore,
  ViewColumn,
  FormatLineSpacing,
  RestartAlt,
} from '@mui/icons-material';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from '@mui/material';
import { GetApp } from '@mui/icons-material';
import { FilterModal, FilterColumn } from '../components/FilterModal';

interface ShipmentData {
  id: number;
  projectName: string;
  salesDestination: string;
  remarks1: string;
  remarks2: string;
  remarks3: string;
  sellerName: string;
}

const mockShipmentData: ShipmentData[] = [
  {
    id: 1,
    projectName: '新宿ビル建設',
    salesDestination: '東京建設株式会社',
    remarks1: '第1期工事',
    remarks2: 'フロア1-5',
    remarks3: '-',
    sellerName: '三菱製鉄販売',
  },
  {
    id: 2,
    projectName: '梅田タワー',
    salesDestination: '大阪建設株式会社',
    remarks1: '第2期工事',
    remarks2: 'フロア6-10',
    remarks3: '-',
    sellerName: '三菱製鉄販売',
  },
  {
    id: 3,
    projectName: '博多駅前開発',
    salesDestination: '福岡建設株式会社',
    remarks1: '急ぎ',
    remarks2: '優先配送',
    remarks3: '検査済み',
    sellerName: '三菱製鉄販売',
  },
  {
    id: 4,
    projectName: '名古屋駅ビル',
    salesDestination: '中部建設株式会社',
    remarks1: '標準工事',
    remarks2: '-',
    remarks3: '-',
    sellerName: '三菱製鉄販売',
  },
  {
    id: 5,
    projectName: '札幌オフィス',
    salesDestination: '北海道建設株式会社',
    remarks1: '冬季施工',
    remarks2: '防寒対策',
    remarks3: '-',
    sellerName: '三菱製鉄販売',
  },
];

const shipmentFilterColumns: FilterColumn[] = [
  { key: 'projectName', label: '物件名' },
  { key: 'salesDestination', label: '販売先' },
  { key: 'remarks1', label: '備考1' },
  { key: 'remarks2', label: '備考2' },
  { key: 'remarks3', label: '備考3' },
  { key: 'sellerName', label: '販売元名称' },
];

export function MB1ShipmentList() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<Record<string, string>>({});

  const activeCount = Object.values(filters).filter((v) => v.trim() !== '').length;

  return (
    <Box sx={{ flex: 1, overflow: 'auto', bgcolor: '#fafafa' }}>
      {/* Filter Toolbar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2,
          py: 1,
          bgcolor: 'white',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        {/* Left Actions */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flex: 1 }}>
          <Button
            variant="contained"
            color={activeCount > 0 ? 'primary' : 'inherit'}
            startIcon={<FilterList />}
            endIcon={<ExpandMore />}
            onClick={() => setFilterOpen(true)}
            sx={{
              bgcolor: activeCount > 0 ? undefined : '#e0e0e0',
              textTransform: 'uppercase',
              fontSize: '13px',
            }}
          >
            絞り込み条件{activeCount > 0 ? `（${activeCount}）` : ''}
          </Button>
        </Box>

        {/* Right Actions */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<ViewColumn />}
            sx={{
              bgcolor: '#e0e0e0',
              textTransform: 'uppercase',
              fontSize: '13px',
            }}
          >
            項目カスタマイズ
          </Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<FormatLineSpacing />}
            sx={{
              bgcolor: '#e0e0e0',
              textTransform: 'uppercase',
              fontSize: '13px',
            }}
          >
            行間隔調整
          </Button>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<RestartAlt />}
            sx={{
              bgcolor: '#e0e0e0',
              textTransform: 'uppercase',
              fontSize: '13px',
            }}
          >
            表示リセット
          </Button>
        </Box>
      </Box>

      {/* Data Table */}
      <TableContainer component={Paper} sx={{ m: 2, mt: 1, overflowX: 'auto' }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>DL</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>物件名</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>販売先</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>備考1</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>備考2</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>備考3</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>販売元名称</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockShipmentData.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>
                  <IconButton size="small" color="primary">
                    <GetApp fontSize="small" />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.projectName}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.salesDestination}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.remarks1}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.remarks2}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.remarks3}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.sellerName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <FilterModal
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        columns={shipmentFilterColumns}
        filters={filters}
        onApply={setFilters}
      />
    </Box>
  );
}