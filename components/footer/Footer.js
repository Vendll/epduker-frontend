import LogoPic from "../../public/logo.png";
import LogoPic2 from "../../public/logo-12.png";
import Image from "next/image";

const navigation = {
  company: [
    { name: "Rólunk", href: "#" },
    { name: "Hírek", href: "#" },
    { name: "Állásajánlatok", href: "#" },
  ],
  legal: [
    { name: "ÁSZF", href: "#" },
    { name: "GDPR", href: "#" },
  ],
};
const Footer = () => {
  return (
    <div>
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className=" mx-auto py-12 px-6 sm:px-6 lg:py-16 lg:px-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1 ">
              <div className="relative  h-16">
                <Image
                  className="h-10"
                  src={LogoPic}
                  layout="fill"
                  objectFit="contain"
                  alt="Company name"
                />
              </div>
              <div className="relative  h-7">
                <Image
                  className="h-10"
                  src={LogoPic2}
                  layout="fill"
                  objectFit="contain"
                  alt="Company name"
                />
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Cégünk
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Információk
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
