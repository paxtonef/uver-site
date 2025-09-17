import Layout from "@/components/Layout";
import { articles } from "@/lib/articles";
import Link from "next/link";

export default function ArticlePage({ article }) {
  if (!article) {
    return (
      <Layout>
        <h1>Article non trouvé</h1>
        <p>
          Revenez à la <Link href="/blog">liste du blog</Link>.
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>{article.title}</h1>
      <p>(Contenu à venir...)</p>
      <Link href="/blog" style={{ color: "green" }}>
        ← Retour au blog
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = articles.map((a) => ({
    params: { slug: a.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = articles.find((a) => a.slug === params.slug) || null;
  return { props: { article } };
}
