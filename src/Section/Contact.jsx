import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false); // New state to track sending status
  const SERVICE_ID='service_wve18tf';
 const TEMPLATE_ID='template_g832i9k';
 const USER_ID='R0R46xAB3dP5k9wUC';
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true); // Set sending status to true
    
    // Sending the form data to EmailJS
    emailjs.sendForm(
      SERVICE_ID,   
      TEMPLATE_ID,   
      form.current, 
      USER_ID,       
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatusMessage("Your message has been sent successfully!");
        setIsSending(false); // Reset sending status
      },
      (error) => {
        console.log(error.text);
        setStatusMessage("Something went wrong. Please try again.");
        setIsSending(false); // Reset sending status
      }
    );
  };

  return (
    <form id='Contact' ref={form} onSubmit={handleSubmit} className="flex flex-col justify-center relative z-1 items-center">
      <div className="flex justify-between items-center relative flex-col w-full max-w-[1100px] gap-[12px]">
        <div className="text-[#503beb] md:text-[52px] text-center font-semibold md:mt-[20px] text-[32px] mt-[12px]">
          Contact Me
        </div>
        <p className="md:text-[18px] mb-[40px] text-center font-semibold text-[16px]">
        "Anyone can reach out to me through this form."
        </p>
        <div
          className="w-[95%] max-w-[600px] flex flex-col bg-[rgba(136,106,132,0.31)] border-[1px] border-[rgba(255,255,255,0.125)] p-[32px] rounded-[12px] mt-[28px] gap-[12px]"
          style={{
            boxShadow: 'rgba(23,92,230,0.1) 0px 4px 24px'
          }}
        >
          <div className="text-[28px] mb-[6px] font-[semibold] text-white">Email Me</div>
          <input
            className="flex-[1] bg-transparent border-[1px] placeholder-[#3ca4effc] placeholder border-[#396795] outline-none text-[18px] text-[#010202] rounded-[12px] p-[12px_16px] focus:border-[#4585c6]"
            placeholder="Your Email"
            name="from_email"
            type="email"
            required
          />
          <input
            className="flex-[1] bg-transparent placeholder-[#3ca4effc] border-[1px] border-[#396795] outline-none text-[18px] text-[#010202] rounded-[12px] p-[12px_16px] focus:border-[#4585c6]"
            placeholder="Your Name"
            name="from_name"
            required
          />
          <input
            className="flex-[1] placeholder-[#3ca4effc] bg-transparent border-[1px] border-[#396795] outline-none text-[18px] text-[#010202] rounded-[12px] p-[12px_16px] focus:border-[#4585c6]"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
            rows={4}
            placeholder="Message"
            className="flex-[1] placeholder-[#3ca4effc] bg-[transparent] outline-none border-[1px] border-[#396795] text-[18px] text-[#010202] rounded-[12px] p-[12px_16px] focus:border-[#4585c6]"
            name="message"
            required
          ></textarea>
          <button 
            type="submit" 
            className="w-full text-center bg-hsla(271,100%,50%,1) p-[13px_16px] mt-[2px] rounded-[12px] border-none text-[#F2F3F4] text-[18px] font-bold bg-[#d458f3]"
            disabled={isSending} 
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>
          {statusMessage && (
            <p className="text-center mt-4 text-white">{statusMessage}</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default Contact;
