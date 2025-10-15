import Image from "next/image";
import React from "react";
import TestimonialsImage from "~public/assets/testimonial.webp";

// const testimonials = [
//   {
//     title: "Erina Nakiri",
//     subtitle: "",
//     image: "/assets/testimonial/test3.jpeg",
//     quote:
//       "I must say I'm super impressed with the internal tool feature that does a really good job very professional compared to other AIs",
//     svg: () => (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="100%"
//         height="100%"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//         className="text-white"
//       >
//         <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
//       </svg>
//     ),
//   },
//   {
//     title: "Stri-len",
//     subtitle: "",
//     image: "/assets/testimonial/test4.jpeg",
//     quote:
//       "I've been using Cursor since day one. By the looks of it, Rocket could be the next Figma. I'm very impressed by the presentation, onboarding, and mostly the phenomenal output. It's nice to see the code tech stack is done as impartially as possible. Well done!",

//     svg: () => (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="100%"
//         height="100%"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//         className="text-white"
//       >
//         <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
//       </svg>
//     ),
//   },
//   {
//     title: "Kshitij Mishra",
//     subtitle: "GTM Engineer | AI Sales Systems",
//     image: "/assets/testimonial/test5.jpeg",
//     quote:
//       "We had a web design ready for months but deployment was dragging. We tried a mock on Rocket recently, and it honestly blew our minds. It has opened up so many new doors. Would love to stay in the loop with what you’re building!",
//     svg: () => (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="100%"
//         height="100%"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//         className="text-white"
//       >
//         <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
//       </svg>
//     ),
//   },
//   {
//     title: "CaptainDev",
//     subtitle: "",
//     image: "/assets/testimonial/test7.jpeg",
//     quote:
//       "Rocket saved me more time in 10 minutes than my last 3 frameworks combined. Big respect for what you built!",
//     svg: () => (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="100%"
//         height="100%"
//         fill="currentColor"
//         viewBox="0 0 256 256"
//         className="text-white"
//       >
//         <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
//       </svg>
//     ),
//   },
// ];

