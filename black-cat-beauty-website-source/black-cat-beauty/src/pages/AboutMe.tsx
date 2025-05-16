import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 text-brand-light-text">
      <h2 className="page-title">Meet Christina</h2>
      
      <div className="content-container md:flex flex-row-reverse items-start gap-10">
        <div className="md:w-2/5 mb-8 md:mb-0">
          {/* Placeholder for a professional, friendly image of Christina */}
          <div className="aspect-w-1 aspect-h-1 placeholder-image rounded-lg shadow-xl flex items-center justify-center">
            <p className="text-xl italic p-4 text-center">(Placeholder: Professional Photo of Christina)</p>
          </div>
        </div>
        <div className="md:w-3/5">
          <h3 className="text-3xl font-serif-display mb-6 text-brand-peach">Your Master Cosmetologist</h3>
          <p className="text-lg leading-relaxed mb-4">
            Hello! My name is Christina and I am behind the chair at Black Cat Beauty. I am a lifelong resident of North Georgia and I love to travel and see what else lies beyond those mountains. Upon graduating college, I began working in the corporate insurance industry and after a few years realized that it was not for me. I found myself feeling restrained and wanted a career where I could be my own boss, express myself as I like, while serving others and improving lives.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            At 29, I went back to school to earn my Master of Cosmetology license, where I found my passion for beauty! Coloring, hair cutting, hair removal, and Gel-X Nails are my bread and butter. Every day I look forward to improving that much more.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I have three cats, an amazing boyfriend, and a severe thirst for Dr. Pepper all the time. My interests are true crime, pop culture, movies, history, and watching way too much Rupaul's Drag Race.
          </p>
          <p className="text-lg leading-relaxed mb-4 italic text-brand-peach/90">
            I was raised in a home of acceptance; any hair texture, skin color, gender, profession are welcome in my chair. I look forward to serving you and making you feel your best!
          </p>
        </div>
      </div>

      <section className="mt-12 md:mt-20 text-center">
        <h3 className="text-3xl font-serif-display mb-6 text-brand-peach">Our Philosophy at Black Cat Beauty</h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          At BLACK CAT BEAUTY, we are dedicated to providing an exceptional salon experience. We believe in continuous learning and staying at the forefront of the beauty industry to bring you the latest styles and techniques. Your comfort, satisfaction, and beauty are our highest priorities. We strive to create a welcoming and inspiring atmosphere where you can relax, rejuvenate, and leave feeling your absolute best.
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
