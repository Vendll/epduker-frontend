import Head from "next/head";
import { Directus } from "@directus/sdk";
import Hero from "../components/main/Hero";
import Szolgaltatasok from "../components/main/Szolg";
import ShortAbout from "../components/main/ShortAbout";
import Mission from "../components/main/Mission";
import Blog from "../components/main/Blog";
import BrandsCloud from "../components/main/BrandsCloud";
import Layout from "../components/Layout";

export default function Home({ categories }) {
  return (
    <Layout categories={categories}>
      <Head>
        <title>Epduker</title>
        <meta name="description" content="Generated by Rolcsika" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {/* TODO recreate */}
      <Szolgaltatasok />
      <ShortAbout />
      <Mission />
      <Blog />
      <BrandsCloud />
    </Layout>
  );
}
export async function getStaticProps({ params }) {
  const directus = new Directus("https://epduker.headwaymakers.hu");
  /* find category */
  const categoriesData = await directus.items("Category").readByQuery({
    fields: ["title", "slug", "subcategories.title", "subcategories.slug"],
    limit: -1,
  });
  const categories = categoriesData.data;

  return {
    props: {
      categories,
    },
  };
}
