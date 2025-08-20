"use client";

import { useEffect, useState } from "react";

import { SEO } from "@shared/ui/seo";
import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/insights/hero/hero";
import { Releases } from "@sections/insights/releases/releases";

import Layout from "@shared/components/layout/layout";
import { fetchBlog } from "../api/contentful/api";

export default function Insights() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetchBlog().then(setPosts);
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <>
      <SEO
        title="SOFT DOES"
        description="SOFT DOES is company, that will help your bussines grow!"
        pathname={ROUTES.insights}
      />
      <Layout>
        <Hero />
        <Releases posts={posts} />
      </Layout>
    </>
  );
}
