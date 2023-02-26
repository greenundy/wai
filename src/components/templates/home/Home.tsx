import { VStack, Text } from '@chakra-ui/react';
import { Image, Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <VStack w={'full'}>

      <Box boxSize='sm'>
        <Image src='/waillet_main.png' alt='wAIllet' loading="lazy" />
      </Box>
      <Text>The AI Scanner Bot will be able to monitor the blockchain in real time in order to identify emerging security threats and any suspicious activity, alerting users quickly to any changes they should be aware of.
        <br /><br />
        Additionally, it will be capable of providing a detailed analysis of the code to ensure that the contract is running optimally and meeting the highest security standards under our smart audit function, that will serve as a quick audit, rather than using third party services, that use conventional manual methods of verifying the contracts, which cost - time wise is no competition for our smart audit feature.
        <br /><br />
        The audit will conclude with a test score out of a 100, that will represent how safe our bot ranks the smart contract scanned. Lastly, it will be able to provide developers with guidance and advice to help them meet the security requirements in their smart contracts.</Text>

    </VStack>
  );
};

export default Home;
