


import {
  AdeitiaBoniface,
  AgnelJohn,
  Alexander,
  Arunachalam,
  Dakshin,
  Deepesh,
  GayathriPerumal,
  Gokulrangarajan,
  Harishkumar,
  Jason_Samuel,
  JustinBenito,
  karthik,
    Megavarman,
    MSRahul,
    NavinKumar,
    placeholder,
    Prashanth,
    SaiSrikarKadiyam,
    Sanjeev,
    SivakamiUma,
    Tamil_Arasan,
    Thina,
  
} from "../../../assets/images/speakers/index";
import { getTeaBreakAnimation } from "./teaLottie";
import { getLunch } from "./lunchLottie";

type Speaker = {
  id: number;
  name: string;
  img: string;
  achievements: string;
};

type Event = {
  id: number;
  time: string;
  title: string;
  speakers: Speaker[];
  description?: string | React.ReactNode; // Allow both text and JSX components
};

type HallSchedule = {
  hall: string;
  events: Event[];
};



export const eventData: HallSchedule[] = [
  {
    hall: "Dennis Hall",
    events: [
      { id: 1, time: "8:30 am - 9:30 am", title: "🎤 Let the show begin!", speakers: [], description: "Registration and Onboarding 📝" },

      {
        id: 2,
        
        time: "9:30 am - 10:30 am", title: "🙏 Vanakkam to TechFest Puducherry 2026!!", speakers: [], description: "Keynote Presentation - Chief Guest Welcome 🚀 (Happening in Kalam Hall)"
      },

      {
        id: 3,
        time: "10:30 am - 11:10 am",
        title: "Build Premium looking Apps Like the Top 1% with AI 🚀",
        speakers: [
          { id: 2, name: "Justin Benito", img: JustinBenito, achievements: "Founder, Lime Green Studios" },
        ],
      },

      {
        id: 4,
        time: "11:15 am - 11:55 am",
        title: "How to build better AI Agents: Best practices and Adoption patterns",
        speakers: [
          { id: 3, name: "Gayathri Perumal", img: GayathriPerumal, achievements: "Engineer, Supermileage" },
        ],
      },

      {
        id: 5,
        time: "12:00 pm - 12:40 pm",
        title: "Think like a Hacker: The Security Mindset That Defines Elite Engineers",
        speakers: [
          { id: 4, name: "Adeitia Boniface", img: AdeitiaBoniface, achievements: "Director (Fractional Head of Product), Banyan Software" },
        ],
      },

      { id: 6, time: "12:40 pm - 02:00 pm", title: "We still got rest of the day waiting!", speakers: [], description: getLunch() },

      {
        id: 7,
        time: "2:00 pm - 02:40 pm",
        title: "WEB-3 WEB-4",
        speakers: [
          { id: 5, name: "Sai Srikar Kadiyam", img: SaiSrikarKadiyam, achievements: "Strategic Growth Consultant, Web4, Web3, XR, AI Evangelist" },
        ],
      },

      {
        id: 8,
        time: "2:45 pm - 03:25 pm",
        title: "How to build better AI Agents: Best practices and Adoption patterns",
        speakers: [
          { id: 6, name: "Gayathri Perumal", img: placeholder, achievements: "Success Coach & Psychologist | Franchise Expert | Business Mentor | Speaker | Corporate Sales Trainer | Growth Strategist 🚀" },
        ],
      },

      { id: 9, time: "3:25 pm - 03:40 pm", title: "Thaeneer...☕ Idaivelai....☕", speakers: [], description: getTeaBreakAnimation() },

      {
        id: 10,
        time: "3:40 pm - 04:30 pm",
        title: "💼LinkedIn Mastery: Building an Impactful Profile to Kickstart Your Career 🌟",
        speakers: [
          { id: 7, name: "Sivakami Uma Muthukumar", img: placeholder, achievements: "Personal Branding Strategist | Storytelling Advocate | Thought Leadership Coach" },
        ],
      },

      { id: 11, time: "04:30 pm - 05:30 pm", title: "Almost end of the show ✌️", speakers: [], description: "Great discussions lead to great impact—let’s keep the momentum going!" },
    ],
  },

  {
    hall: "Kalam Hall",
    events: [
      { id: 12, time: "8:30 am - 9:30 am", title: "🎤 Let the show begin!", speakers: [], description: "Registration and Onboarding 📝" },

      { id: 13, time: "9:30 am - 10:30 am",
        title: "🙏 Vanakkam to TechFest Puducherry 2026!!",
        description: "Keynote Presentation - Chief Guest Welcome 🚀",
        speakers: [
          { id: 1, name: "Karthik Balaraman", img: karthik, achievements: "Founder, CEO, Ocean Academy | Career Strategist | Mentor | Speaker | Product Designer" },
        ], },

      {
        id: 14,
        time: "10:30 am - 11:10 am",
        title: "🚀 Who Will Lead the Data Era: AI Engineers or Data Analysts?",
        speakers: [
          { id: 8, name: "Sanjivy Kumaravel", img: Sanjeev, achievements: "Associate Software Engineer, JPMorgan Chase" },
          { id: 26, name: "Prashanth Radhakrishnan", img: Prashanth, achievements: "Founder & CEO, TeachGrid" },
        ],
      },

      {
        id: 15,
        time: "11:15 am - 11:55 am",
        title: "The Next Tech Wave after AI: The Rise of DeepTech",
        speakers: [
          { id: 9, name: "Sai Srikar Kadiyam", img: SaiSrikarKadiyam, achievements: "Strategic Growth Consultant, Web4, Web3, XR, AI Evangelist" },
          { id: 10, name: "Gokul Rangarajan", img: Gokulrangarajan, achievements: "General Partner, Pitchworks Venture Studio" },
          { id: 27, name: "Murali", img: placeholder, achievements: "General Partner, Pitchworks Venture Studio" },
          { id: 28, name: "MS Rahul", img: MSRahul, achievements: "Founder & CEO, Aeroin Spacetech" },
        ],
      },
      {
        id: 41,
        time: "12:00 pm - 12:40 pm",
        title: "From Student to Creator: Building Authority on Social Media",
        speakers: [
          { id: 29, name: "Sivakami Uma Muthukumar", img: SivakamiUma, achievements: "Personal Branding Strategist | Storytelling Advocate" },
           { id: 30, name: "Tamil Arasan", img: Tamil_Arasan, achievements: "Co-Founder, FounderX Venture Partners" },
            { id: 31, name: "Harizone", img: placeholder, achievements: "Director (Fractional Head of Product), Banyan Software" },
             { id: 32, name: "Arunachalam S", img: Arunachalam, achievements: "Co-Founder | Founder & CEO, Social Sculpt | Personal Branding" },
        ],
      },

      { id: 16, time: "12:40 pm - 02:00 pm", title: "We still got rest of the day waiting!", speakers: [], description: getLunch() },

      {
        id: 17,
        time: "02:00 pm - 02:40 pm",
        title: "Academia in the AI Era: Adapting, Evolving, Leading",
        speakers: [
          // { id: 11, name: "Jason", img: placeholder, achievements: "Chief Executive Officer - AIC-PECF" },
          // { id: 12, name: "Dakshin", img: placeholder, achievements: "FounderX: Building The World's Largest Startup Ecosystem" },
        ],
      },

      {
        id: 18,
        time: "2:45 pm - 03:25 pm",
        title: "Inside Product-Based Hiring: What Recruiters Actually Look For? 🚀",
        speakers: [
          { id: 13, name: "Navin kumar", img: NavinKumar, achievements: "Recruitment Specialist | Founder–Talent Connector" },
           { id: 33, name: "Harish Kumar", img: Harishkumar, achievements: "Lead Engineer, Manage Engine (A division of ZOHO Corp)" },
        ],
      },

      { id: 19, time: "3:25 pm - 03:40 pm", title: "Thaeneer...☕ Idaivelai....☕", speakers: [], description: getTeaBreakAnimation() },

      {
        id: 20,
        time: "03:40 pm - 04:30 pm",
        title: "",
        speakers: [
          { id: 14, name: "Agnel John", img: AgnelJohn, achievements: "EdTech Founder, Error Makes Clever" },
        ],
      },

      { id: 21, time: "04:30 pm - 05.15 pm", title: "Almost end of the show ✌️", speakers: [], description: "Great discussions lead to great impact—let’s keep the momentum going!" },
    ],
  },

  {
    hall: "Steve Hall",
    events: [
      { id: 22, time: "8:30 am - 9:30 am", title: "🎤 Let the show begin!", speakers: [], description: "Registration and Onboarding 📝" },

      { id: 23, time: "9:30 am - 10:30 am", title: "🙏 Vanakkam to TechFest Puducherry 2026!!", speakers: [], description: "Keynote Presentation - Chief Guest Welcome 🚀 (Happening in  Kalam Hall)" },

      {
        id: 24,
        time: "10:30 am - 11:10 am",
        title: "AI in the Digital World: Jobs, Disruption & the Future of Opportunity",
        speakers: [
          { id: 15, name: "Jason - Samuel", img: Jason_Samuel, achievements: "CEO, Zemuria Inc. | Venture Operator" },
            { id: 34, name: "Dakshin", img:   Dakshin, achievements: "Co-Founder & Managing Partner, FounderX Venture Partners" }
        ],
      },

      {
        id: 25,
        time: "11:15 am - 11:55 pm",
        title: "Importance of Building Communities in this AI Disrupted World",
        speakers: [
          { id: 16, name: "Deepak", img: placeholder, achievements: "Strategic Growth Consultant Web4, Web3, XR, AI Evangelist" },
           { id: 35, name: "G Surendar Thina", img:   Thina, achievements: "Founder, Think Digital" }
        ],
      },

      {
        id: 42,
        time: "12:00 am - 12:40 pm",
        title: "From Student Desk to a Million Dollar Company- Why founder's mindset is the ultimate hack for your career.",
        speakers: [
          { id: 20, name: "Megavaruman", img: Megavarman, achievements: "Co-founder & CFO, Pristyn Automations Pvt. Ltd" },
        ],
      },

      { id: 26, time: "12:40 pm - 02:00 pm", title: "We still got rest of the day waiting!", speakers: [], description: getLunch() },

      {
        id: 27,
        time: "02:00 pm - 02:40 pm",
        title: `⚡ Lightning Talks: Self-Love in a Competitive World: 
        Thriving Without Burning Out (20) & How to be in your full potential and attain peak performance`,
        speakers: [
          { id: 17, name: "Deekshanya ", img: placeholder, achievements: "" },
          { id: 18, name: "Alexander Golla", img: Alexander, achievements: "Mindset Coach" },
        ],
        
      },
      

      {
        id: 28,
        time: "02:45 pm - 03:25 pm",
        title: "🧠 Problem Solving for Product Based Company",
        speakers: [
          { id: 19, name: "Usha Kiran", img: placeholder, achievements: "Programmer • Zoho • iOS Developer" },
        ],
      },

      { id: 29, time: "3:25 pm - 03:40 pm", title: "Thaeneer...☕ Idaivelai....☕", speakers: [], description: getTeaBreakAnimation() },

      // {
      //   id: 30,
      //   time: "03:45 pm - 04.30 pm",
      //   title: "Fullstack Development Roadmap 2025 🚀",
      //   speakers: [
      //     { id: 20, name: "Kamalakannan", img: placeholder, achievements: "Founder of Kwapio & Qubernet Inc, and ex-Kissflow" },
      //   ],
      // },

      { id: 31, time: "04:30 pm - 05:30 pm", title: "Almost end of the show ✌️", speakers: [], description: "Great discussions lead to great impact—let’s keep the momentum going!" },
    ],
  },

  {
    hall: "Pichai Hall",
    events: [
      { id: 32, time: "8:30 am - 9:30 am", title: "🎤 Let the show begin!", speakers: [], description: "Registration and Onboarding 📝" },

      { id: 33, time: "9:30 am - 10:30 am", title: "🙏 Vanakkam to TechFest Puducherry 2026!!", speakers: [], description: "Keynote Presentation - Chief Guest Welcome 🚀 (Happening in Kalam Hall)" },

      {
        id: 34,
        time: "10:30 am - 11:30 am",
        title: "🔐 Cryptography : Shielding the Digital World 🌍 and Shaping the Future of 🛡️ CyberSecurity",
        speakers: [
          { id: 21, name: "Vijayakumar B", img: placeholder, achievements: "Security Consultant at NatWest Group" },
        ],
      },

      {
        id: 35,
        time: "11.30 am - 12:30 pm",
        title: "Public Cloud : The Foundation for Modern Business Transformation ☁️",
        speakers: [
          { id: 22, name: "Rajan Kannan", img: placeholder, achievements: "Associate Software Engineer at JP Morgan Chase & Co." },
        ],
      },

      { id: 36, time: "12.30 pm - 01:45 pm", title: "We still got rest of the day waiting!", speakers: [], description: getLunch() },

      {
        id: 37,
        time: "01.45 pm - 02:30 pm",
        title: "🌐 The Future of Immersive Technologies: AR 🕶️ | VR 🎮 | MR ✨ | Metaverse 🚀 Experiences",
        speakers: [
          { id: 23, name: "Vishal", img: placeholder, achievements: "AR VR MR | GenAI | Growth Hacking" },
        ],
      },

      {
        id: 38,
        time: "02:30 pm - 03.15 pm",
        title: "🧠 Problem Solving for Product Based Company",
        speakers: [
          { id: 24, name: "Usha Kiran", img: placeholder, achievements: "Programmer • Zoho • iOS Developer" },
        ],
      },

      { id: 39, time: "3:30 pm - 03.45 pm", title: "Thaeneer...☕ Idaivelai....☕", speakers: [], description: getTeaBreakAnimation() },

      {
        id: 40,
        time: "03:45 pm - 04.30 pm",
        title: "Fullstack Development Roadmap 2025 🚀",
        speakers: [
          { id: 25, name: "Kamalakannan", img: placeholder, achievements: "Founder of Kwapio & Qubernet Inc, and ex-Kissflow" },
        ],
      },

      { id: 41, time: "04:30 pm - 05.15 pm", title: "Almost end of the show ✌️", speakers: [], description: "Great discussions lead to great impact—let’s keep the momentum going!" },
    ],
  },
];
