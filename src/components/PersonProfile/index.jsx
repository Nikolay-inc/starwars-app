'use client';

import { useState, useEffect, useCallback, useMemo } from "react";
import axios from 'axios';
import { baseStarshipUrl } from '../../const/index';
import { urlParser } from '../../helpers/urlParser';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomFlowNode from '../CustomFlowNode';

// provides custom nodes in graph
const nodeTypes = {
  custom: CustomFlowNode,
};

const PersonProfile = ({ person, films }) => {
  const [starships, setStarships] = useState([]);
  // default node size with margin
  const stepSize = 172;

  useEffect(() => {
    if (!person.starships.length) return;

    // recursively fetching only necessary starships
    const fetchStarships = async (ids) => {
      try {
        let results = [];
        for (const id of ids) {
          const response = await axios.get(`${baseStarshipUrl}/${id}/`);
          results = [...results, response.data];
        }
        // set an array of all fetched starships
        setStarships(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchStarships(person.starships);
  }, []);

  // as a result we have an object with nodes and edges
  // useMemo to reduce recalculations
  const graphData = useMemo(() => {
    if (!person || !films?.length) return;

    const allNodes = [];
    const allAdges = [];

    // static definition of main person node
    const personNode = { 
      id: '1',
      type: 'custom',
      position: { x: 100, y: 100 },
      isLocked: true,
      data: { 
        name: person?.name,
        height: person?.height,
        mass: person?.mass,

      },
    };
    allNodes.push(personNode);

    // get only films with particular person
    const filmsWithPerson = films.filter(film => person.films.includes(+urlParser(film?.url)));

    // go throw the films array, build nodes and push it to arrays
    filmsWithPerson.forEach((film, index) => {
      allNodes.push({
        id: `film-${film.title}`,
        position: { x: stepSize * index + 100, y: 250 },
        data: { label: film?.title },
        isLocked: true,
      });

      allAdges.push({
        id: `edge-${personNode.id}-${film.title}`,
        source: personNode.id, 
        target: `film-${film.title}`,
        isLocked: true,
      })
    });

    // iterate in films array, find a film with person and the result
    filmsWithPerson.forEach(film => {
      // for positioning
      let count = 0;

      // iterate throw starships array and find it
      film.starships.forEach(starshipId => {
        const starship = starships.find(s => s.url === `${baseStarshipUrl}/${starshipId}/`);
        if (starship) {
          count++;
          allNodes.push({
            id: `starship-${starship.name}`,
            position: { x: stepSize * (count - 1) + 100, y: 400 },
            data: { label: starship.name }
          });

          allAdges.push({ 
            id: `edge-${film.title}-${starship.name}`, 
            source: `film-${film.title}`, 
            target: `starship-${starship.name}` 
          });
        }
      });
    });

    return { nodes: allNodes, edges: allAdges };
  }, [person, films, starships]);

  // internal React Flow hooks
  const [nodes, setNodes, onNodesChange] = useNodesState(graphData?.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(graphData?.edges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  // to set new nodes on update
  useEffect(() => {
    setNodes(graphData?.nodes);
    setEdges(graphData?.edges);
  }, [graphData?.nodes?.length, graphData?.edges?.length]);

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 120px)' }}>
      {nodes && edges && 
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        edgesUpdatable={false}
      >
        {/* provides controls and minimap */}
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={10} size={0.8} />
      </ReactFlow>}
    </div>
  );
}
  
export default PersonProfile;