const testimonialsLeft = [
  {
    title: "Erina Nakiri",
    subtitle: "",
    image: "/assets/testimonial/test3.jpeg",
    quote:
      '"I must say I\'m super impressed with the internal tool feature that does a really good job very professional compared to other AIs"',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "Stri-len",
    subtitle: "",
    image: "/assets/testimonial/test4.jpeg",
    quote:
      "\"I've been using Cursor since day one. By the looks of it, Rocket could be the next Figma. I'm very impressed by the presentation, onboarding, and mostly the phenomenal output. It's nice to see the code tech stack is done as impartially as possible. Well done!\"",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "Kshitij Mishra",
    subtitle: "GTM Engineer | AI Sales Systems",
    image: "/assets/testimonial/test5.jpeg",
    quote:
      '"We had a web design ready for months but deployment was dragging. We tried a mock on Rocket recently, and it honestly blew our minds. It has opened up so many new doors. Would love to stay in the loop with what you’re building!"',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
      </svg>
    ),
  },
  {
    title: "CaptainDev",
    subtitle: "",
    image: "/assets/testimonial/test7.jpeg",
    quote:
      '"Rocket saved me more time in 10 minutes than my last 3 frameworks combined. Big respect for what you built!"',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "Mia Williams",
    subtitle: "@miatravls",
    image: "/assets/testimonial/test9.jpeg",
    quote:
      '"I just one shotted a prompt using @rocketdotnew and I can’t put into words how astronomically better it is than any other no code AI tool. Actually made me question why I ever paid for Bolt, Lovable, V0, a0 etc\nwhen this tool puts them all to shame. Incredibly impressed, wow."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"></path>
      </svg>
    ),
  },
  {
    title: "T-Bot 🙌",
    subtitle: "",
    image: "/assets/testimonial/test10.jpeg",
    quote:
      '"Yesterday I gave a try to what you guys have built ... simply magical, beautiful and definitely the best experience I had so far compared to the competitors!!!"',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "FaizalKasim",
    subtitle: "@FaizalKasim_UNG",
    image: "/assets/testimonial/test11.jpeg",
    quote:
      '"I tested one for the mobile app with my no-code and programming skills and experience. However, the Rocket made it for me perfectly by spending only about 200k tokens. Amazing."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z"></path>
      </svg>
    ),
  },
  {
    title: "Solopr11",
    subtitle: "",
    image: "/assets/testimonial/test13.jpeg",
    quote:
      '"I\'ve been trying out every no-code AI website/app builder you can think of for months, and Rocket is 100x better than anything else."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "Cris Cafiero",
    subtitle: "@criscafiero",
    image: "/assets/testimonial/test14.jpeg",
    quote:
      "\"@rocketdotnew - I've tried replit & lovable but rocket's ability to one shot working app is next level\"",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"></path>
      </svg>
    ),
  },
  {
    title: "Erina Nakiri",
    subtitle: "",
    image: "/assets/testimonial/test3.jpeg",
    quote:
      '"I must say I\'m super impressed with the internal tool feature that does a really good job very professional compared to other AIs"',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "Stri-len",
    subtitle: "",
    image: "/assets/testimonial/test4.jpeg",
    quote:
      "\"I've been using Cursor since day one. By the looks of it, Rocket could be the next Figma. I'm very impressed by the presentation, onboarding, and mostly the phenomenal output. It's nice to see the code tech stack is done as impartially as possible. Well done!\"",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "Kshitij Mishra",
    subtitle: "GTM Engineer | AI Sales Systems",
    image: "/assets/testimonial/test5.jpeg",
    quote:
      '"We had a web design ready for months but deployment was dragging. We tried a mock on Rocket recently, and it honestly blew our minds. It has opened up so many new doors. Would love to stay in the loop with what you’re building!"',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
      </svg>
    ),
  },
  {
    title: "CaptainDev",
    subtitle: "",
    image: "/assets/testimonial/test7.jpeg",
    quote:
      '"Rocket saved me more time in 10 minutes than my last 3 frameworks combined. Big respect for what you built!"',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "Mia Williams",
    subtitle: "@miatravls",
    image: "/assets/testimonial/test9.jpeg",
    quote:
      '"I just one shotted a prompt using @rocketdotnew and I can’t put into words how astronomically better it is than any other no code AI tool. Actually made me question why I ever paid for Bolt, Lovable, V0, a0 etc\nwhen this tool puts them all to shame. Incredibly impressed, wow."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"></path>
      </svg>
    ),
  },
  {
    title: "T-Bot 🙌",
    subtitle: "",
    image: "/assets/testimonial/test10.jpeg",
    quote:
      '"Yesterday I gave a try to what you guys have built ... simply magical, beautiful and definitely the best experience I had so far compared to the competitors!!!"',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "FaizalKasim",
    subtitle: "@FaizalKasim_UNG",
    image: "/assets/testimonial/test11.jpeg",
    quote:
      '"I tested one for the mobile app with my no-code and programming skills and experience. However, the Rocket made it for me perfectly by spending only about 200k tokens. Amazing."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z"></path>
      </svg>
    ),
  },
  {
    title: "Solopr11",
    subtitle: "",
    image: "/assets/testimonial/test13.jpeg",
    quote:
      '"I\'ve been trying out every no-code AI website/app builder you can think of for months, and Rocket is 100x better than anything else."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "Cris Cafiero",
    subtitle: "@criscafiero",
    image: "/assets/testimonial/test14.jpeg",
    quote:
      "\"@rocketdotnew - I've tried replit & lovable but rocket's ability to one shot working app is next level\"",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"></path>
      </svg>
    ),
  },
];

