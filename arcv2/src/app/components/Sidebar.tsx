import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Box,
  Typography,
  Badge,
  Divider,
} from '@mui/material';
import {
  Description,
  CheckCircle,
  Rule,
  People,
  HelpCenter,
  Email,
  Assignment,
  LocalShipping,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router';
import imgAvatar from "figma:asset/8c3633626e6fe348444552bbe52655a211ea33f3.png";
import svgPaths from "../../imports/svg-la5wucl7z1";

function MillBoxLogo() {
  return (
    <Box sx={{ width: 139, height: 42, position: 'relative', px: 2 }}>
      <svg width="139" height="42" viewBox="0 0 139 42" fill="none">
        <path d={svgPaths.p176a6800} fill="black" />
        <path d={svgPaths.p88d1100} fill="black" />
        <path d={svgPaths.p31481170} fill="black" />
        <path d={svgPaths.p22f89600} fill="black" />
        <path d={svgPaths.p14303a80} fill="black" />
        <path d={svgPaths.p2f229e00} fill="black" />
        <path d={svgPaths.p3f02a880} fill="black" />
        <path d={svgPaths.p16e46d00} fill="black" />
        <path d={svgPaths.p11847300} fill="#2196F3" />
        <path d={svgPaths.pe34ca00} fill="#2196F3" />
      </svg>
    </Box>
  );
}

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 256,
        height: '100vh',
        bgcolor: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      {/* Logo */}
      <Box sx={{ p: 2 }}>
        <MillBoxLogo />
      </Box>

      {/* User Profile */}
      <Box sx={{ px: 2, py: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar
            src={imgAvatar}
            sx={{ width: 40, height: 40 }}
          />
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              三菱製鉄株式会社
            </Typography>
            <Typography variant="caption" color="text.secondary">
              012345678910
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Navigation Menu */}
      <List sx={{ flex: 1 }}>
        <ListItem disablePadding>
          <ListItemButton 
            selected={location.pathname === '/'}
            onClick={() => navigate('/')}
          >
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary="開示ミルシート一覧" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CheckCircle />
            </ListItemIcon>
            <ListItemText primary="再DL承認一覧" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Rule />
            </ListItemIcon>
            <ListItemText primary="自動開示ルール設定" />
            <Badge badgeContent={3} color="primary" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="メンバー" />
          </ListItemButton>
        </ListItem>

        <Divider sx={{ my: 1 }} />

        <ListItem disablePadding>
          <ListItemButton 
            selected={location.pathname === '/mb1-endorsement'}
            onClick={() => navigate('/mb1-endorsement')}
          >
            <ListItemIcon>
              <Assignment />
            </ListItemIcon>
            <ListItemText primary="MB1裏書明細一覧" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton 
            selected={location.pathname === '/mb1-shipment'}
            onClick={() => navigate('/mb1-shipment')}
          >
            <ListItemIcon>
              <LocalShipping />
            </ListItemIcon>
            <ListItemText primary="MB1出荷一覧" />
          </ListItemButton>
        </ListItem>
      </List>

      {/* Bottom Items */}
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HelpCenter />
            </ListItemIcon>
            <ListItemText primary="ヘルプセンター" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary="お問い合わせ" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}