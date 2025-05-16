import React from "react";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    { id: 1, title: "Vibrant Color Transformation", description: "Showcasing bold and beautiful color work." },
    { id: 2, title: "Elegant Updo for Special Occasion", description: "Highlighting sophisticated styling for events." },
    { id: 3, title: "Precision Haircut & Styling", description: "Featuring modern cuts with flawless finishes." },
    { id: 4, title: "Artistic Nail Design", description: "Displaying intricate and beautiful nail art." },
    { id: 5, title: "Bridal Makeup & Hair", description: "Capturing radiant looks for the big day." },
    { id: 6, title: "Men's Grooming & Style", description: "Presenting sharp and contemporary men's cuts." },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 text-brand-light-text">
      <h2 className="page-title">Our Portfolio</h2>
      <p className="text-center text-lg mb-10 md:mb-12 max-w-2xl mx-auto italic">
        Explore a gallery of transformations and artistry by Christina Coleman. Each image is a testament to the skill, creativity, and personalized care that defines BLACK CAT BEAUTY. <strong className="text-brand-peach">Our full portfolio is currently being curated and will be available here soon!</strong>
      </p>
      
      <div className="content-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-brand-dark-green/50 border-2 border-brand-peach/30 rounded-lg shadow-xl overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-brand-peach/70"
          >
            <div className="aspect-square placeholder-image">
              <p className="text-lg italic text-center">Placeholder:<br />{item.title}</p>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-serif-display font-semibold text-brand-peach mb-2">{item.title}</h3>
              <p className="text-sm text-brand-light-text/80 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-brand-peach/80 max-w-3xl mx-auto">
        <em>We are excited to share the beautiful results achieved for our valued clients. Actual client photos will be featured here with their permission as soon as our portfolio is finalized. Stay tuned for stunning transformations!</em>
      </p>
    </div>
  );
}

export default Portfolio;
