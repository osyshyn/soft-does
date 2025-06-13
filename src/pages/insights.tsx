import { useEffect, useState } from "react";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/insights/hero/hero";
import { Topics } from "@sections/insights/topics/topics";
import { Releases } from "@sections/insights/releases/releases";

import Layout from "@shared/components/layout/layout";

export default function Insights() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Failed to fetch posts: ", err));
  }, []);

  return (
    <>
      <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.insights} />
      <Layout>
        <Hero />
        <Topics posts={posts.slice(0, 3)} />
        <Releases posts={posts.slice(3, 9)} />
      </Layout>
    </>
  );
}
