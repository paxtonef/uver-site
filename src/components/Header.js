import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: "1rem", background: "#3BA55C", color: "white" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/">Accueil</Link>
        <Link href="/services/collecte-dechets-verts-nimes">Services</Link>
        <Link href="/locations/nimes-centre">Localités</Link>
        <Link href="/impact">Impact</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/a-propos">À propos</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
}

