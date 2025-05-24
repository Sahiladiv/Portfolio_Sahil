import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-8 text-center">
        {/* Heading styled with Tailwind classes */}
        <h2 className="my-10 text-4xl font-serif text-black text-center mb-8">Contact Information</h2>
        

        {/* Contact Details */}
        <p className="text-lg md:text-xl mb-2">
          📞 Phone: (582) 203-8467
        </p>
        <p className="text-lg md:text-xl">
          📧 Email: sahiladivarekar99@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Contact;
