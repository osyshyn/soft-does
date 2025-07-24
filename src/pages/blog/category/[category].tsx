import {ROUTES} from "@constants/routes";
import { SEO } from "@shared/ui/seo";
import Layout from "@shared/components/layout/layout";
import { useRouter } from "next/router";
import { CategoryHero } from "@sections/blog/category/hero/hero";
import { CategoryPosts } from "@sections/blog/category/posts/posts";


export default function Category() {
    const router = useRouter();
    if (!router.isReady) return null;
    return (
        <>
            <SEO title="SOFT DOES" description="SOFT DOES is company, that will help your bussines grow!" pathname={ROUTES.category} />
            <Layout>
                <CategoryHero />
                <CategoryPosts />
            </Layout>
        </>
    );
}
