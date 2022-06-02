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
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
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
            <div className="mt-12 grid sm:grid-cols-2 gap-8 lg:mt-0 lg:col-span-2">
              <div className="col-span-2 md:col-span-1 sm:grid sm:grid-cols-2 md:gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                    Cégünk
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-epgreen"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 sm:mt-0 text-center md:text-left">
                  <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                    Információk
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-epgreen"
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
              &copy; Epduker 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
