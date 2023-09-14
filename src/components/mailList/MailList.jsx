import React, { useState } from 'react';
import './mailList.css';

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAnswer = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-5 sm:p-8">
      <button className="faq-btn flex w-full items-center text-left" onClick={toggleAnswer}>
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
          <svg width="17" height="10" viewBox="0 0 17 10" className={`icon ${isExpanded ? 'rotate-180' : ''}`}>
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill="#3056D3"
              stroke="#3056D3"
            />
          </svg>
        </div>
        <div className="w-full">
          <h4 className="text-base font-semibold text-black sm:text-lg">
            {question}
          </h4>
        </div>
      </button>
      {isExpanded && (
        <div className="faq-content pl-[62px] whitespace-normal w-[420px]">
          <p className="py-3 text-base leading-relaxed text-body-color whitespace-normal">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

const MailList = () => {
  const faqData = [
    {
      question: 'How do I find the best deals and discounts?',
      answer:
        'To find the best deals and discounts, sign up for our newsletter to receive exclusive offers. You can also follow us on social media and regularly check our website for special promotions and last-minute deals.',
    },
    {
      question: 'Do you offer travel insurance?',
      answer:
        'Yes, we offer travel insurance options during the booking process. We recommend considering travel insurance to protect your trip in case of unexpected events or cancellations.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods, including credit cards, debit cards, and popular digital wallets like PayPal. Payment options may vary depending on the hotel and location.',
    },
    {
      question: 'Are there any hidden fees or taxes on bookings?',
      answer:
        'We strive for transparency. The price you see during the booking process includes taxes and fees. However, in some regions, there may be additional local taxes or resort fees, which will be clearly mentioned before you confirm your booking.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'Our customer support team is available 24/7. You can reach us via phone at [Phone Number] or by email at [Email Address]. We are here to assist you with any questions or issues you may have.',
    },
    {
      question: 'Can I cancel my hotel reservation?',
      answer:
        'Yes, you can. Most of our hotel bookings offer free cancellation up to a certain date before check-in. Just go to your booking details and follow the cancellation process. Be sure to check the hotel cancellation policy for specifics.',
    },
  ];

  return (
    <div>
      <section className="relative z-20 overflow-hidden bg-[#f3f4ff] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container">
          <div className="mx-auto mb-[60px] max-w-[620px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              FAQ
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]">
              Any Questions? Answered
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 whitespace-normal">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3056D3" stop-opacity="0.36" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <div className="mail">
        <h1 className="text-xl">Save time, save money!</h1>
        <span className="mailDesc">
          Sign up and we'll send the best deals to you
        </span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button
            className="text-black bg-white hover:bg-green-500 transition duration-300 ease-in-out hover:text-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
            style={{ marginRight: '7px', fontWeight: '700' }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailList;
