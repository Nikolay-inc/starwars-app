import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { urlParser } from '../../helpers/urlParser';

// list item for heroes
const ListItem = ({ person }) => {
  return (
    <AccordionItem mt='15px'>
      <h2>
        <AccordionButton>
          <Box as='span' flex='1' textAlign='left'>
            <Link 
              href={`/people/${urlParser(person.url)}`} 
              fontWeight='lite'
              fontSize='20px'
            >
              {person.name}
            </Link>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      <div>
        {/* StackDivider automatically divides boxes */}
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Text pt='2'>
              Height - {person.height}
            </Text>
            <Text pt='2'>
              Mass - {person.mass}
            </Text>
          </Box>
          <Box>
            <Text pt='2'>
              Hair Color - {person.hair_color}
            </Text>
            <Text pt='2'>
              Skin Color - {person.skin_color}
            </Text>
            <Text pt='2'>
              Eye Color - {person.eye_color}
            </Text>
          </Box>
          <Box>
            <Text pt='2'>
              Birth Year - {person.birth_year}
            </Text>
            <Text pt='2'>
              Gender - {person.gender}
            </Text>
          </Box>
        </Stack>
      </div>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default ListItem;