import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import { Business, Settings } from '@mui/icons-material';

export function TopBar() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ bgcolor: 'white', borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
    >
      <Toolbar sx={{ justifyContent: 'flex-end', gap: 1 }}>
        <Button
          startIcon={<Business />}
          sx={{
            textTransform: 'uppercase',
            color: 'rgba(0, 0, 0, 0.56)',
            fontSize: '14px',
          }}
        >
          三菱製鉄株式会社
        </Button>
        <IconButton>
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
