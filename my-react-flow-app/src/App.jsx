import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1',sourcePosition: 'right', position: { x: 20, y: 200 }, data: { label: 'Start' } },
  { id: '2',sourcePosition: 'right',targetPosition: 'left', position: { x: 300, y: 200 }, data: { label: 'get_pdf' } },
  { id: '3',sourcePosition: 'right',targetPosition: 'left', position: { x: 550, y: 200 }, data: { label: 'page-37' } },
  { id: '4',sourcePosition: 'right',targetPosition: 'left', position: { x: 800, y: 200 }, data: { label: 'image_processing-37' } },  
  { id: '5',sourcePosition: 'right',targetPosition: 'left', position: { x: 1050, y: 50 }, data: { label: 'paragraph_identification-37' } },  
  { id: '6',sourcePosition: 'right',targetPosition: 'left', position: { x: 1050, y: 190 }, data: { label: 'header_identification-37' } },  
  { id: '7',sourcePosition: 'right',targetPosition: 'left', position: { x: 1050, y: 350 }, data: { label: 'table_identification-37' } }, 
  { id: '8',sourcePosition: 'right',targetPosition: 'left', position: { x: 1300, y: 50 }, data: { label: 'paragraph_extraction-37' } },  
  { id: '9',sourcePosition: 'right',targetPosition: 'left', position: { x: 1300, y: 197 }, data: { label: 'header_extraction-37' } },  
  { id: '10',sourcePosition: 'right',targetPosition: 'left', position: { x: 1300 , y: 350 }, data: { label: 'table_extraction-37' } },  
  { id: '11',sourcePosition: 'right',targetPosition: 'left', position: { x: 1550 , y: 197 }, data: { label: 'combine-37' } },  
  { id: '12',sourcePosition: 'right',targetPosition: 'left', position: { x: 1800 , y: 197 }, data: { label: 'total_page_combine' } },  
];
const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left', // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left', // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left', // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left', // Specify the target position to 'left'
    type: 'smoothstep',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  }, 
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',
    type: 'smoothstep',
    animated: true, // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e4-7',
    source: '4',
    target: '7',
    sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',
    type: 'smoothstep',
    animated: true, // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e5-8',
    source: '5',
    target: '8',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left', // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e6-9',
    source: '6',
    target: '9',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left', // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  }, 
  {
    id: 'e7-10',
    source: '7',
    target: '10',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left', // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e8-11',
    source: '8',
    target: '11',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',
    type: 'smoothstep',
    animated: true, // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  }, 
  {
    id: 'e9-11',
    source: '9',
    target: '11',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',
    type: 'smoothstep',
    animated: true, // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {

    id: 'e10-11',
    source: '10',
    target: '11',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',
    type: 'smoothstep',
    animated: true, // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    
    id: 'e11-12',
    source: '11',
    target: '12',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',// Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
