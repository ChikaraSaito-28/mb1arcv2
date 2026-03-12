import { useState } from 'react';
import { Box, Button, TextField, InputAdornment } from '@mui/material';
import {
  FilterList,
  ExpandMore,
  Search,
  Assignment,
  ViewColumn,
  FormatLineSpacing,
  RestartAlt,
} from '@mui/icons-material';
import { FilterModal, FilterColumn } from './FilterModal';

const millSheetColumns: FilterColumn[] = [
  { key: 'status', label: 'ステータス' },
  { key: 'saitoFlag', label: '斉藤フラグ' },
  { key: 'factory', label: '納入工場' },
  { key: 'orderNumber', label: '受注番号' },
  { key: 'productNumber', label: '製品番号' },
  { key: 'date', label: '登録日時' },
  { key: 'disclosureStatus', label: '開示ステータス' },
  { key: 'disclosureDate', label: '開示日時' },
  { key: 'customerFactory', label: '得意先工場' },
  { key: 'customerOrderNumber', label: '得意先注文番号' },
  { key: 'productName', label: '品名' },
  { key: 'material', label: '材質' },
  { key: 'thickness', label: '板厚' },
  { key: 'width', label: '幅' },
  { key: 'length', label: '長さ' },
  { key: 'quantity', label: '数量' },
  { key: 'unit', label: '単位' },
  { key: 'weight', label: '質量' },
  { key: 'heatNumber', label: 'ヒート番号' },
  { key: 'inspector', label: '検査員' },
];

export function FilterToolbar() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<Record<string, string>>({});

  const activeCount = Object.values(filters).filter((v) => v.trim() !== '').length;

  return (
    <>
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
          <TextField
            placeholder="フリーワードで検索"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              ),
            }}
            sx={{ width: 220 }}
          />
        </Box>

        {/* Right Actions */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            color="inherit"
            startIcon={<Assignment />}
            sx={{
              bgcolor: '#e0e0e0',
              textTransform: 'uppercase',
              fontSize: '13px',
            }}
          >
            リストエクスポート
          </Button>
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

      <FilterModal
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        columns={millSheetColumns}
        filters={filters}
        onApply={setFilters}
      />
    </>
  );
}