import React from "react";
import { useState } from "react";
import { Directus } from "@directus/sdk";
import ReCAPTCHA from "react-google-recaptcha";
const ProductPageForm = ({ product }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const recaptchaRef = React.createRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Execute the reCAPTCHA when the form is submitted
    recaptchaRef.current.execute();
  };
  async function onReCAPTCHAChange(captchaCode) {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    // Else reCAPTCHA was executed successfully so proceed with the
    // alert
    try {
      const directus = new Directus("https://epduker.headwaymakers.hu");
      const responses = directus.items("customer_response");
      await responses.createOne({
        name: name,
        email: email,
        phone: phone,
        message: message,
        product: product.id,
      });
      alert("Sikeres küldés! Kollégák hamarosan felveszi Önnel a kapcsolatot!");
      recaptchaRef.current.reset();
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.log(error);
      recaptchaRef.current.reset();
    }
  }

  return (
    <form
      className="rounded-md shadow-[0_5px_60px_-5px_rgba(0,0,0,0.3)] p-6"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-y-6">
        <h2 className="text-xl text-center font-bold">Megrendelés</h2>
        <div>
          <label htmlFor="full-name" className="sr-only">
            Teljes név
          </label>
          <input
            onChange={handleChange}
            value={name}
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
            onChange={handleChange}
            value={email}
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
            onChange={handleChange}
            value={phone}
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
            onChange={handleChange}
            value={message}
            id="message"
            name="message"
            required
            rows={4}
            className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-epgreen focus:border-epgreen border border-gray-300 rounded-md"
            placeholder="Üzenet"
            defaultValue={""}
          />
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible"
          onChange={onReCAPTCHAChange}
        />
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
