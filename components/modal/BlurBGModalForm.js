<Transition show={isOpen} as={Fragment}>
  <Dialog
    as="div"
    className="fixed inset-0 z-10 overflow-y-auto transition-all backdrop-blur-sm ease-out duration-300"
    onClose={() => setIsOpen(false)}
  >
    <div className="min-h-screen px-4 text-center">
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0" />
      </Transition.Child>

      {/* This element is to trick the browser into centering the modal contents. */}
      <span className="inline-block h-screen align-middle" aria-hidden="true">
        &#8203;
      </span>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-[0_35px_60px_-5px_rgba(0,0,0,0.7)] rounded-2xl">
          <Dialog.Title
            as="h3"
            className="text-2xl font-bold leading-6 text-gray-900 mb-3"
          >
            Rendelje meg
          </Dialog.Title>
          <form
            className="grid gap-y-6"
            /* onSubmit={handleSubmit} */
          >
            <div>
              <label htmlFor="full-name" className="sr-only">
                Teljes név
              </label>
              <input
                /* onChange={handleChange} */
                /* value={name} */
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border-gray-300 rounded-md"
                placeholder="Teljes név"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                /* onChange={handleChange} */
                /* value={email} */
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border-gray-300 rounded-md"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Telefon
              </label>
              <input
                /* onChange={handleChange} */
                /* value={phone} */
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border-gray-300 rounded-md"
                placeholder="Telefon +36701234567"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Tárgy
              </label>
              <input
                /* onChange={handleChange} */
                value={product.name}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border-gray-300 rounded-md"
                placeholder="Tárgy"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Üzenet
              </label>
              <textarea
                /* onChange={handleChange} */
                /* value={message} */
                id="message"
                name="message"
                rows={4}
                className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border border-gray-300 rounded-md"
                placeholder="Üzenet"
                defaultValue={""}
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-3 w-full border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-epgreen hover:border-epgray focus:outline-none"
              >
                Küldés
              </button>
            </div>
          </form>
        </div>
      </Transition.Child>
    </div>
  </Dialog>
</Transition>;
