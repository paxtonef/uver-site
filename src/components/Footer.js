import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem",
        background: "#f5f5f5",
        borderTop: "1px solid #ddd",
        marginTop: "2rem",
      }}
    >
      <p>© {new Date().getFullYear()} UVER – Collecte de déchets verts</p>
      <nav style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
        <Link href="/mentions-legales">Mentions légales</Link>
        <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
        <Link href="/conditions-generales-utilisation">Conditions générales d’utilisation</Link>
      </nav>
    </footer>
  );
}
