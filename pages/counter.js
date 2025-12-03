import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Contador</h2>
      <p>Cantidad: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}
