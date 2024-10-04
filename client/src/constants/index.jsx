import { FaShieldHalved } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaFile } from "react-icons/fa6";

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Projects", href: "/AboutUs" },
  { label: "About Us", href: "/Resources" },
  { label: "Why Testerhive", href: "/Why" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied allo of same size with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the same size outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "XYZ Company was a for our project. detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <FaShieldHalved />,
    iconcolor: "#ffac3e",
    color: "#ffe9ca",
    text: "Quality Assurance",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <FaClock />,
    text: "Supply on Date",
    iconcolor: "#6a65ff",
    color: "#dce5ff",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <FaLock />,
    text: "Security Managment",
    iconcolor: "#d76cff",
    color: "#f5d9ff",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <IoPeople />,
    text: "Resource Managment",
    iconcolor: "#64ae77",
    color: "#cdf7d7",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <IoCheckmarkSharp />,
    text: "Network Managment",
    iconcolor: "#9d5224",
    color: "#efbfa2",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <FaFile />,
    text: "Network Managment",
    iconcolor: "white",
    color: "black",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
export const socialmedia = [
  { images: <FaGoogle />, href: "www.google.com" },
  { images: <FaFacebook />, href: "www.facebook.com" },
  { images: <FaXTwitter />, href: "www.youtube.com" },
];
export const aboutus = [
  {
    head: "- LEARN",
    middle: "Free Training for All Testers",
    leg: "Helping testers learn how to test and then improve their testing skills.",
  },
  {
    head: "- EARN",
    middle: "Paid Projects for All Skill Levels",
    leg: "Matching testers with paid project opportunities of all shapes and sizes.",
  },
  {
    head: "- CONNECT",
    middle: "A Global Community of Crowdtesters",
    leg: "Providing testers around the world a place to exchange their insights, experiences, and tips for software and QA testing.",
  },
];
export const status = [
  { subscribe: "1M+", theory: "testers worldwide" },
  { subscribe: "10K+", theory: "new testers every month" },
  { subscribe: "4M+", theory: "devices worldwide" },
  { subscribe: "Millions", theory: "paid to testers monthly" },
];
export const Accord = [
  {
    id: 1,
    Question: "How do testers earn money on TestersHive?",
    Answer:
      "Your payout is project-based. TestersHive will invite you to testing projects that match your profile. You then review the tasks we ask you to complete and decide whether or not you want to participate. Each project will feature different tasks to complete. In the end, we will review your work and pay you for approved work. Payout details for each project are available for your review prior to accepting the project invitation.",
  },
  {
    id: 2,
    Question: "How are testers selected for projects?",
    Answer:
      "Our clients set the requirements for each testing project. Usually those are only tied to operating system specifications such as iOS or Android, which means that as long as you have a device they are looking for and speak the language they request, you’ll also be eligible to participate in the project. Other projects, such as Usability projects, require specific target groups of testers. In order to find out if you meet these requirements, we will first check your Tester Profile. If we cannot identify the information we need for your profile alone, we would personally contact you through email or survey to find out if you are a match for a project.",
  },
  {
    id: 3,
    Question: "What types of projects do testers work on?",
    Answer:
      "Each and every project is unique. There are no boundaries and no limits, we can test everything! The majority of projects involve functional testing, where testers use an app or website and look out for bugs and issues. Once you find a bug that’s within the scope of the testing project, report it to us. For other projects, like Usability testing, we may ask for your opinion on a given test object. Some projects ask testers to go out into the “real world” to test in a restaurant or store, or to test GPS signals, loyalty programs, or new banking systems.",
  },
  {
    id: 4,
    Question: "Do I need to have prior testing experience to join?",
    Answer:
      "Absolutely not. Every individual is welcome at TestersHive. Even if you do not seek to become a software testing professional, you can still participate in dozens of other projects where you absolutely do not need to have any software testing skills. You will identify quickly through our detailed project instructions if you got what it takes for a specific project.",
  },
  {
    id: 5,
    Question: "Do I have to pay to register on TestersHive?",
    Answer:
      " Not at all! TestersHive is free, has always been free and will always be free. You are here to earn money, not to lose it.",
  },
  {
    id: 6,
    Question: "Do I have to pay to register on TestersHive?",
    Answer:
      " We prioritize the protection of our testers' personal information and adhere to stringent data security standards. It is crucial for all our testers, new and existing, to be vigilant against phishing scams. If you ever encounter anything suspicious or have any security concerns, please contact our support team immediately.",
  },
  {
    id: 7,
    Question: "Do I need to be located in a certain area for projects?",
    Answer:
      "While many of TestersHive’s projects are globally accessible and do not require testers to be in a specific location, there are exceptions where location is key. We encourage you to keep your profile updated with your current location and to adhere to our policy against using VPNs to misrepresent your location. In addition to remote testing projects, TestersHive occasionally offers on-site testing opportunities.",
  },
];

export const member = [
  {
    id: 0,
    fullname: "Bamla Satheesh Singh",
    professional: "Web developer",
    img: user1,
    bio: "My name is John Keeter and I am the Director, Community Partner Management at TestersHive. I officially joined the Framingham team in November 2019. I previously supported TestersHive for 3 years with their recruitment efforts as an independent consultant. My prior experience includes recruitment advertising as well as serving as Sourcing Manager for a global market research company.I grew up in a very small town in Northeast North Carolina, and I still have the accent to prove it. It was one of those small towns where everyone knew each other, and if you got into trouble or did something that you shouldn't have, then word would spread quickly.I was highly influenced by music as a child; specifically Hip Hop and Rap music. I used to watch breakdancers and imitate their moves and eventually delved into rapping myself. I used to perform with friends at local events and talent shows. I still listen to hip hop today but find myself yearning for the music of the 90's. My other interests include video games, traveling to warm tropical destinations, summer activities and lounging at a beach. I also enjoy a good cookout and socializing with friends.I am so happy to be a member of the CM team. Everyone on the team is super nice and very supportive of each other. It is a great environment that supports creativity, allows for professional experimentation and provides resources from top notch teammates.Feel free to drop me a line to chat. I have many interests and usually don't have trouble talking your ears off. One Love!",
  },
  {
    id: 1,
    fullname: "Bamla Bhavani Bai",
    professional: "Web developer",
    img: user2,
    bio: "My name is John Keeter and I am the Director, Community Partner Management at TestersHive. I officially joined the Framingham team in November 2019. I previously supported TestersHive for 3 years with their recruitment efforts as an independent consultant. My prior experience includes recruitment advertising as well as serving as Sourcing Manager for a global market research company.I grew up in a very small town in Northeast North Carolina, and I still have the accent to prove it. It was one of those small towns where everyone knew each other, and if you got into trouble or did something that you shouldn't have, then word would spread quickly.I was highly influenced by music as a child; specifically Hip Hop and Rap music. I used to watch breakdancers and imitate their moves and eventually delved into rapping myself. I used to perform with friends at local events and talent shows. I still listen to hip hop today but find myself yearning for the music of the 90's. My other interests include video games, traveling to warm tropical destinations, summer activities and lounging at a beach. I also enjoy a good cookout and socializing with friends.I am so happy to be a member of the CM team. Everyone on the team is super nice and very supportive of each other. It is a great environment that supports creativity, allows for professional experimentation and provides resources from top notch teammates.Feel free to drop me a line to chat. I have many interests and usually don't have trouble talking your ears off. One Love!",
  },
  {
    id: 2,
    fullname: "Bamla Dharani Bai",
    professional: "Web developer",
    img: user3,
    bio: "My name is John Keeter and I am the Director, Community Partner Management at TestersHive. I officially joined the Framingham team in November 2019. I previously supported TestersHive for 3 years with their recruitment efforts as an independent consultant. My prior experience includes recruitment advertising as well as serving as Sourcing Manager for a global market research company.I grew up in a very small town in Northeast North Carolina, and I still have the accent to prove it. It was one of those small towns where everyone knew each other, and if you got into trouble or did something that you shouldn't have, then word would spread quickly.I was highly influenced by music as a child; specifically Hip Hop and Rap music. I used to watch breakdancers and imitate their moves and eventually delved into rapping myself. I used to perform with friends at local events and talent shows. I still listen to hip hop today but find myself yearning for the music of the 90's. My other interests include video games, traveling to warm tropical destinations, summer activities and lounging at a beach. I also enjoy a good cookout and socializing with friends.I am so happy to be a member of the CM team. Everyone on the team is super nice and very supportive of each other. It is a great environment that supports creativity, allows for professional experimentation and provides resources from top notch teammates.Feel free to drop me a line to chat. I have many interests and usually don't have trouble talking your ears off. One Love!",
  },
  {
    id: 3,
    fullname: "Bamla Varun Singh",
    professional: "Web developer",
    img: user4,
    bio: "My name is John Keeter and I am the Director, Community Partner Management at TestersHive. I officially joined the Framingham team in November 2019. I previously supported TestersHive for 3 years with their recruitment efforts as an independent consultant. My prior experience includes recruitment advertising as well as serving as Sourcing Manager for a global market research company.I grew up in a very small town in Northeast North Carolina, and I still have the accent to prove it. It was one of those small towns where everyone knew each other, and if you got into trouble or did something that you shouldn't have, then word would spread quickly.I was highly influenced by music as a child; specifically Hip Hop and Rap music. I used to watch breakdancers and imitate their moves and eventually delved into rapping myself. I used to perform with friends at local events and talent shows. I still listen to hip hop today but find myself yearning for the music of the 90's. My other interests include video games, traveling to warm tropical destinations, summer activities and lounging at a beach. I also enjoy a good cookout and socializing with friends.I am so happy to be a member of the CM team. Everyone on the team is super nice and very supportive of each other. It is a great environment that supports creativity, allows for professional experimentation and provides resources from top notch teammates.Feel free to drop me a line to chat. I have many interests and usually don't have trouble talking your ears off. One Love!",
  },
  {
    id: 4,
    fullname: "X",
    professional: "Web developer",
    img: user5,
    bio: "My name is John Keeter and I am the Director, Community Partner Management at TestersHive. I officially joined the Framingham team in November 2019. I previously supported TestersHive for 3 years with their recruitment efforts as an independent consultant. My prior experience includes recruitment advertising as well as serving as Sourcing Manager for a global market research company.I grew up in a very small town in Northeast North Carolina, and I still have the accent to prove it. It was one of those small towns where everyone knew each other, and if you got into trouble or did something that you shouldn't have, then word would spread quickly.I was highly influenced by music as a child; specifically Hip Hop and Rap music. I used to watch breakdancers and imitate their moves and eventually delved into rapping myself. I used to perform with friends at local events and talent shows. I still listen to hip hop today but find myself yearning for the music of the 90's. My other interests include video games, traveling to warm tropical destinations, summer activities and lounging at a beach. I also enjoy a good cookout and socializing with friends.I am so happy to be a member of the CM team. Everyone on the team is super nice and very supportive of each other. It is a great environment that supports creativity, allows for professional experimentation and provides resources from top notch teammates.Feel free to drop me a line to chat. I have many interests and usually don't have trouble talking your ears off. One Love!",
  },

  {
    id: 5,
    fullname: "y",
    professional: "Web developer",
    img: user1,
    bio: "My name is John Keeter and I am the Director, Community Partner Management at TestersHive. I officially joined the Framingham team in November 2019. I previously supported TestersHive for 3 years with their recruitment efforts as an independent consultant. My prior experience includes recruitment advertising as well as serving as Sourcing Manager for a global market research company.I grew up in a very small town in Northeast North Carolina, and I still have the accent to prove it. It was one of those small towns where everyone knew each other, and if you got into trouble or did something that you shouldn't have, then word would spread quickly.I was highly influenced by music as a child; specifically Hip Hop and Rap music. I used to watch breakdancers and imitate their moves and eventually delved into rapping myself. I used to perform with friends at local events and talent shows. I still listen to hip hop today but find myself yearning for the music of the 90's. My other interests include video games, traveling to warm tropical destinations, summer activities and lounging at a beach. I also enjoy a good cookout and socializing with friends.I am so happy to be a member of the CM team. Everyone on the team is super nice and very supportive of each other. It is a great environment that supports creativity, allows for professional experimentation and provides resources from top notch teammates.Feel free to drop me a line to chat. I have many interests and usually don't have trouble talking your ears off. One Love!",
  },

  {
    id: 6,
    fullname: "Z",
    professional: "Web developer",
    img: user2,
    bio: "My name is John Keeter and I am the Director, Community Partner Management at TestersHive. I officially joined the Framingham team in November 2019. I previously supported TestersHive for 3 years with their recruitment efforts as an independent consultant. My prior experience includes recruitment advertising as well as serving as Sourcing Manager for a global market research company.I grew up in a very small town in Northeast North Carolina, and I still have the accent to prove it. It was one of those small towns where everyone knew each other, and if you got into trouble or did something that you shouldn't have, then word would spread quickly.I was highly influenced by music as a child; specifically Hip Hop and Rap music. I used to watch breakdancers and imitate their moves and eventually delved into rapping myself. I used to perform with friends at local events and talent shows. I still listen to hip hop today but find myself yearning for the music of the 90's. My other interests include video games, traveling to warm tropical destinations, summer activities and lounging at a beach. I also enjoy a good cookout and socializing with friends.I am so happy to be a member of the CM team. Everyone on the team is super nice and very supportive of each other. It is a great environment that supports creativity, allows for professional experimentation and provides resources from top notch teammates.Feel free to drop me a line to chat. I have many interests and usually don't have trouble talking your ears off. One Love!",
  },
  {
    id: 7,
    fullname: "A",
    professional: "Web developer",
    img: user3,
    bio: "My name is John Keeter and I am the Director, Community Partner Management at TestersHive. I officially joined the Framingham team in November 2019. I previously supported TestersHive for 3 years with their recruitment efforts as an independent consultant. My prior experience includes recruitment advertising as well as serving as Sourcing Manager for a global market research company.I grew up in a very small town in Northeast North Carolina, and I still have the accent to prove it. It was one of those small towns where everyone knew each other, and if you got into trouble or did something that you shouldn't have, then word would spread quickly.I was highly influenced by music as a child; specifically Hip Hop and Rap music. I used to watch breakdancers and imitate their moves and eventually delved into rapping myself. I used to perform with friends at local events and talent shows. I still listen to hip hop today but find myself yearning for the music of the 90's. My other interests include video games, traveling to warm tropical destinations, summer activities and lounging at a beach. I also enjoy a good cookout and socializing with friends.I am so happy to be a member of the CM team. Everyone on the team is super nice and very supportive of each other. It is a great environment that supports creativity, allows for professional experimentation and provides resources from top notch teammates.Feel free to drop me a line to chat. I have many interests and usually don't have trouble talking your ears off. One Love!",
  },
  {
    id: 8,
    fullname: "B",
    professional: "Web developer",
    img: user4,
    bio: "My name is John Keeter and I am the Director, Community Partner Management at TestersHive. I officially joined the Framingham team in November 2019. I previously supported TestersHive for 3 years with their recruitment efforts as an independent consultant. My prior experience includes recruitment advertising as well as serving as Sourcing Manager for a global market research company.I grew up in a very small town in Northeast North Carolina, and I still have the accent to prove it. It was one of those small towns where everyone knew each other, and if you got into trouble or did something that you shouldn't have, then word would spread quickly.I was highly influenced by music as a child; specifically Hip Hop and Rap music. I used to watch breakdancers and imitate their moves and eventually delved into rapping myself. I used to perform with friends at local events and talent shows. I still listen to hip hop today but find myself yearning for the music of the 90's. My other interests include video games, traveling to warm tropical destinations, summer activities and lounging at a beach. I also enjoy a good cookout and socializing with friends.I am so happy to be a member of the CM team. Everyone on the team is super nice and very supportive of each other. It is a great environment that supports creativity, allows for professional experimentation and provides resources from top notch teammates.Feel free to drop me a line to chat. I have many interests and usually don't have trouble talking your ears off. One Love!",
  },
  {
    id: 9,
    fullname: "C",
    professional: "Web developer",
    img: user5,
    bio: "My name is John Keeter and I am the Director, Community Partner Management at TestersHive. I officially joined the Framingham team in November 2019. I previously supported TestersHive for 3 years with their recruitment efforts as an independent consultant. My prior experience includes recruitment advertising as well as serving as Sourcing Manager for a global market research company.I grew up in a very small town in Northeast North Carolina, and I still have the accent to prove it. It was one of those small towns where everyone knew each other, and if you got into trouble or did something that you shouldn't have, then word would spread quickly.I was highly influenced by music as a child; specifically Hip Hop and Rap music. I used to watch breakdancers and imitate their moves and eventually delved into rapping myself. I used to perform with friends at local events and talent shows. I still listen to hip hop today but find myself yearning for the music of the 90's. My other interests include video games, traveling to warm tropical destinations, summer activities and lounging at a beach. I also enjoy a good cookout and socializing with friends.I am so happy to be a member of the CM team. Everyone on the team is super nice and very supportive of each other. It is a great environment that supports creativity, allows for professional experimentation and provides resources from top notch teammates.Feel free to drop me a line to chat. I have many interests and usually don't have trouble talking your ears off. One Love!",
  },
];
export const privacyData = [
  {
    id: 1,
    heading: "NOTICE",
    matter:
      "Applause App Quality, Inc. and TestersHive (as a service offered by Applause, hereinafter " +
      " “we,” “us” and “our”), respect your personal information (i.e., information that may directly or indirectly identify you, as further described below) (“PI”). This privacy statement describes TestersHive practices regarding the collection, use, and disclosure of your (hereafter referred to as “you”, “your”, “tester”) PI when you visit one of our websites, when you communicate with us via email or other means, when you register on our websites as a tester, and when you engage with us online. This privacy statement does not apply to third-parties and their actions which we do not own, direct, or control, including, but not limited to, any third-party websites, services and/or applications that you may elect to access through our websites. Please note: The applicability of certain sections of this statement vary by law and jurisdiction. As a result, not all provisions of this statement will apply to all users or all of certain users’ PI.Where we process your information as a tester, on behalf of our customer(s), or where you share your PI or agree that we may share your PI with our customer(s), the data collection and privacy practices of our customer (such as those disclosed in its privacy policy and any other agreement(s) you are asked to enter into with our customer) control as between you and our customer(s). Becoming a TestersHive tester and community member is entirely voluntary. If you do not wish to provide your information during testing cycles, you should not become a tester for TestersHive. If you do not wish to provide any optional additional requested information, you should not do so. You should read all documents, including this one, carefully to understand how your PI will be collected, used and shared by TestersHive and our customer(s). Please note that we are not responsible for the privacy policies and PI collection, use, and disclosure practices (including the data security practices) of third-parties, including those of our customer(s).",
  },
  {
    id: 2,
    heading: "SECURITY",
    matter:
      "We take reasonable steps, consistent with generally accepted industry standards, including physical, technical, organizational, operational and management controls to ensure a level of security appropriate to the risk of PI processing.",
  },
  {
    id: 3,
    heading: "CHOICE",
    matter:
      "From time to time, we may change our privacy policy. If our information practices change at some time in the future we will post the policy changes to our website to notify you of these changes. If you are concerned about how your information is used, please reach out to our Data Protection Officer at privacydpo@applause.com.",
  },
  {
    id: 4,
    heading: "ONWARD TRANSFER",
    matter:
      "Only those third parties which are set out in this Privacy Policy, or with whom you have transactions will receive your information.We may be required to transfer and disclose information, including personal information, in response to lawful requests by public and governmental authorities and law enforcement agencies, including to meet national security or law enforcement requirements. We may also disclose your information (i) with our affiliates, (ii) service providers, (iii) if we are required to do so by law; (iv) if we believe that it is necessary to enforce or apply our terms of use and other agreements or otherwise protect and defend the rights, property or safety of Applause or that of our customers; (v) in order to comply with a judicial proceeding, court order or other legal obligation or government inquiry; or (vi) to any entity that acquires any part of Applauses current operations by way of merger, de-merger, acquisition, reorganization or sale of assets, or (vii) Community Project Managers and Test Team Leads for administering testing projects.",
  },
  {
    id: 5,
    heading: "NOTICE",
    matter:
      "Applause App Quality, Inc. and TestersHive (as a service offered by Applause, hereinafter " +
      " “we,” “us” and “our”), respect your personal information (i.e., information that may directly or indirectly identify you, as further described below) (“PI”). This privacy statement describes TestersHive practices regarding the collection, use, and disclosure of your (hereafter referred to as “you”, “your”, “tester”) PI when you visit one of our websites, when you communicate with us via email or other means, when you register on our websites as a tester, and when you engage with us online. This privacy statement does not apply to third-parties and their actions which we do not own, direct, or control, including, but not limited to, any third-party websites, services and/or applications that you may elect to access through our websites. Please note: The applicability of certain sections of this statement vary by law and jurisdiction. As a result, not all provisions of this statement will apply to all users or all of certain users’ PI.Where we process your information as a tester, on behalf of our customer(s), or where you share your PI or agree that we may share your PI with our customer(s), the data collection and privacy practices of our customer (such as those disclosed in its privacy policy and any other agreement(s) you are asked to enter into with our customer) control as between you and our customer(s). Becoming a TestersHive tester and community member is entirely voluntary. If you do not wish to provide your information during testing cycles, you should not become a tester for TestersHive. If you do not wish to provide any optional additional requested information, you should not do so. You should read all documents, including this one, carefully to understand how your PI will be collected, used and shared by TestersHive and our customer(s). Please note that we are not responsible for the privacy policies and PI collection, use, and disclosure practices (including the data security practices) of third-parties, including those of our customer(s).",
  },
  {
    id: 6,
    heading: "SECURITY",
    matter:
      "We take reasonable steps, consistent with generally accepted industry standards, including physical, technical, organizational, operational and management controls to ensure a level of security appropriate to the risk of PI processing.",
  },
  {
    id: 7,
    heading: "CHOICE",
    matter:
      "From time to time, we may change our privacy policy. If our information practices change at some time in the future we will post the policy changes to our website to notify you of these changes. If you are concerned about how your information is used, please reach out to our Data Protection Officer at privacydpo@applause.com.",
  },
  {
    id: 8,
    heading: "ONWARD TRANSFER",
    matter:
      "Only those third parties which are set out in this Privacy Policy, or with whom you have transactions will receive your information.We may be required to transfer and disclose information, including personal information, in response to lawful requests by public and governmental authorities and law enforcement agencies, including to meet national security or law enforcement requirements. We may also disclose your information (i) with our affiliates, (ii) service providers, (iii) if we are required to do so by law; (iv) if we believe that it is necessary to enforce or apply our terms of use and other agreements or otherwise protect and defend the rights, property or safety of Applause or that of our customers; (v) in order to comply with a judicial proceeding, court order or other legal obligation or government inquiry; or (vi) to any entity that acquires any part of Applauses current operations by way of merger, de-merger, acquisition, reorganization or sale of assets, or (vii) Community Project Managers and Test Team Leads for administering testing projects.",
  },
];
export const verticalNav = [
  {
    id: 1,
    heading: "Tester profile",
    to: "",
  },
  {
    id: 2,
    heading: "Payments",
    to: "/Payment",
  },
  {
    id: 3,
    heading: "Account Security",
    to: "",
  },
  {
    id: 4,
    heading: "Sign out",
    to: "",
  },
  {
    id: 5,
    heading: "Project Board",
    to: "/ProjectBoard",
  },
];
