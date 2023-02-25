import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  telegram: 'https://forum.moralis.io/'
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      
      <Text>
        Stay up to date via our Telegram{' '}
        <Link href={links.telegram} isExternal alignItems={'center'}>
          <ExternalLinkIcon />
        </Link>
      </Text>
      
    </Box>
  );
};

export default Footer;
