import Layout from "@shared/components/layout/layout";
import { CategoryHero } from "@sections/blog/category/hero/hero";
import { CategoryPosts } from "@sections/blog/category/posts/posts";

export default function Category() {
  return (
    <>
      <Layout>
        <CategoryHero />
        <CategoryPosts />
      </Layout>
    </>
  );
}
