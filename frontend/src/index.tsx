import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import App from 'src/router';
import { theme } from './styles';
import LayoutProvider from './styles/layout';

const ROOT = document.getElementById('root');
const APP = (
  <ChakraProvider theme={theme}>
    <LayoutProvider>
      <App />
    </LayoutProvider>
  </ChakraProvider>
);

ReactDOM.render(APP, ROOT);
