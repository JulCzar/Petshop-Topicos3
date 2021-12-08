import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import App from 'src/router';
import { theme } from './styles';

const ROOT = document.getElementById('root');
const APP = (
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

ReactDOM.render(APP, ROOT);
