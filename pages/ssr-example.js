export default function SSRExample({ time }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Ejemplo SSR</h2>
      <p>Hora del servidor: {time}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // Esta función se ejecuta en cada solicitud
  return {
    props: { time: new Date().toString() }
  };
}
