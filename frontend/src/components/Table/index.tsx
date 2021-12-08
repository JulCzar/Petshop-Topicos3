import { Box, Flex, Table as CTable } from '@chakra-ui/react';
import { Body, Header } from './components';
import { BodyProps } from './components/Body';
import { HeaderItem } from './components/Header';

interface TableProps {
  header: HeaderItem[];
  body: BodyProps;
  footer?: any;
}

const Table: React.FC<TableProps> = ({ header, body, footer }) => (
  <Box overflowX='auto'>
    <CTable className='w-full'>
      <Header data={header} />
      <Body {...body} />
    </CTable>
    <Flex w='full'>{footer}</Flex>
  </Box>
);

export default Table;
