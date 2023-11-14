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
  { id: '2',sourcePosition: 'right',targetPosition: 'left', position: { x: 20, y: 400 }, data: { label: 'api_forex_exchange.json' },style: { background: '#ff00ff' }},
  { id: '3',sourcePosition: 'right',targetPosition: 'left', position: { x: 300, y: 300 }, data: { label: 'is_forex_rates_available' } },
  { id: '4',sourcePosition: 'right',targetPosition: 'left', position: { x: 300, y: 200 }, data: { label: 'forex_currencies.csv' },style: { background: '#ff00ff' }},  
  { id: '5',sourcePosition: 'right',targetPosition: 'left', position: { x: 600, y: 200 }, data: { label: 'is_forex_currencies_file_available' } },  
  { id: '6',sourcePosition: 'right',targetPosition: 'left', position: { x: 600, y: 400 }, data: { label: 'forex_rates.json' },style: { background: '#ff00ff' } },  
  { id: '7',sourcePosition: 'right',targetPosition: 'left', position: { x: 900, y: 300 }, data: { label: 'downloading_rates' } }, 
  { id: '8',sourcePosition: 'right',targetPosition: 'left', position: { x: 1200, y: 300 }, data: { label: 'saving_rates' } },  
  { id: '9',sourcePosition: 'right',targetPosition: 'left', position: { x: 1500, y: 300 }, data: { label: 'creating_forex_rates_table' } },  
  { id: '10',sourcePosition: 'right',targetPosition: 'left', position: { x: 1800 , y: 300 }, data: { label: 'forex_rates' },style: { background: '#ff00ff' } },  
  { id: '11',sourcePosition: 'right',targetPosition: 'left', position: { x: 2100 , y: 300 }, data: { label: 'forex_processing' } },  
  { id: '12',sourcePosition: 'right',targetPosition: 'left', position: { x: 2400 , y: 300 }, data: { label: 'send_email_notification' } },
  { id: '13',sourcePosition: 'right',targetPosition: 'left', position: { x: 2700 , y: 400 }, data: { label: 'send_slack_notification' } },  
  { id: '14',sourcePosition: 'right',targetPosition: 'left', position: { x: 2700 , y: 200 }, data: { label: 'EmailTemplate' },style: { background: '#ff00ff' }  },
  { id: '15',sourcePosition: 'right',targetPosition: 'left', position: { x: 3000 , y: 400 }, data: { label: 'SlackTemplate' },style: { background: '#ff00ff' }  },
  { id: '16',sourcePosition: 'right',targetPosition: 'left', position: { x: 3300 , y: 400 }, data: { label: 'End' } },
];
const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '3',
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
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e3-4',
    source: '4',
    target: '5',
    sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left', // Specify the target position to 'left'
    type: 'smoothstep',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e4-5',
    source: '3',
    target: '5',
    sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left', // Specify the target position to 'left'
    // type: 'smoothstep',
    // animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  }, 
  {
    id: 'e4-6',
    source: '3',
    target: '6',
    sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',
    // type: 'smoothstep',
    // animated: true, // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e4-7',
    source: '6',
    target: '7',
    sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',
    // type: 'smoothstep',
    animated: true, // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e5-8',
    source: '5',
    target: '7',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left', // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e6-9',
    source: '7',
    target: '8',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left', // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  }, 
  {
    id: 'e7-10',
    source: '8',
    target: '9',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left', // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    id: 'e8-11',
    source: '9',
    target: '10',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',
    type: 'smoothstep',
    // animated: true, // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  }, 
  {
    id: 'e9-11',
    source: '10',
    target: '11',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',
    // type: 'smoothstep',
    animated: true, // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {

    id: 'e10-11',
    source: '11',
    target: '12',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',
    // type: 'smoothstep',
    // animated: true, // Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    
    id: 'e11-12',
    source: '12',
    target: '13',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',// Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    
    id: 'e11-12',
    source: '12',
    target: '14',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',// Specify the target position to 'left'
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    
    id: 'e11-12',
    source: '13',
    target: '15',
        sourcePosition: 'right', // Specify the source position to 'right'
    targetPosition: 'left',// Specify the target position to 'left'
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#000000' },

  },
  {
    
    id: 'e11-12',
    source: '15',
    target: '16',
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
