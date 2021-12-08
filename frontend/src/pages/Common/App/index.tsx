import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import CatImage from 'src/assets/pussy.png';

const App = () => {
  return (
    <Box>
      <Flex justify='center'>
        <Flex align='center'>
          <Box maxW='500px'>
            <Heading size='2xl'>Cuide de seus bichinhos</Heading>
            <Text>
              Traga seu pet para um tratamento completo: banho, tosa e diversão
              no parquinho de exercícios
            </Text>
          </Box>
          <Image src={CatImage} maxWidth='25%' />
        </Flex>
      </Flex>
      <Flex justify='center'>
        <Flex align='center'>
          <Box maxW='1000px'>
            <Heading size='2xl'>Como Podemos te ajudar?</Heading>
            <Text>
              Enquanto trabalha seu pet pode se estressar e por isso é
              importante deixá-lo em ambiente adequado e com profissionais
              prontos para fazer um chamego no seu membro da família com focinho
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex justify='center' mt='50px'>
        <Flex align='center'>
          <Box maxW='800px'>
            <Heading size='2xl'>Adestramos seu cachorro</Heading>
            <Text>
              O Serviço de adestramento prestado por nosso estabelecimento
              garante que seu amigo será capaz das peripécias mais divertidas e
              será capaz de chamar atenção por onde passar
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default App;
