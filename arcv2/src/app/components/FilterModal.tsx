import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  IconButton,
  Typography,
  Divider,
  Grid,
} from '@mui/material';
import { Close, FilterList, RestartAlt } from '@mui/icons-material';

export interface FilterColumn {
  key: string;
  label: string;
}

interface FilterModalProps {
  open: boolean;
  onClose: () => void;
  columns: FilterColumn[];
  filters: Record<string, string>;
  onApply: (filters: Record<string, string>) => void;
}

export function FilterModal({
  open,
  onClose,
  columns,
  filters,
  onApply,
}: FilterModalProps) {
  const [localFilters, setLocalFilters] = useState<Record<string, string>>({});

  useEffect(() => {
    if (open) {
      setLocalFilters({ ...filters });
    }
  }, [open, filters]);

  const handleChange = (key: string, value: string) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    const empty: Record<string, string> = {};
    columns.forEach((col) => {
      empty[col.key] = '';
    });
    setLocalFilters(empty);
  };

  const handleApply = () => {
    onApply(localFilters);
    onClose();
  };

  const activeCount = Object.values(localFilters).filter((v) => v.trim() !== '').length;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2 },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pb: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FilterList color="primary" />
          <Typography variant="h6" component="span">
            絞り込み条件
          </Typography>
          {activeCount > 0 && (
            <Typography
              variant="caption"
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: '12px',
                px: 1.5,
                py: 0.25,
                ml: 1,
              }}
            >
              {activeCount}件設定中
            </Typography>
          )}
        </Box>
        <IconButton onClick={onClose} size="small">
          <Close />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent sx={{ pt: 2 }}>
        <Grid container spacing={2}>
          {columns.map((col) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={col.key}>
              <TextField
                label={col.label}
                value={localFilters[col.key] || ''}
                onChange={(e) => handleChange(col.key, e.target.value)}
                size="small"
                fullWidth
                placeholder={`${col.label}で検索`}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>

      <Divider />

      <DialogActions sx={{ px: 3, py: 2, justifyContent: 'space-between' }}>
        <Button
          onClick={handleReset}
          startIcon={<RestartAlt />}
          color="inherit"
          sx={{ textTransform: 'none' }}
        >
          条件をリセット
        </Button>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button onClick={onClose} color="inherit" sx={{ textTransform: 'none' }}>
            キャンセル
          </Button>
          <Button
            onClick={handleApply}
            variant="contained"
            color="primary"
            sx={{ textTransform: 'none', minWidth: 120 }}
          >
            この条件で絞り込む
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
