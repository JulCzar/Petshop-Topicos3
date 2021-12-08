import { Box, Flex, Tbody, Td, Tr } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

export interface BodyItem<T> {
  item: T;
}

export interface BodyProps {
  data: BodyItem<string>[][];
  onRowClick?: (row: BodyItem<string>[]) => void;
  renderItem?: (
    data: BodyItem<string>,
    pos: number,
    def?: JSX.Element
  ) => ReactElement<BodyItem<string>>;
}

const Body: React.FC<BodyProps> = ({ data, renderItem, onRowClick }) => {
  const bodyID = React.useMemo(() => Math.round(Math.random() * 100_000), []);

  return (
    <Tbody className='bg-white'>
      {data.map((row, i) => (
        <Tr
          onClick={() => {
            if (onRowClick) onRowClick(row);
          }}
          key={`tablebody-${bodyID}-row-${i}-item`}
          color='gray.700'>
          {row.map((body, pos) => {
            const defaultItem = (
              <Flex align='center' fontSize='sm'>
                {body.item}
              </Flex>
            );

            return (
              <Td key={`t-${bodyID}-row-item-${pos}`} px='4' py='3'>
                {!renderItem ? defaultItem : renderItem(body, pos, defaultItem)}
              </Td>
            );
          })}
        </Tr>
      ))}
    </Tbody>
  );
};

export default Body;
