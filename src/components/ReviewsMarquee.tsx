'use client';

import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';

interface Review {
  author: string;
  city: string;
  text: string;
}

const row1: Review[] = [
  {
    author: 'Syabonga Mbatha',
    city: 'RICHARDS BAY',
    text: 'Thank you for the good advice and the professionalism from Petrus, on how to make our business function better',
  },
  {
    author: 'Merushka Chetty',
    city: 'PIETERMARITZBURG',
    text: 'Great service from Daisy Business Solutions. Shivek Mothilall was professional, helpful, and went the extra mile to assist me. Highly recommend!',
  },
  {
    author: 'Vusi Sibeko',
    city: 'GEORGE',
    text: "I'm very happy with your professionalism and with your services you guys never disappoint 👌",
  },
  {
    author: 'Heather Buissinne',
    city: 'WESTVILLE',
    text: 'We recently worked with Sonja Naude regarding our printer, what excellent service we received. Sonja Naude has always been our go to when we need service through Daisy.',
  },
  {
    author: 'Jolandi Steyn',
    city: 'RICHARDS BAY',
    text: 'Excellent Service! The staff is friendly, helpful and professional. My order was completed quickly and the print quality was great. I highly recommend Vlooi and her team from Daisy Business Solutions Zululand for anyone looking for quality printing service.',
  },
  {
    author: 'Adrian Schultz',
    city: 'CAPE TOWN',
    text: "It's has been a pleasure dealing with Michael Bright for our telephone system and office copy machines. Highly recommend.",
  },
  {
    author: 'Window & Door Specialist',
    city: 'PIETERMARITZBURG',
    text: 'Thank you Shivek for outstanding service. The service was fast, friendly, and exactly what I needed. They really went above and beyond, Loving my new PBX system',
  },
  {
    author: 'Bernard van Vuuren',
    city: 'GEORGE',
    text: 'We had Daisy Business Solutions installed at our office . Technical team was professional',
  },
  {
    author: 'Shakiera Van Wyk',
    city: 'GEORGE',
    text: 'Great services, fast and efficient thank you to Luke CJ jonty Marshall Keashian and the rest of the technical team, always polite and smiling. Keep it up boys!',
  },
  {
    author: 'Bhavik Garach',
    city: 'SANDTON',
    text: 'Great service from Katheleen Naidoo and Jono. They do constant follow ups and give prompt feedback. Turnaround times are impressive, highly recommend using Daisy Business Solutions.',
  },
  {
    author: 'Dr. Cosmas Giannakopoulos',
    city: 'SOUTH AFRICA',
    text: 'I have purchased a Generator and UPS System from Daisy Energy. During this time I have dealt with the team who have been extremely helpful and knowledgeable. The overall service and experience that I have had with Daisy Energy has been excellent and I would highly recommend the company.',
  },
  {
    author: 'Tutox Education',
    city: 'GEORGE',
    text: 'There truly is nothing to complain about when every call-out logged is handled with excellence. Francois is a great technician and always solves whatever issue I have fast and efficiently. Also a shout-out to Cobus at sales: love our new camera system and everything was dealt with professionally.',
  },
  {
    author: 'Jayd Christoffels',
    city: 'GEORGE',
    text: 'Absolutely wonderdul experience dealing with Barry Schmidt of Daisy Business solutions for installation of CCTV. The staff are helpful and professional and deliver a great service! Thank you!',
  },
  {
    author: 'Megan Jane Coleman',
    city: 'CAPE TOWN',
    text: 'A big thanks to Kirsten and Warren from Daisy for all the assistance on our new telephone system. We are extremely happy with the great service and would certainly recommend Daisy to our clients.',
  },
  {
    author: 'Kulsum Davids',
    city: 'CAPE TOWN',
    text: 'Thank you Cuan Weir for your efficient response and excellent service delivery. You have surely convinced us that this telephone system is the best and most cost saving option. Keep up the good work!!',
  },
  {
    author: 'Shahid Sonday',
    city: 'CAPE TOWN',
    text: 'Dale Maharage has delivered excellent service in getting our telephone system up and running from the very first moment he made contact with us. Even after installation he has been in touch with us to establish that everything is running smoothly. Keep up the good work Dale.',
  },
  {
    author: 'Pamela Naidoo',
    city: 'WESTVILLE',
    text: 'Excellent, efficient service from Zaheer Sing and his team of Daisy Solutions. Thank you guys for sorting out our telephone issues.',
  },
  {
    author: 'Jasmine Johnson',
    city: 'WESTVILLE',
    text: 'Daisy Solutions has provided me with excellent service. Tythan was so great to work with, his energy and knowledge of the product was great and answered all of my questions. I would definitely recommend Daisy Solutions to anyone!',
  },
  {
    author: 'Miegal Joubert',
    city: 'WESTVILLE',
    text: 'Great experience. Ty was full of energy and happily assisted me with the all the questions I had. Would recommend their service to anyone.',
  },
];

