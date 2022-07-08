import { MailIcon, PhoneIcon } from "@heroicons/react/outline";

const ContactBody = () => {
  return (
    <div className="bg-epgreen rounded-md py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-12 xl:pr-12">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-extrabold tracking-tight text-epdark sm:text-3xl">
          Kérdése van? Lépjen kapcsolatba velünk!
        </h2>

        <dl className="mt-8 text-base text-epgray">
          <div>
            <dt className="sr-only">Cím</dt>
            <dd>
              <p>2400 Dunaújváros,</p>
              <p> Budai Nagy Antal út 1.</p>
            </dd>
          </div>
          <div className="mt-6">
            <dt className="sr-only">Phone number</dt>
            <dd className="flex">
              <PhoneIcon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
              <a href="tel:+3625434233" className="hover:underline">
                <span className="ml-3">+36 25 434 233</span>
              </a>
            </dd>
          </div>
          <div className="mt-3">
            <dt className="sr-only">Email</dt>
            <dd className="flex">
              <MailIcon className="flex-shrink-0 h-6 w-6" aria-hidden="true" />
              <a
                href="mailto:ertekesites@epduker.hu"
                className="hover:underline"
              >
                <span className="ml-3">ertekesites@epduker.hu</span>
              </a>
            </dd>
          </div>
          <div className="mt-8">
            <dt className="sr-only">Social</dt>
            <dd className="grid grid-cols gap-y-2">
              <p className="text-lg font-semibold">Nyitvatartás</p>
              <p>Hétfő-Péntek: 7:00-17:00</p>
              <p>Szombat: 7:00-12:00</p>
              <p>Vasárnap: Zárva</p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
export default ContactBody;
