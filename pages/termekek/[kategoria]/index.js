import { Directus } from "@directus/sdk";

function CategoryPage({ category, subcategories, products }) {
  return (
    <>
      <ul>
        <li>{category.title}</li>
      </ul>
      <h1>Subcategories</h1>
      <ul>
        {subcategories.map((subcategory) => (
          <li>{subcategory.title}</li>
        ))}
      </ul>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps({ params }) {
  const directus = new Directus("https://epduker.headwaymakers.hu");
  /* find category */
  const categoryData = await directus.items("Category").readByQuery({
    filter: {
      slug: params.kategoria,
    },
  });
  const category = categoryData.data[0];
  /* find subcategories */
  const subCategoryData = await directus.items("Subcategory").readByQuery({
    filter: {
      category: category.id,
    },
  });
  const subcategories = subCategoryData.data;
  /* find products */
  var ids = subcategories.map((subcategory) => subcategory.id);
  const productData = await directus.items("product").readByQuery({
    filter: {
      category: {
        _in: ids,
      },
    },
  });
  const products = productData.data;
  return {
    props: {
      category,
      subcategories,
      products,
    },
  };
}

export async function getStaticPaths() {
  const directus = new Directus("https://epduker.headwaymakers.hu");
  const categoryData = await directus.items("Category").readByQuery();
  const categories = categoryData.data;
  return {
    paths: categories.map((category) => {
      return {
        params: { kategoria: category.slug },
      };
    }),
    fallback: false,
  };
}

export default CategoryPage;
