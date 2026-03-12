import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Paper,
} from '@mui/material';
import { GetApp, OpenInNew } from '@mui/icons-material';

interface MillSheetData {
  id: number;
  selected: boolean;
  status: string;
  saitoFlag: boolean;
  factory: string;
  orderNumber: string;
  productNumber: string;
  date: string;
  disclosureStatus: string;
  disclosureDate: string;
  customerFactory: string;
  customerOrderNumber: string;
  productName: string;
  material: string;
  thickness: string;
  width: string;
  length: string;
  quantity: string;
  unit: string;
  weight: string;
  heatNumber: string;
  inspector: string;
}

const mockData: MillSheetData[] = [
  {
    id: 1,
    selected: false,
    status: '開示先未設定',
    saitoFlag: true,
    factory: '大阪工場',
    orderNumber: '12-68204',
    productNumber: '12-68204',
    date: 'yyyy/mm/dd 00:00',
    disclosureStatus: '開示済',
    disclosureDate: 'yyyy/mm/dd 00:00',
    customerFactory: '福岡工場',
    customerOrderNumber: '22-44229',
    productName: '鋼材',
    material: 'YHW',
    thickness: '6t',
    width: 'x1000',
    length: 'x1000',
    quantity: '1枚',
    unit: '枚',
    weight: 'X.XXXXt',
    heatNumber: '4-69013',
    inspector: '大島',
  },
  {
    id: 2,
    selected: false,
    status: '開示待',
    saitoFlag: false,
    factory: '福岡工場',
    orderNumber: '22-44229',
    productNumber: '22-44229',
    date: 'yyyy/mm/dd 00:00',
    disclosureStatus: '開示待',
    disclosureDate: '',
    customerFactory: '関東工場',
    customerOrderNumber: '34-34453',
    productName: '鋼材',
    material: 'YHW',
    thickness: '8t',
    width: 'x1200',
    length: 'x2400',
    quantity: '2枚',
    unit: '枚',
    weight: 'X.XXXXt',
    heatNumber: '4-69013',
    inspector: '中村',
  },
  {
    id: 3,
    selected: false,
    status: '開示先未設定',
    saitoFlag: true,
    factory: '関東工場',
    orderNumber: '34-34453',
    productNumber: '34-34453',
    date: 'yyyy/mm/dd 00:00',
    disclosureStatus: '開示済',
    disclosureDate: 'yyyy/mm/dd 00:00',
    customerFactory: '大阪工場',
    customerOrderNumber: '12-68204',
    productName: '鋼材',
    material: 'YHW',
    thickness: '10t',
    width: 'x1500',
    length: 'x3000',
    quantity: '3枚',
    unit: '枚',
    weight: 'X.XXXXt',
    heatNumber: '4-69013',
    inspector: '田中',
  },
  {
    id: 4,
    selected: false,
    status: '開示先未設定',
    saitoFlag: false,
    factory: '大阪工場',
    orderNumber: '12-68204',
    productNumber: '12-68204',
    date: 'yyyy/mm/dd 00:00',
    disclosureStatus: '開示済',
    disclosureDate: 'yyyy/mm/dd 00:00',
    customerFactory: '福岡工場',
    customerOrderNumber: '22-44229',
    productName: '鋼材',
    material: 'YHW',
    thickness: '6t',
    width: 'x1000',
    length: 'x1000',
    quantity: '1枚',
    unit: '枚',
    weight: 'X.XXXXt',
    heatNumber: '4-69013',
    inspector: '大島',
  },
  {
    id: 5,
    selected: false,
    status: '開示待',
    saitoFlag: true,
    factory: '関東工場',
    orderNumber: '34-34453',
    productNumber: '34-34453',
    date: 'yyyy/mm/dd 00:00',
    disclosureStatus: '開示待',
    disclosureDate: '',
    customerFactory: '大阪工場',
    customerOrderNumber: '12-68204',
    productName: '鋼材',
    material: 'YHW',
    thickness: '12t',
    width: 'x1800',
    length: 'x3600',
    quantity: '5枚',
    unit: '枚',
    weight: 'X.XXXXt',
    heatNumber: '4-69013',
    inspector: '佐藤',
  },
  {
    id: 6,
    selected: false,
    status: '開示済',
    saitoFlag: false,
    factory: '福岡工場',
    orderNumber: '22-44229',
    productNumber: '22-44229',
    date: 'yyyy/mm/dd 00:00',
    disclosureStatus: '開示済',
    disclosureDate: 'yyyy/mm/dd 00:00',
    customerFactory: '関東工場',
    customerOrderNumber: '34-34453',
    productName: '鋼材',
    material: 'YHW',
    thickness: '9t',
    width: 'x1400',
    length: 'x2800',
    quantity: '4枚',
    unit: '枚',
    weight: 'X.XXXXt',
    heatNumber: '4-69013',
    inspector: '鈴木',
  },
];

export function DataTable() {
  return (
    <TableContainer component={Paper} sx={{ m: 2, mt: 1, overflowX: 'auto' }}>
      <Table stickyHeader size="small" sx={{ minWidth: 2000 }}>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>開示</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>ステータス</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>斉藤フラグ</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>納入工場</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>受注番号</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>製品番号</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>登録日時</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>開示ステータス</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>開示日時</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>得意先工場</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>得意先注文番号</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>品名</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>材質</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>板厚</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>幅</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>長さ</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>数量</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>単位</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>質量</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>ヒート番号</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>検査員</TableCell>
            <TableCell sx={{ whiteSpace: 'nowrap' }}>アクション</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockData.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell padding="checkbox">
                <Checkbox checked={row.selected} />
              </TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>
                <IconButton size="small" color="primary">
                  <GetApp fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.status}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.saitoFlag ? '有' : '無'}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.factory}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.orderNumber}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.productNumber}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.date}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.disclosureStatus}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.disclosureDate || '-'}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.customerFactory}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.customerOrderNumber}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.productName}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.material}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.thickness}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.width}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.length}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.quantity}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.unit}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.weight}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.heatNumber}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>{row.inspector}</TableCell>
              <TableCell sx={{ whiteSpace: 'nowrap' }}>
                <IconButton size="small" color="primary">
                  <GetApp fontSize="small" />
                </IconButton>
                <IconButton size="small" color="primary">
                  <OpenInNew fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}