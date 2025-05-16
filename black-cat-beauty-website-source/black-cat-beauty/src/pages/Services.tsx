import React from "react";

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 text-brand-light-text">
      <h2 className="page-title">Our Specialized Services</h2>
      
      <div className="mb-12 md:mb-16 h-64 md:h-96 placeholder-image">
        <p className="text-2xl md:text-3xl font-serif-display italic text-center p-4">
          Transform Your Look with Expert Care<br />
          <span className="text-lg block mt-2">(Placeholder Image Area)</span>
        </p>
      </div>

      <div className="content-container space-y-12 md:space-y-16">
        <section className="md:flex items-center gap-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-3xl font-serif-display mb-4 text-brand-peach">Hair Artistry</h3>
            <p className="text-lg leading-relaxed mb-4">
              At BLACK CAT BEAUTY, Christina specializes in a range of hair services designed to bring out your best. From precision haircuts to vibrant single and double process colors, partial or full highlights, and stylish halo extensions, every service is tailored to your unique look and preferences.
            </p>
            <p className="text-lg leading-relaxed">
              Using only high-quality products, we ensure your hair not only looks stunning but feels healthy and revitalized. Whether you desire a subtle change or a complete transformation, trust Christina to deliver exceptional results.
            </p>
          </div>
          <div className="md:w-1/2 h-64 placeholder-image">
            <p className="italic text-center p-2">Placeholder:<br />Image of beautiful hair styling/coloring</p>
          </div>
        </section>

        <section className="md:flex flex-row-reverse items-center gap-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-3xl font-serif-display mb-4 text-brand-peach">Nail & Beauty Enhancements</h3>
            <p className="text-lg leading-relaxed mb-4">
              Indulge in our specialized nail services including durable Gel-X nails, creative freestyle Gel-X sets where every nail is a unique design, classic gel manicures, freestyle gel sets, and relaxing gel pedicures. Your nails will be perfectly polished and beautifully designed.
            </p>
            <p className="text-lg leading-relaxed">
              Complete your look with our facial hair removal services, including eyebrow shaping, chin and lip waxing, and sideburn removal. Opt for our 3-in-1 package for comprehensive care. Rejuvenate your skin with our Chair Spa Facial, featuring premium Dermalogica products. (Brow tinting coming soon!)
            </p>
          </div>
          <div className="md:w-1/2 h-64 placeholder-image">
            <p className="italic text-center p-2">Placeholder:<br />Image of elegant nails or facial treatment</p>
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-serif-display mb-4 text-brand-peach text-center">Personalized Consultations</h3>
          <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto">
            Every great look begins with understanding your vision. We offer personalized consultations to discuss your beauty goals, assess your needs, and recommend the best services and treatments. Christina takes the time to listen to your preferences and provide expert advice, ensuring you feel confident and excited about your transformation. This collaborative approach is central to our philosophy at BLACK CAT BEAUTY, where your satisfaction is our highest priority.
          </p>
        </section>
      </div>

      <div className="text-center mt-12 md:mt-16">
        <button 
          onClick={() => { /* This should navigate to booking, handled by setCurrentPage in App.tsx */ alert("Navigate to Booking page - placeholder"); }}
          className="btn-primary"
        >
          Book Your Transformation
        </button>
      </div>
    </div>
  );
}

export default Services;
