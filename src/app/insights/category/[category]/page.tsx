import Layout from "@shared/components/layout/layout";
import { CategoryHero } from "@sections/blog/category/hero/hero";
import { CategoryPosts } from "@sections/blog/category/posts/posts";

export default function Category() {
  return (
    <Layout>
      <CategoryHero />

      <div className="sectionWrapper">
        <div className="wrapper">
          <div className="container">
            <CategoryPosts />
          </div>
        </div>
      </div>
    </Layout>
  );
}