const testimonialsRight = [
  {
    title: "Vijay Gorfad",
    subtitle: "Founder @RevMax",
    image: "/assets/testimonial/test14.jpeg",
    quote:
      "\"I've been paid user of lovable for last 4 months to build my idea and mainly for ui inspiration for the user flows. Honestly, I hadn't considered there could be any real competition to Lovable's UIs...until I tried Rocket.new today. Figma design results: 100% accurate- I couldn't believe it. User flows: much more better ui than Lovable. Super impressed.\"",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
      </svg>
    ),
  },
  {
    title: "Dan Western",
    subtitle: "@westerns1978",
    image: "/assets/testimonial/testyoutube.jpeg",
    quote: '"@rocketdotnew is one of the best vibe coding apps I\'ve used."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"></path>
      </svg>
    ),
  },
  {
    title: "Lisandro VB",
    subtitle: "Email",
    image: "/assets/testimonial/testcommon.jpeg",
    quote:
      '"It\'s exciting to use Rocket, because for the first time a startup has understood how to really apply logic from a prompt to create truly functional systems and apps. Rocket is the opportunity to make my dreams come true! Thank you!"',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M104,152a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H96A8,8,0,0,1,104,152ZM168,32h24a8,8,0,0,0,0-16H160a8,8,0,0,0-8,8V56h16Zm72,84v60a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V192H32a16,16,0,0,1-16-16V116A60.07,60.07,0,0,1,76,56h76v88a8,8,0,0,0,16,0V56h12A60.07,60.07,0,0,1,240,116Zm-120,0a44,44,0,0,0-88,0v60h88Z"></path>
      </svg>
    ),
  },
  {
    title: "Eban Emmanuel",
    subtitle: "@Eebann",
    image: "/assets/testimonial/test13.jpeg",
    quote:
      "\"I've built apps with Rocket.new, and let me tell you- it's a game-changer. Its leagues ahead of lovable.dev for turning ideas into reality.\"",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"></path>
      </svg>
    ),
  },
  {
    title: "Paras Chodavadiya",
    subtitle: "CTO | Expert in Tailoring User-Centric IT Solutions",
    quote: '"This platform is a game changer for us and for any IT agency."',
    image: "/assets/testimonial/test11.jpeg",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
      </svg>
    ),
  },
  {
    title: "Sean Louis Chioco",
    subtitle: "",
    image: "/assets/testimonial/test10.jpeg",
    quote:
      '"I cant\' imagine in just 1 simple sentence it will generate me an awesome website or an app. The most amazing part here is the psychology of a landing page that sells is also in the web design without me even explaining anything about it."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "NoCode AI Builders",
    subtitle: "@NoCodeAIBuilders",
    image: "/assets/testimonial/test9.jpeg",
    quote:
      '"For me this is the best Nocode AI Builder I have ever used. I built 2 finished apps with it. A user has everything he needs to launch the project."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z"></path>
      </svg>
    ),
  },
  {
    title: "Spikel1283",
    subtitle: "",
    image: "/assets/testimonial/test7.jpeg",
    quote:
      '"I was creating a mockup of a mobile app using v0 for a client. I used the same one shot prompt on v0 and Rocket. Rocket blew it away and more, client was impressed."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "Naman Sarawagi",
    subtitle: "@NamanSr",
    image: "/assets/testimonial/test5.jpeg",
    quote:
      '""- @rocketdotnew - I’ve tried replit & lovable but rocket’s ability to one shot working app is next level." The OG AI startup from Surat."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"></path>
      </svg>
    ),
  },
  {
    title: "Vijay Gorfad",
    subtitle: "Founder @RevMax",
    image: "/assets/testimonial/test4.jpeg",
    quote:
      "\"I've been paid user of lovable for last 4 months to build my idea and mainly for ui inspiration for the user flows. Honestly, I hadn't considered there could be any real competition to Lovable's UIs...until I tried Rocket.new today. Figma design results: 100% accurate- I couldn't believe it. User flows: much more better ui than Lovable. Super impressed.\"",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
      </svg>
    ),
  },
  {
    title: "Dan Western",
    subtitle: "@westerns1978",
    image: "/assets/testimonial/test3.jpeg",
    quote: '"@rocketdotnew is one of the best vibe coding apps I\'ve used."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"></path>
      </svg>
    ),
  },
  {
    title: "Lisandro VB",
    subtitle: "Email",
    image: "/assets/testimonial/testcommon.jpeg",
    quote:
      '"It\'s exciting to use Rocket, because for the first time a startup has understood how to really apply logic from a prompt to create truly functional systems and apps. Rocket is the opportunity to make my dreams come true! Thank you!"',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M104,152a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H96A8,8,0,0,1,104,152ZM168,32h24a8,8,0,0,0,0-16H160a8,8,0,0,0-8,8V56h16Zm72,84v60a16,16,0,0,1-16,16H136v32a8,8,0,0,1-16,0V192H32a16,16,0,0,1-16-16V116A60.07,60.07,0,0,1,76,56h76v88a8,8,0,0,0,16,0V56h12A60.07,60.07,0,0,1,240,116Zm-120,0a44,44,0,0,0-88,0v60h88Z"></path>
      </svg>
    ),
  },
  {
    title: "Eban Emmanuel",
    subtitle: "@Eebann",
    image: "/assets/testimonial/testyoutube.jpeg",
    quote:
      "\"I've built apps with Rocket.new, and let me tell you- it's a game-changer. Its leagues ahead of lovable.dev for turning ideas into reality.\"",
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"></path>
      </svg>
    ),
  },
  {
    title: "Paras Chodavadiya",
    subtitle: "CTO | Expert in Tailoring User-Centric IT Solutions",
    image: "/assets/testimonial/test11.jpeg",
    quote: '"This platform is a game changer for us and for any IT agency."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
      </svg>
    ),
  },
  {
    title: "Sean Louis Chioco",
    subtitle: "",
    image: "/assets/testimonial/test10.jpeg",
    quote:
      '"I cant\' imagine in just 1 simple sentence it will generate me an awesome website or an app. The most amazing part here is the psychology of a landing page that sells is also in the web design without me even explaining anything about it."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "NoCode AI Builders",
    subtitle: "@NoCodeAIBuilders",
    image: "/assets/testimonial/test9.jpeg",
    quote:
      '"For me this is the best Nocode AI Builder I have ever used. I built 2 finished apps with it. A user has everything he needs to launch the project."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-73.74,65-40,28A8,8,0,0,1,108,156V100a8,8,0,0,1,12.59-6.55l40,28a8,8,0,0,1,0,13.1Z"></path>
      </svg>
    ),
  },
  {
    title: "Spikel1283",
    subtitle: "",
    image: "/assets/testimonial/test7.jpeg",
    quote:
      '"I was creating a mockup of a mobile app using v0 for a client. I used the same one shot prompt on v0 and Rocket. Rocket blew it away and more, client was impressed."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z"></path>
      </svg>
    ),
  },
  {
    title: "Naman Sarawagi",
    subtitle: "@NamanSr",
    image: "/assets/testimonial/test5.jpeg",
    quote:
      '""- @rocketdotnew - I’ve tried replit & lovable but rocket’s ability to one shot working app is next level." The OG AI startup from Surat."',
    svg: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="text-white"
      >
        <path d="M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"></path>
      </svg>
    ),
  },
];

