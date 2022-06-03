const ProductPageForm = (props) => {
  return (
    <form className="rounded-md shadow-[0_5px_60px_-5px_rgba(0,0,0,0.3)] p-6">
      <div className="grid gap-y-6">
        <h2 className="text-xl text-center font-bold">Megrendelés</h2>
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
            required
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
            required
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
          <label htmlFor="message" className="sr-only">
            Üzenet
          </label>
          <textarea
            /* onChange={handleChange} */
            /* value={message} */
            id="message"
            name="message"
            required
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
      </div>
    </form>
  );
};

export default ProductPageForm;
