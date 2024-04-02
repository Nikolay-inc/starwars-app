'use client';

import { pageHandler } from '../../helpers/pageHandler';
import { ChakraProvider, Button, Flex } from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

// to paginate heroes list
const Pagination = ({ previousPage, nextPage }) => {
  // get number for next and prev pages
  const prevPageNumber = pageHandler(previousPage);
  const nextPageNumber = pageHandler(nextPage);

  return (
    <ChakraProvider>
      <Flex mt='30px' align='center' justify='flex-end' gap='30px'>
        {/* using chakra Link instead of the Next.js ones */}
        <Link href={`/?page=${prevPageNumber}`}>
          <Button 
            size='sm' 
            fontWeight='lite' 
            colorScheme='gray'
            isDisabled={!previousPage}
          >
            Previous Page
          </Button>
        </Link>
        <Link href={`/?page=${nextPageNumber}`}>
          <Button 
            size='sm' 
            fontWeight='lite' 
            colorScheme='gray'
            isDisabled={!nextPage}
          >
            Next Page
          </Button>
        </Link>
      </Flex>
    </ChakraProvider>
  );
}
  
export default Pagination;