import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Gourmetzão</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/sobre"><a>Sobre</a></Link>
      <Link href="/cardapio/"><a>Cardápio</a></Link>
    </nav>
);
}
 
export default Navbar;