import { Alert, AlertTitle, Button } from '@mui/material';

export function AlertBanner() {
  return (
    <Alert
      severity="error"
      action={
        <Button color="inherit" size="small" variant="contained" sx={{ bgcolor: '#d32f2f' }}>
          自動開示ルール設定
        </Button>
      }
      sx={{ m: 2, mb: 0 }}
    >
      <AlertTitle>3件の自動開示ルール設定がされていません。</AlertTitle>
      自動開示ルールが未設定のものがあります。「自動開示ルール設定」ボタンをクリックして設定を完了してください。
    </Alert>
  );
}
