import Link from "next/link";
import Layout from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div
        className="h-notfound min-h-[20rem] bg-cover bg-top sm:bg-top flex items-center"
        style={{
          backgroundImage: 'url("/DJI_0139.jpeg")',
        }}
      >
        <div className="max-w-fit bg-white/50 rounded-md mx-auto px-12 py-16 text-center">
          <p className="text-sm font-semibold text-black uppercase tracking-wide">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-bobred tracking-tight sm:text-5xl">
            A keresett oldal nem található.
          </h1>
          <p className="mt-2 text-lg font-medium text-black">
            It looks like the page you are looking for does not exist.
          </p>
          <div className="mt-6">
            <Link href="/">
              <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white/90 bg-epgreen xl:bg-epgreen/70 hover:bg-epgreen">
                Go back home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
