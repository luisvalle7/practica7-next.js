export default function SSGExample({ date }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Ejemplo SSG</h2>
      <p>Fecha de compilación: {date}</p>
    </div>
  );
}

export async function getStaticProps() {
  // Se ejecuta en tiempo de compilación
  return {
    props: { date: new Date().toString() }
  };
}
