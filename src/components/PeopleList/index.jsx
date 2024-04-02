// to have a chance to use Chakra UI
'use client';

import ListItem from '../ListItem';
import { ChakraProvider, Accordion } from '@chakra-ui/react';

const PeopleList = ({ data }) => {
  return (
    <div>
      <ChakraProvider>
        {/* map people to make a list items */}
        {data.map((person) => (
          <Accordion allowMultiple key={person.name}>
            <ListItem person={person} />
          </Accordion>
        ))}
      </ChakraProvider>
    </div>
  );
  }
  
  export default PeopleList;