"use client";

import { useEffect, useState } from "react";

import { ROUTES } from "@shared/constants/routes";

import { Hero } from "@sections/insights/hero/hero";
import { Releases } from "@sections/insights/releases/releases";

import Layout from "@shared/components/layout/layout";
import { fetchBlog } from "../api/contentful/api";
import { Metadata } from "next/types";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await import("@shared/texts/seo/index.json");

  return {
    title: seo.insights.title,
    description: seo.insights.description,
    alternates: {
      canonical: `https://softdoes.com${ROUTES.insights}`,
    },
  };
}

export default function Insights() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetchBlog().then(setPosts);
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <Layout>
      <Hero />
      <Releases posts={posts} />
    </Layout>
  );
}
