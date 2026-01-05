
import {
  gokul_rangarajanimg,
  vijayakumarimg,
  radha_rengachariimg,
  rajan_Kannanimg,
  baskar_kothandapaniimg,
  sanjivy,
  sudhakarNS,
  dakshin,
  vishnuVardhan,
  placeholder,
  sivakami,
  nishanth,
  anandh,
  ushakiran,
  vishal,
  bharath,
  shahira,
  kamalakannan,
  havilah,
  chako,
  harini,cailassam,jayekumar,harishkumar,musee, karthik
} from "../../../assets/images/speakers/index"
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
    hall: "Mark Hall",
    events: [
    {
        id: 1,
        time: "8:30 am - 9:30 am",
        title: "🎤 Let the show begin!",
        speakers: [],
        description: "Registration and Onboarding 📝"
      },
      {
        id: 2,
        time: "9:30 am - 10:30 am",
        title: "🙏 Vanakkam to TechFest Puducherry 2025!!",
        speakers: [],
        description: "Keynote Presentation - Chief Guest Welcome  🚀 (Happening in Musk hall)"
      },
     
      {
        id: 18,
        time: "10:30 am - 11:30 am",
        title: "🚀 Future of App Development: What's Next? 📱",
        speakers: [
          { id: 11, name: "Bharath", img: bharath,achievements: 'Flutter Engineer at Dhoshi', },
        ],
      }, 
      
      {
        id: 13,
        time: "11.30 am - 12:30 pm",
        title: "🤖 Opportunities for AI Agents: 🎨 Designers | 💻 Developers | 🚀 Entrepreneurs",
        speakers: [
          { id: 1, name: "Gokul Rangarajan", img: gokul_rangarajanimg, achievements: 'General Partner at Pitchworks Venture Studio', },
        ],
      },
      {
        id: 5,
        time: "12:30 pm - 01.45 pm",
        title: "We still got rest of the day waiting!",
        speakers: [],
        description: getLunch()
      },
    
      {
        id: 23,
        time: "1:45 pm - 02:30 pm",
        title: "🔥 Fireside Chat: Startup Ignition - How to Turn 💡 Ideas into 🌍 Impact",
        speakers: [
          { id: 8, name: "Vishnu Vardhan", img: vishnuVardhan, achievements: 'Chief Executive Officer - AIC-PECF', },
          { id: 9, name: "Dakshin", img: dakshin,  achievements: "FounderX: Building The World's Largest Startup Ecosystem", },
        ],
       
      },
      {
        id: 16,
        time: "2:30 pm - 03.15 pm",
        title: "Data Science: Where We Are Today & Where We're Going 🚀📊",
        speakers: [
          { id: 23, name: "Harish Kumar", img: harishkumar, achievements: "JAVA | JS | Rest API | Manage Software Development Cycle | Speaks about Science & Tech", },
        ],
      },
      {
        id: 7,
        time: "3:15 pm - 03.45 pm",
        title: "Thaeneer...☕ Idaivelai....☕",
        speakers: [],
        description: getTeaBreakAnimation()
      },
      
      {
        id: 4,
        time: "03:45 pm - 04.30 pm",
        title: "Essential Non-Tech Skills to Master 🎯 ",
        speakers: [
          { id: 4, name: "Radha Rengachari", img: radha_rengachariimg, achievements: 'CEO at SPIKRA | Co-Founder at Astravue.com', },
        ],
      },
      {
        id: 9,
        time: "04:30 pm - 05.15 pm",
        title: "Almost end of the show ✌️",
        speakers: [],
        description: "Great discussions lead to great impact—let’s keep the momentum going!"
      }
    ],
  },
  {
    hall: "Musk Hall",
    events: [
      {
        id: 10,
        time: "8:30 am - 9:30 am",
        title: "🎤 Let the show begin!",
        speakers: [],
        description: "Registration and Onboarding 📝"
      },
      {
        id: 11,
        time: "9:30 am - 10:30 am",
        title: "🙏 Vanakkam to TechFest Puducherry 2025!!",
        description: "Keynote Presentation - Chief Guest Welcome 🚀 ",
        speakers: [
          { id: 25, name: "Karthik Balaraman", img: karthik,  achievements: "Founder, CEO, Ocean Academy | Career Strategist | Mentor | Speaker | Product Designer",},
        ],
      },
       {
        id: 3,
        time: "10:30 am - 11:30 am",
        title: "🤖 GenAI in action: Insights into LLM and Innovation  🚀",
        speakers: [
          { id: 5, name: "Baskar Kothandapani", img:  baskar_kothandapaniimg, achievements:
      'Product Designer & Technical Leader - vThink Global Technologies', },
        ],
      },
        {
        id: 4,
        time: "11.30 am - 12:30 pm",
        title: "🖌️ Designer vs  🖥️ Developer vs 🧑‍🔬 Tester (Panel Discussion) ",
        speakers: [
          { id: 6, name: "Sanjivy", img: sanjivy, achievements: 'Software Engineer at Striim', },
          { id: 7, name: "Sudhakar", img: sudhakarNS, achievements: 'Senior Software Engineer at Siemens.', },
          { id:10, name: "Ananda kumar" , img:anandh, achievements:
      'Automation Tester (Functional Automation / API Testing / Data Engineering)',},
          { id: 14, name: "Nishanth" , img:nishanth, achievements: 'Designer at Siemens',},
          { id: 16, name: "Shahira Begam" , img:shahira, achievements:
      'Senior Software Engineer at Siemens.',},
          { id: 18, name: "Havilah" , img:havilah,  achievements: "UI/UX Designer at Wowlabz",}
        ],
      },
      
      {
        id: 14,
        time: "12:30 pm - 01.45 pm",
        title: "We still got rest of the day waiting!",
        speakers: [],
        description: getLunch()
      },
        {
        id: 6,
        time: "1:45 pm - 02:30 pm",
        title: "🤖 AI in Hiring: Revolution or 🚧 Roadblock for Fresh Graduates? ( 🎙️ PO-TA Panel Discussion)",
        speakers: [
          { id: 1, name: "Gokul Rangarajan", img: gokul_rangarajanimg, achievements: 'General Partner at Pitchworks Venture Studio', },
          { id: 21, name: "Cailassame N", img: cailassam, achievements: "Placement Officer at Sri Manakula Vinayagar Engineering College",},
          { id: 22, name: "Dr.Jayekumar", img: jayekumar, achievements: "Professor & Placement Officer at Manakula vinayagar institute of technology", },
          { id:24, name:" Pugazhendhi Musee", img: musee, achievements: "Concept Architect Skill Bench - Vision skill school Founder - Bodhi Garden school Concept Business consultation",},
          { id: 23, name: "Harish Kumar", img: harishkumar,  achievements: "JAVA | JS | Rest API | Manage Software Development Cycle | Speaks about Science & Tech", },
        ],
      },
      
      {
        id: 16,
        time: "2:30 pm - 03.15 pm",
        title: "⚡ Lightning Talks: Side Hustle 💼🔥 Start Earning with Your Passion & 🧠🚀 Bio-Hack Your Mind for Peak Performance!",
        speakers: [
          { id: 19, name: "Dr. Chackochen Mathai", img: chako,  achievements: "Success Coach & Psychologist | Franchise Expert | Business Mentor | Speaker | Corporate Sales Trainer | Growth Strategist 🚀"},
          { id: 20, name: "Dr. J. S. Harini", img: harini, achievements: "Clinical Hypnotherapist & Mind Mastery Coach", }
        ],
      },
      {
        id: 17,
        time: "3:15 pm - 03.45 pm",
        title: "Thaeneer...☕ Idaivelai....☕",
        speakers: [],
        description: getTeaBreakAnimation()
      },
      {
        id: 8,
        time: "3:45 pm - 04.30 pm",
        title: "💼LinkedIn Mastery: Building an Impactful Profile to Kickstart Your Career 🌟 ",
        speakers: [
          { id: 15, name: "Sivakami Uma Muthukumar", img: sivakami, achievements:
      'Personal Branding Strategist | Storytelling Advocate | Thought Leadership Coach', },
        ],
      },
       
      {
        id: 19,
        time: "04:30 pm - 05.15 pm",
        title: "Almost end of the show ✌️",
        speakers: [],
        description: "Great discussions lead to great impact—let’s keep the momentum going!"
      }
    ],
  },
  {
    hall: "Sundar Hall",
    events: [
    {
        id: 20,
        time: "8:30 am - 9:30 am",
        title: "🎤 Let the show begin!",
        speakers: [],
        description: "Registration and Onboarding 📝"
      },
      {
        id: 21,
        time: "9:30 am - 10:30 am",
        title: "🙏 Vanakkam to TechFest Puducherry 2025!!",
        speakers: [],
        description: "Keynote Presentation - Chief Guest Welcome  🚀 (Happening in Musk hall)"
      },
       {
        id: 12,
        time: "10:30 am - 11:30 am",
        title: "🔐 Cryptography : Shielding the Digital World 🌍 and Shaping the Future of 🛡️ CyberSecurity",
        speakers: [
          { id: 2, name: "Vijayakumar B", img: vijayakumarimg,  achievements: 'Security Consultant at NatWest Group', },
          // { id: 15, name: "Speaker 15", img: placeholder },
        ],
      },
        {
        id: 15,
        time: "11.30 am - 12:30 pm",
        title: "Public Cloud : The Foundation for Modern Business Transformation ☁️",
        speakers: [
          { id: 3, name: "Rajan Kannan", img: rajan_Kannanimg, achievements: 'Associate Software Engineer at JP Morgan Chase & Co.', },
        ],
      },
    
      {
        id: 24,
        time: "12.30 pm - 01:45 pm",
        title: "We still got rest of the day waiting!",
        speakers: [],
        description: getLunch()
      },
   
      {
        id: 25,
        time: "01.45 pm - 02:30 pm",
        title: "🌐 The Future of Immersive Technologies: AR 🕶️ | VR 🎮 | MR ✨ | Metaverse 🚀 Experiences",
        speakers: [
          { id: 12, name: "Vishal ", img: vishal, achievements: 'AR VR MR | GenAI | Growth Hacking ', },
        ],
      },
      {
        id: 26,
        time: "02:30 pm - 03.15 pm",
        title: "🧠 Problem Solving for Product Based Company",
        speakers: [
          { id: 13, name: "Usha kiran", img: ushakiran,  achievements: 'Programmer • Zoho • iOS Developer', },
        ],
      }, 
      {
        id: 27,
        time: "3:30 pm - 03.45 pm",
        title: "Thaeneer...☕ Idaivelai....☕",
        speakers: [],
        description: getTeaBreakAnimation()
      },
 {
        id: 22,
        time: "03:45 pm - 04.30 pm",
        title: "Fullstack Development Roadmap 2025 🚀",
        speakers: [
          { id: 17, name: "Kamalakannan", img: kamalakannan, achievements: "Founder of Kwapio & Qubernet Inc, and ex-Kissflow", },
        ],
      },
      // {
      //   id: 4,
      //   time: "03:45 pm - 04.30 pm",
      //   title: "Essential Non-Tech Skills to Master 🎯 ",
      //   speakers: [
      //     { id: 4, name: "Radha Rengachari", img: radha_rengachariimg },
      //   ],
      // },
      {
        id: 29,
        time: "04:30 pm - 05.15 pm",
        title: "Almost end of the show ✌️",
        speakers: [],
        description: "Great discussions lead to great impact—let’s keep the momentum going!"
      }
    ],
  },
];
