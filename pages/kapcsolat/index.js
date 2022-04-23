/* import Head from "next/head";
import { useRouter } from "next/router";
import { getPage } from "../../utils/api";
import SeoHead from "../../components/seo/SeoHead";
 */
import Image from "next/image";
import ContactForm from "../../components/contact/ContactForm";
import ContactBody from "../../components/contact/ContactBody";
import ContactMap from "../../components/contact/ContactMap";

const ContactsUsPage = ({ page }) => {
  /* const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  } */
  return (
    <>
      {/* <SeoHead seo={page.attributes.seo} /> */}
      {/* <div className="h-[36rem] w-1/3 relative ">
        <Image src={contactPic} layout="fill" objectFit="cover" alt="Contact" />
    </div> */}
      <div className="relative bg-white ">
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <ContactBody />
          <ContactForm />
        </div>
        <ContactMap />
      </div>
    </>
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