const row2: Review[] = [
  {
    author: 'Caitlyn Van Rensburg',
    city: 'WESTVILLE',
    text: 'Simone Ashton came to speak to me about my office automation. I was very impressed, her high energy, knowledge and friendliness is the reason that I would recommend Daisy Business Solutions.',
  },
  {
    author: 'Stargen Auto Electrical',
    city: 'SANDTON',
    text: 'Good day, Thank you for your prompt service and follow ups as requested.',
  },
  {
    author: 'Andries Nortje',
    city: 'WESTVILLE',
    text: 'Have done major time and attendance installs with Daisy, as well as 2 solar plants in the last few months. A telephony and networking technology project has just been launched with Daisy as well. Service and expertise second to none. I would not choose another supplier for any of my projects.',
  },
  {
    author: 'Maletsatsi Mthembu',
    city: 'RICHARDS BAY',
    text: "I've worked with Thabo and found information in this business valuable, I'm keen to recommend the business to my friends. Keep the good work up!",
  },
  {
    author: 'Roelof Linde',
    city: 'RICHARDS BAY',
    text: "Tracy was excellent at Daisy Business Solutions, she's very professional and helpful.",
  },
  {
    author: 'Manjul Baijnath',
    city: 'PIETERMARITZBURG',
    text: 'Excellent service by Shivek Mothilall! I recommend him and Daisy Solutions to everyone!',
  },
  {
    author: 'Brandon Donaldson',
    city: 'RICHARDS BAY',
    text: 'Excellent quality, beautiful colours, exceptional service. Highly recommended!',
  },
  {
    author: 'Tyrell C Pillay',
    city: 'PIETERMARITZBURG',
    text: 'Carl Krishnalall, you and your team go above and beyond. Absolutely great service delivery. It speaks to your efficiency, accuracy and technical know how. You guys have been friendly and informational and I surely will recommend you guys to my peers.',
  },
  {
    author: 'Bronwyn Stewart',
    city: 'RICHARDS BAY',
    text: 'Excellent service from technical support. Helped restore my scan to email effortlessly.',
  },
  {
    author: 'Elrico April',
    city: 'GEORGE',
    text: 'AJ the Technical manager what a professional to deal with. We need more of you!',
  },
  {
    author: 'Marilize Greeff',
    city: 'GEORGE',
    text: 'Daisy Business Solutions is a super professional company. Their staff is always helpful and friendly. Efficient in all your technical needs. Would 100% recommend them to anyone. Thank you Daisy.',
  },
  {
    author: 'Jemaine Naicker',
    city: 'RICHARDS BAY',
    text: 'Excellent service whenever I walk in, most friendly staff. Great quality printing, I am always happy. Vlooi always so helpful - now this is what you call great customer service!',
  },
  {
    author: 'Zelna Van Rensburg',
    city: 'WESTVILLE',
    text: 'We have been dealing with Daisy Business Solutions for a while now. I want to send a shout out and big thank you to Sonja for her prompt response when we have had issues with a printer. Will recommend Daisy to anybody in need of office tech equipment.',
  },
  {
    author: 'Surina Vermaak',
    city: 'RICHARDS BAY',
    text: 'Wow great service and help. Urgently needed printing during the holiday season was done without hesitation. Friendly, efficient and professional service. Definitely recommend Daisy Business Solutions Richards Bay.',
  },
  {
    author: 'Gerrie De Jongh',
    city: 'RICHARDS BAY',
    text: 'Thank you Elizabeth Nienaber (the print shop) for your excellent work. I was on holiday and needed a few copies. She was very friendly and helpful. I can recommend Daisy Solutions Richards Bay anytime for any of their services.',
  },
  {
    author: 'Cutt & Co',
    city: 'SANDTON',
    text: "I'm dealing with Jason from Daisy and can say that he is really professional when it comes to explaining in layman terms the security solutions Daisy provides, we look forward to a long term relationship with them!",
  },
  {
    author: 'Armant Botha',
    city: 'GEORGE',
    text: 'I got a new CCTV system installed at my business. These guys go above and beyond for their clients. Thank you so much Daisy!',
  },
  {
    author: 'Yolanda Cornelius',
    city: 'RICHARDS BAY',
    text: 'Thank you Sonja for doing a fantastic job with my camera and biomedical systems. Job well done!',
  },
  {
    author: 'Lisenka Bekker',
    city: 'GEORGE',
    text: 'Thank you Nelus Groesbeek for assisting me with my CCTV. Would recommend his expertise to anyone in the Garden Route.',
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      style={{
        backgroundColor: '#203227',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        borderWidth: '1px',
        borderStyle: 'solid',
      }}
      className="review-card h-[255px] min-h-[255px] rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
    >
      <div>
        {/* Card Header: Stars & Subtle Quote Icon */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5"
                style={{ fill: '#94cc35', color: '#94cc35' }}
              />
            ))}
          </div>
          <Quote className="w-4 h-4 text-white/20 rotate-180" />
        </div>

        {/* Card Body: Quote */}
        <p className="text-[13px] leading-relaxed text-white/90 line-clamp-5 font-normal">
          &ldquo;{review.text}&rdquo;
        </p>
      </div>

      {/* Card Footer: Author & City */}
      <div className="mt-4 pt-3 border-t border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-white text-[13.5px] truncate">{review.author}</span>
          <CheckCircle2
            className="w-3.5 h-3.5 shrink-0"
            style={{ color: '#94cc35' }}
          />
        </div>
        <p className="text-[10.5px] font-semibold text-white/50 uppercase tracking-widest mt-0.5">
          {review.city}
        </p>
      </div>
    </div>
  );
}