function Testimonials() {
  return (
    <div className="relative py-[80px] max-sm:py-[40px] overflow-hidden overlay_bg_top max-w-[1920px] mx-auto">
      <Image
        src={TestimonialsImage}
        alt="testimonials"
        width={1920}
        height={1180}
        placeholder="blur"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <TestimonialsContent />
    </div>
  );
}

function TestimonialCard({
  title,
  subtitle,
  image,
  quote,
  svg,
}: {
  title: string;
  subtitle: string;
  image: string;
  quote: string;
  svg: () => React.ReactNode;
}) {
  return (
    <div className="bg-blur rounded-[16px] p-6 flex flex-col gap-4 transition-all duration-300 w-[400px] flex-shrink-0 mx-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-[12px] overflow-hidden bg-white/20 flex-shrink-0">
          <Image
            alt={title}
            width="48"
            height="48"
            className="w-full h-full object-cover"
            src={image}
            style={{ color: "transparent" }}
          />
        </div>
        <div>
          <p className="text-[16px] leading-[150%] font-semibold text-onColor-heading">
            {title}
          </p>
          <p className="text-[14px] leading-[150%] text-onColor-body">
            {subtitle}
          </p>
        </div>
      </div>
      <p className="text-[14px] leading-[150%] text-onColor-heading">{quote}</p>
      <div className="flex justify-end absolute right-5 top-5 w-6 h-6">
        {svg()}
      </div>
    </div>
  );
}

function TestimonialsContent() {
  return (
    <div className="flex flex-col gap-16 max-sm:gap-8">
      <div className="container mx-auto px-4 z-2">
        <div className="text-center">
          <p className="text-[48px] leading-[120%] max-sm:text-[32px] font-semibold text-onColor-heading mb-4">
            Happiness speaks
          </p>
          <p className="text-[20px] leading-[140%] max-sm:text-[18px] text-onColor-heading">
            What some of our 400K+ creators and developers in 180+ countries{" "}
            <br /> building everything from side projects to enterprise apps
            have to say.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="overflow-hidden relative">
          <div className="flex gap-0 marquee-left" style={{ width: "4800px" }}>
            {testimonialsLeft.map((testimonial, idx) => (
              <TestimonialCard key={idx + testimonial.title} {...testimonial} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden relative">
          <div
            className="flex gap-0 marquee-right justify-end"
            style={{ width: "4800px" }}
          >
            {testimonialsRight.map((testimonial, idx) => (
              <TestimonialCard key={idx + testimonial.title} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="relative flex w-max items-center justify-center cursor-pointer bg-surface-button-onColor text-black hover:bg-surface-button-onColor-hover disabled:hover:bg-surface-button-onColor py-1.5 px-6 h-[40px] rounded-[10px] disabled:opacity-80 disabled:text-disabled-default focus:outline-none disabled:cursor-not-allowed rightAnimation">
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center justify-center gap-1">
              <p className="text-inherit text-[14px] leading-[150%]">
                Start building something great
              </p>
              <span className="w-[20px] h-[20px] arrowAnimate">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
