/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "../../components/navbar";
import Codepen from "../../components/codepen";
// import test from "../tailwind_components/buttons/test_file.jsx";
import contactFormsCollection from "../../tailwind_components/contact_forms/collection";

const contactForms = () => {
  return (
    <div>
      <Head>
        <title>Tailwind UI Contact Forms</title>
        <meta name="description" content="TailwindCSS ui component bootstrap" />
        <link rel="icon" href="/favi-tailwind.png" type="image/png" />
      </Head>
      <Navbar />

      <div className="codepen_page font-poppins">
        <p className="codepen_brief">
          As someone in facebook posted &apos;Helps you connect and share with
          people using contact forms&apos;, we are helping you with best
          designed contact forms in tailwindCSS 🍽️
        </p>
        {contactFormsCollection.map((contactForm, index) => {
          return (
            <div key={index} className="codepen_container">
              <h3 className="codepen_name">
                {index + 1}. {contactForm.componentName}
              </h3>
              <Codepen htmlText={contactForm.component} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default contactForms;
