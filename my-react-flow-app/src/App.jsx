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
  { id: '1',sourcePosition: 'right', position: { x: 50, y: 100 }, data: { label: 'Start' } },
  { id: '2',sourcePosition: 'right',targetPosition: 'left', position: { x: 300, y: 100 }, data: { label: 'get_pdf' } },
  { id: '3',sourcePosition: 'right',targetPosition: 'left', position: { x: 550, y: 100 }, data: { label: 'page-37' } },
  { id: '4',sourcePosition: 'right',targetPosition: 'left', position: { x: 800, y: 100 }, data: { label: 'image_processing-37' } },  

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
