import { InputProps as CInputProps } from '@chakra-ui/react';

export interface InputProps extends CInputProps {
  label?: string;
  mask: string;
}
