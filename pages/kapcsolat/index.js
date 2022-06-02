/* import Head from "next/head";
import { useRouter } from "next/router";
import { getPage } from "../../utils/api";
import SeoHead from "../../components/seo/SeoHead";
 */
import Image from "next/image";
import ContactForm from "../../components/contact/ContactForm";
import ContactBody from "../../components/contact/ContactBody";
import ContactMap from "../../components/contact/ContactMap";
import Layout from "../../components/Layout";
import { Directus } from "@directus/sdk";

const ContactsUsPage = ({ page, categories }) => {
  /* const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  } */
  return (
    <Layout categories={categories}>
      {/* <SeoHead seo={page.attributes.seo} /> */}
      {/* <div className="h-[36rem] w-1/3 relative ">
        <Image src={contactPic} layout="fill" objectFit="cover" alt="Contact" />
    </div> */}
      <div className="relative bg-white ">
        <div className="relative max-w-7xl mx-auto mt-6 lg:grid lg:grid-cols-5">
          <ContactBody />
          <ContactForm />
        </div>
        <ContactMap />
      </div>
    </Layout>
  );
};

export default ContactsUsPage;

/* export async function getStaticProps({ params }) {
  const raw = await getPage("contact-us");
  const { data } = raw;
  const page = data[0];
  return { props: { page } };
}
 */

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
