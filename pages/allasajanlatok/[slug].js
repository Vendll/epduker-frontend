import Image from "next/image";
import BlogBody from "../../components/blog/BlogDetailBody";
import Layout from "../../components/Layout";
import { Directus } from "@directus/sdk";

const post = {
  title: "Raktáros, targoncavezető, áruátvevő",
  href: "#",
  category: { name: "Article", href: "#" },
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum. Programvezérelt automata kádban egyenletes kezelést kap a faanyag Nagy méretek is kezelhetőek – belső kád mérete: 8,5 m hosszú Legkedvezőbb ár/érték megoldás! Kül- és beltéri, gomba- és rovarkárosítás elleni faanyagvédőszert alkalmazunk A részletekről érdeklődjön kereskedésünkben! Az ÉPDUKER Kereskedés Dunaújváros vonzáskörzetében a legnagyobb választékban árusítja a tetőépítéshez szükséges termékeket. Nálunk egy helyen beszerezhet mindent, ami a tetőépítéshez, cseréhez vagy felújításhoz szükséges. Fenyő fűrészáru telepünk bővítésével a darabolás, impregnáló áztatás és gyalulás révén kivitelezésre kész árukészlettel szolgálunk, így teljessé válik az ÉPDUKER-tetőcentrum termék- és szolgáltatási köre. ÉPDUKER Építőanyag Kereskedés az Ön szolgálatában. Címünk: 2400 Dunaújváros, Budai Nagy Antal út 1. Telefon: +36 25 434 233 email: ertekesites@epduker.hu https://epduker.hu/",
  date: "Mar 16, 2020",
  datetime: "Dunaújváros",
  imageUrl: "/forklift.png",
  readingTime: "6 min",
  author: {
    name: "Roel Aufderehar",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
};

const PostPage = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="bg-gray-50">
        <div aria-hidden="true" className="relative h-96">
          <Image
            src={post.imageUrl}
            alt=""
            layout="fill"
            objectFit="contain"
            className="w-full h-96 object-center object-cover"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-white" /> */}
        </div>
        <BlogBody item={post} />

        {/* <dl className="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
            <dt className="font-medium text-gray-900">{feature.name}</dt>
            <dd className="mt-2 text-sm text-gray-500">
            {feature.description}
            </dd>
            </div>
            ))}
          </dl> */}
      </div>
    </Layout>
  );
};

export default PostPage;

/* export async function getStaticProps({ params }) {
  const post = await getBlogPost(params.slug);
  return { props: { post } };
}

export async function getStaticPaths() {
  const posts = await getBlogPosts();
  return {
    paths: posts.data.map((_post) => {
      return {
        params: { slug: _post.attributes.slug },
      };
    }),
    fallback: true,
  };
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

export async function getStaticPaths() {
  const directus = new Directus("https://epduker.headwaymakers.hu");
  const subCategoryData = await directus.items("Subcategory").readByQuery({
    fields: ["id", "title", "slug", "category.*"],
  });
  const subcategories = subCategoryData.data;
  /*   console.log("================slug================");
  console.log(subcategories[0].category.slug);
  console.log("====================================");
 */
  return {
    paths: subcategories.map((subcategory) => {
      return {
        params: {
          kategoria: subcategory.category.slug,
          alkategoria: subcategory.slug,
          slug: subcategory.slug,
        },
      };
    }),
    fallback: false,
  };
}
