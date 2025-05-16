import React from "react";

const Booking: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 text-brand-light-text">
      <h2 className="page-title">Book Your Appointment</h2>
      <div className="content-container max-w-2xl mx-auto text-center">
        <p className="text-xl mb-6 md:mb-8 italic">
          We are excited to announce that online booking through Square is <strong className="text-brand-peach">coming soon!</strong> This will make scheduling your appointments with Christina even easier.
        </p>
        <div className="bg-brand-dark-green/50 p-6 md:p-10 rounded-lg shadow-xl border border-brand-peach/30">
          <h3 className="text-2xl font-serif-display text-brand-peach mb-4">In the Meantime...</h3>
          <p className="text-lg leading-relaxed mb-4">
            While we finalize our online booking system, please feel free to reach out to us directly to schedule your appointment or if you have any questions about our services.
          </p>
          <p className="text-lg leading-relaxed">
            You can contact Christina via email at <a href="mailto:placeholder@example.com" className="font-semibold hover:underline text-brand-peach">placeholder@example.com</a> or by phone at <a href="tel:+15551234567" className="font-semibold hover:underline text-brand-peach">(555) 123-4567</a> (Placeholder details).
          </p>
          <p className="text-md mt-6 italic text-brand-peach/80">
            We appreciate your patience and can't wait to welcome you to BLACK CAT BEAUTY!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