export default function ReviewsMarquee() {
  return (
    <section
      id="client-reviews"
      style={{ backgroundColor: '#18281e' }}
      className="pt-20 pb-28 text-white relative overflow-hidden scroll-mt-24"
    >
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          animation: scroll-left 115s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          animation: scroll-right 115s linear infinite;
        }
        .marquee-track-left:hover,
        .marquee-track-right:hover {
          animation-play-state: paused;
        }
        /* Sizing: exactly 4 cards visible per row across large devices */
        .review-card {
          width: 290px;
          min-width: 290px;
          max-width: 290px;
          flex-shrink: 0;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .review-card {
            width: 310px;
            min-width: 310px;
            max-width: 310px;
          }
        }
        @media (min-width: 1024px) {
          .review-card {
            width: calc((100vw - 5.5rem) / 4);
            min-width: 295px;
            max-width: 345px;
          }
        }
        @media (min-width: 1440px) {
          .review-card {
            width: 335px;
            min-width: 335px;
            max-width: 335px;
          }
        }
      `}</style>

      {/* Background subtle radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] blur-[140px] pointer-events-none rounded-full"
        style={{ backgroundColor: 'rgba(148, 204, 53, 0.05)' }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p
            style={{ color: '#94cc35' }}
            className="text-xs md:text-sm font-bold uppercase tracking-widest mb-3"
          >
            CLIENT REVIEWS
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-white tracking-tight">
            What our clients say
          </h2>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Real reviews from businesses across South Africa &ndash; every word from a verified customer, not written by us.
          </p>

          {/* Verified Badge Banner Pill */}
          <div
            style={{
              backgroundColor: '#203227',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
            className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-7 py-3.5 rounded-2xl md:rounded-full shadow-2xl"
          >
            {/* 1,600+ and Stars */}
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                1,600+
              </span>
              <div className="text-left">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5"
                      style={{ fill: '#94cc35', color: '#94cc35' }}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-white/70 font-medium block">
                  real customer reviews
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-white/15" />

            {/* Guarantee text with checkmark */}
            <div className="flex items-center gap-2 text-left">
              <CheckCircle2
                className="w-4 h-4 shrink-0"
                style={{ color: '#94cc35' }}
              />
              <span className="text-xs sm:text-[13px] text-white/80 font-medium">
                Real 4- &amp; 5-star reviews from customers across South Africa
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Rows with Edge Fades */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        {/* Row 1: Leftward continuous scroll */}
        <div className="py-2.5">
          <div className="marquee-track-left gap-5 px-3">
            {[...row1, ...row1].map((review, idx) => (
              <ReviewCard key={`r1-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2: Rightward continuous scroll */}
        <div className="py-2.5">
          <div className="marquee-track-right gap-5 px-3">
            {[...row2, ...row2].map((review, idx) => (
              <ReviewCard key={`r2-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
