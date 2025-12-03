import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>¡Bienvenido!</h1>
      <nav style={{ marginBottom: '2rem' }}>
        <Link href="/about">
          <a style={{ marginRight: '1rem', color: 'blue', textDecoration: 'underline' }}>Ir a Acerca de</a>
        </Link>
      </nav>
      <p>Página de inicio de mi proyecto en Next.js.</p>
    </main>
  );
}
