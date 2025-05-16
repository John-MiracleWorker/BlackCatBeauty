import React from "react";

const PriceMenu: React.FC = () => {
  const hairServices = [
    { name: "Haircut", price: "35" },
    { name: "Hair Color (Single Process)", price: "60" },
    { name: "Hair Color (Double Process)", price: "120" },
    { name: "Partial Highlight", price: "65" },
    { name: "Full Highlight", price: "120" },
    { name: "Halo", price: "38" },
  ];

  const hairRemovalFacial = [
    { name: "Eyebrows", price: "15" },
    { name: "Chin and Lip", price: "20" },
    { name: "Sideburns", price: "18" },
    { name: "3-in-1 Package (Eyebrows, Chin & Lip, Sideburns)", price: "43" },
    { name: "Chair Spa Facial (Dermalogica Products)", price: "70" },
  ];

  const nailServices = [
    { name: "Gel-X Nails", price: "55" },
    { name: "Freestyle Gel-X Set (every nail has a design)", price: "75" },
    { name: "Gel Manicure", price: "45" },
    { name: "Freestyle Gel Set", price: "55" },
    { name: "Gel Pedicure", price: "50" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 text-brand-light-text">
      <h2 className="page-title">Our Price Menu</h2>
      <p className="text-center text-lg mb-6 md:mb-8 max-w-2xl mx-auto italic">
        Discover transparent pricing for our range of expert services. All treatments are performed by Master Cosmetologist, Christina Coleman, using premium products to ensure the highest quality and care.
      </p>
      <p className="text-center text-md font-semibold text-brand-red mb-10 md:mb-12 max-w-3xl mx-auto">
        IMPORTANT: All prices are STARTING AT the listed rate. Rates may increase depending on the amount of product needed and/or time taken for your specific service.
      </p>
      
      <div className="content-container grid md:grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
        {/* Hair Services */}
        <div>
          <h3 className="text-3xl font-serif-display mb-6 text-brand-peach text-center md:text-left">Hair Services</h3>
          <ul className="space-y-3 bg-brand-dark-green/50 p-6 rounded-lg shadow-xl border border-brand-peach/30">
            {hairServices.map(service => (
              <li key={service.name} className="price-item">
                <span className="text-md">{service.name}</span> 
                <span className="price-value">${service.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hair Removal & Facial */}
        <div>
          <h3 className="text-3xl font-serif-display mb-6 text-brand-peach text-center md:text-left">Hair Removal & Facial</h3>
          <ul className="space-y-3 bg-brand-dark-green/50 p-6 rounded-lg shadow-xl border border-brand-peach/30">
            {hairRemovalFacial.map(service => (
              <li key={service.name} className="price-item">
                <span className="text-md">{service.name}</span> 
                <span className="price-value">${service.price}</span>
              </li>
            ))}
             <li className="pt-3 text-sm text-brand-peach/80 italic">Brow tinting ($40) coming soon!</li>
          </ul>
        </div>

        {/* Nail Services */}
        <div>
          <h3 className="text-3xl font-serif-display mb-6 text-brand-peach text-center md:text-left">Nail Services</h3>
          <ul className="space-y-3 bg-brand-dark-green/50 p-6 rounded-lg shadow-xl border border-brand-peach/30">
            {nailServices.map(service => (
              <li key={service.name} className="price-item">
                <span className="text-md">{service.name}</span> 
                <span className="price-value">${service.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-12 text-center text-sm text-brand-peach/80 max-w-3xl mx-auto">
        <em>For a precise quote, especially for complex color services or unique requests, please schedule a complimentary consultation. Package deals and seasonal promotions may be available.</em>
      </p>
    </div>
  );
}

export default PriceMenu;
