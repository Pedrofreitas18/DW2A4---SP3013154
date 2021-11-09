import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>Não foi possível achar esta página</h2>
      <p>Voltar para a <Link href="/"><a>Homepage</a></Link></p>
    </div>
  );
}
 
export default NotFound;