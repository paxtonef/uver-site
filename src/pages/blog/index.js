import Layout from "@/components/Layout";
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function BlogIndex() {
  const grouped = articles.reduce((acc, article, index) => {
    if (!acc[article.theme]) acc[article.theme] = [];
    acc[article.theme].push({ ...article, index });
    return acc;
  }, {});

  return (
    <Layout>
      <h1>Blog UVER – Déchets verts & économie circulaire</h1>
      <p style={{ color: "#555", fontSize: "0.9rem" }}>
        {articles.length} articles publiés, regroupés par thèmes
      </p>

      {Object.entries(grouped).map(([theme, list]) => (
        <section key={theme} style={{ marginBottom: "2rem" }}>
          <h2>{theme}</h2>
          <ul style={{ lineHeight: "2" }}>
            {list.map((article) => (
              <li key={article.slug}>
                <Link href={`/blog/${article.slug}`}>
                  {article.index + 1}. {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </Layout>
  );
}
