'use client';

import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Card, CardHeader, CardBody, Text } from '@chakra-ui/react';

// the custom node for React Flow
const CustomFlowNode = ({ data }) => {
  return (
    <>
      <Card 
        align='center' 
        border='1px solid gray' 
        borderRadius='4px'
        bg='#000'
        color='#fff'
        p='10px 0'
        width='150px'
      >
        <CardHeader mb='10px'>
          <Text fontSize='16px'>{data.name}</Text>
        </CardHeader>
        <CardBody>
          <Text fontSize='12px'>Height - {data.height}</Text>
          <Text fontSize='12px'>Mass - {data.mass}</Text>
        </CardBody>
        {/* to output edges from this node */}
        <Handle type='sourse' position={Position.Bottom} />
      </Card>
    </>
  );
}

// memo to reduce rerenders
export default memo(CustomFlowNode);