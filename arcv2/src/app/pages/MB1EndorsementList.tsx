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

interface EndorsementData {
  id: number;
  issueDate: string;
  certificateNumber: string;
  makerName: string;
  salesDestination: string;
  projectName: string;
  remarks1: string;
  remarks2: string;
  remarks3: string;
  steelNumber: string;
  manufacturingNumber: string;
  productNumber: string;
  dimension: string;
  length: string;
  shipmentLength: string;
  count: string;
  shipmentCount: string;
  standard: string;
  orderNumber: string;
  shipmentDate: string;
  sellerName: string;
}

const mockEndorsementData: EndorsementData[] = [
  {
    id: 1,
    issueDate: '2024/01/15',
    certificateNumber: 'CERT-2024-001',
    makerName: '三菱製鉄株式会社',
    salesDestination: '東京建設株式会社',
    projectName: '新宿ビル建設',
    remarks1: '特記事項1',
    remarks2: '特記事項2',
    remarks3: '特記事項3',
    steelNumber: 'ST-001',
    manufacturingNumber: 'MF-001',
    productNumber: 'PR-001',
    dimension: '200x100',
    length: '6000',
    shipmentLength: '6000',
    count: '10',
    shipmentCount: '10',
    standard: 'JIS G3101',
    orderNumber: 'ORD-001',
    shipmentDate: '2024/01/20',
    sellerName: '三菱製鉄販売',
  },
  {
    id: 2,
    issueDate: '2024/01/16',
    certificateNumber: 'CERT-2024-002',
    makerName: '三菱製鉄株式会社',
    salesDestination: '大阪建設株式会社',
    projectName: '梅田タワー',
    remarks1: '-',
    remarks2: '-',
    remarks3: '-',
    steelNumber: 'ST-002',
    manufacturingNumber: 'MF-002',
    productNumber: 'PR-002',
    dimension: '250x125',
    length: '8000',
    shipmentLength: '8000',
    count: '15',
    shipmentCount: '15',
    standard: 'JIS G3136',
    orderNumber: 'ORD-002',
    shipmentDate: '2024/01/22',
    sellerName: '三菱製鉄販売',
  },
  {
    id: 3,
    issueDate: '2024/01/17',
    certificateNumber: 'CERT-2024-003',
    makerName: '三菱製鉄株式会社',
    salesDestination: '福岡建設株式会社',
    projectName: '博多駅前開発',
    remarks1: '急ぎ',
    remarks2: '-',
    remarks3: '-',
    steelNumber: 'ST-003',
    manufacturingNumber: 'MF-003',
    productNumber: 'PR-003',
    dimension: '300x150',
    length: '10000',
    shipmentLength: '10000',
    count: '20',
    shipmentCount: '20',
    standard: 'JIS G3101',
    orderNumber: 'ORD-003',
    shipmentDate: '2024/01/25',
    sellerName: '三菱製鉄販売',
  },
];

const endorsementFilterColumns: FilterColumn[] = [
  { key: 'issueDate', label: '発行日' },
  { key: 'certificateNumber', label: '証明書番号' },
  { key: 'makerName', label: 'メーカー名' },
  { key: 'salesDestination', label: '販売先' },
  { key: 'projectName', label: '物件名' },
  { key: 'remarks1', label: '備考1' },
  { key: 'remarks2', label: '備考2' },
  { key: 'remarks3', label: '備考3' },
  { key: 'steelNumber', label: '製鋼番号' },
  { key: 'manufacturingNumber', label: '製造番号' },
  { key: 'productNumber', label: '製品番号' },
  { key: 'dimension', label: '寸法' },
  { key: 'length', label: '長さ' },
  { key: 'shipmentLength', label: '出荷長さ' },
  { key: 'count', label: '員数' },
  { key: 'shipmentCount', label: '出荷員数' },
  { key: 'standard', label: '規格' },
  { key: 'orderNumber', label: '受注番号' },
  { key: 'shipmentDate', label: '出荷日' },
  { key: 'sellerName', label: '販売元名称' },
];

export function MB1EndorsementList() {
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
        <Table stickyHeader size="small" sx={{ minWidth: 1800 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>DL</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>発行日</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>証明書番号</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>メーカー名</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>販売先</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>物件名</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>備考1</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>備考2</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>備考3</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>製鋼番号</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>製造番号</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>製品番号</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>寸法</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>長さ</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>出荷長さ</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>員数</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>出荷員数</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>規格</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>受注番号</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>出荷日</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>販売元名称</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockEndorsementData.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>
                  <IconButton size="small" color="primary">
                    <GetApp fontSize="small" />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.issueDate}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.certificateNumber}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.makerName}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.salesDestination}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.projectName}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.remarks1}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.remarks2}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.remarks3}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.steelNumber}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.manufacturingNumber}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.productNumber}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.dimension}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.length}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.shipmentLength}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.count}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.shipmentCount}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.standard}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.orderNumber}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.shipmentDate}</TableCell>
                <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.sellerName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <FilterModal
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        columns={endorsementFilterColumns}
        filters={filters}
        onApply={setFilters}
      />
    </Box>
  );
}