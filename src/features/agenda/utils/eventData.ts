
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
      // {
      //   id: 3,
      //   time: "10:30 am - 11:30 am",
      //   title: "🤖 GenAI in action: Insights into LLM and Innovation  🚀",
      //   speakers: [
      //     { id: 5, name: "Baskar Kothandapani", img:  baskar_kothandapaniimg },
      //   ],
      // },
      {
        id: 18,
        time: "10:30 am - 11:30 am",
        title: "🚀 Future of App Development: What's Next? 📱",
        speakers: [
          { id: 11, name: "Bharath", img: bharath },
        ],
      }, 
      // {
      //   id: 4,
      //   time: "11.30 am - 12:30 pm",
      //   title: "🖌️ Designer vs  🖥️ Developer vs 🧑‍🔬 Tester",
      //   speakers: [
      //     { id: 6, name: "Sanjivy", img: sanjivy },
      //     { id: 7, name: "Sudhakar", img: sudhakarNS },
      //     { id:10, name: "Ananda kumar" , img:anandh},
      //     { id: 14, name: "Nishanth" , img:nishanth},
      //     { id: 16, name: "Shahira Begam" , img:shahira},
      //     { id: 18, name: "Havilah" , img:havilah}
      //   ],
      // },
      {
        id: 13,
        time: "11.30 am - 12:30 pm",
        title: "🤖 Opportunities for AI Agents: 🎨 Designers | 💻 Developers | 🚀 Entrepreneurs",
        speakers: [
          { id: 1, name: "Gokul Rangarajan", img: gokul_rangarajanimg },
          // { id: 10, name: "Speaker 10", img: placeholder },
        ],
      },
      {
        id: 5,
        time: "12:30 pm - 01.45 pm",
        title: "We still got rest of the day waiting!",
        speakers: [],
        description: getLunch()
      },
      // {
      //   id: 6,
      //   time: "1:45 pm - 03:15 pm",
      //   title: "🤖 AI in Hiring: Revolution or 🚧 Roadblock for Fresh Graduates? ( 🎙️ PO-TA Panel Discussion)",
      //   speakers: [
      //     { id: 1, name: "Gokul Rangarajan", img: gokul_rangarajanimg },
      //     // { id: 10, name: "Speaker 10", img: placeholder },
      //   ],
      // },
      {
        id: 23,
        time: "1:45 pm - 02:30 pm",
        title: "🔥 Fireside Chat: Startup Ignition - How to Turn 💡 Ideas into 🌍 Impact",
        speakers: [
          { id: 8, name: "Vishnu Vardhan", img: vishnuVardhan },
          { id: 9, name: "Dakshin", img: dakshin },
        ],
       
      },
      {
        id: 16,
        time: "2:30 pm - 03.15 pm",
        title: "Data Science: Where We Are Today & Where We're Going 🚀📊",
        speakers: [
          { id: 23, name: "Harish Kumar", img: harishkumar },
        ],
      },
      {
        id: 7,
        time: "3:15 pm - 03.45 pm",
        title: "Thaeneer...☕ Idaivelai....☕",
        speakers: [],
        description: getTeaBreakAnimation()
      },
      // {
      //   id: 8,
      //   time: "3:45 pm - 04.30 pm",
      //   title: "💼LinkedIn Mastery: Building an Impactful Profile to Kickstart Your Career 🌟 ",
      //   speakers: [
      //     { id: 15, name: "Sivakami Uma Muthukumar", img: sivakami },
      //     // { id: 10, name: "Speaker 10", img: placeholder },
      //   ],
      // }, 
      {
        id: 4,
        time: "03:45 pm - 04.30 pm",
        title: "Essential Non-Tech Skills to Master 🎯 ",
        speakers: [
          { id: 4, name: "Radha Rengachari", img: radha_rengachariimg },
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
          { id: 25, name: "Karthik Balaraman", img: karthik},
        ],
      },
       {
        id: 3,
        time: "10:30 am - 11:30 am",
        title: "🤖 GenAI in action: Insights into LLM and Innovation  🚀",
        speakers: [
          { id: 5, name: "Baskar Kothandapani", img:  baskar_kothandapaniimg },
        ],
      },
        {
        id: 4,
        time: "11.30 am - 12:30 pm",
        title: "🖌️ Designer vs  🖥️ Developer vs 🧑‍🔬 Tester (Panel Discussion) ",
        speakers: [
          { id: 6, name: "Sanjivy", img: sanjivy },
          { id: 7, name: "Sudhakar", img: sudhakarNS },
          { id:10, name: "Ananda kumar" , img:anandh},
          { id: 14, name: "Nishanth" , img:nishanth},
          { id: 16, name: "Shahira Begam" , img:shahira},
          { id: 18, name: "Havilah" , img:havilah}
        ],
      },
      // {
      //   id: 12,
      //   time: "10:30 am - 11:30 am",
      //   title: "🔐 Cryptography : Shielding the Digital World 🌍 and Shaping the Future of 🛡️ CyberSecurity",
      //   speakers: [
      //     { id: 2, name: "Vijayakumar B", img: vijayakumarimg },
      //     // { id: 15, name: "Speaker 15", img: placeholder },
      //   ],
      // },
      // {
      //   id: 13,
      //   time: "11.30 am - 12:30 pm",
      //   title: "🤖 Opportunities for AI Agents: 🎨 Designers | 💻 Developers | 🚀 Entrepreneurs",
      //   speakers: [
      //     { id: 1, name: "Gokul Rangarajan", img: gokul_rangarajanimg },
      //     // { id: 10, name: "Speaker 10", img: placeholder },
      //   ],
      // },
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
          { id: 1, name: "Gokul Rangarajan", img: gokul_rangarajanimg },
          { id: 21, name: "Cailassame N", img: cailassam },
          { id: 22, name: "Dr.Jayekumar", img: jayekumar },
          { id:24, name:" Pugazhendhi Musee", img: musee},
          { id: 23, name: "Harish Kumar", img: harishkumar },
        ],
      },
      // {
      //   id: 15,
      //   time: "01.45 pm - 02:30 pm",
      //   title: "Public Cloud ☁️",
      //   speakers: [
      //     { id: 3, name: "Rajan Kannan", img: rajan_Kannanimg },
      //   ],
      // },
      {
        id: 16,
        time: "2:30 pm - 03.15 pm",
        title: "⚡ Lightning Talks: Side Hustle 💼🔥 Start Earning with Your Passion & 🧠🚀 Bio-Hack Your Mind for Peak Performance!",
        speakers: [
          { id: 19, name: "Dr. Chackochen Mathai", img: chako },
          { id: 20, name: "Dr. J. S. Harini", img: harini }
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
          { id: 15, name: "Sivakami Uma Muthukumar", img: sivakami },
          // { id: 10, name: "Speaker 10", img: placeholder },
        ],
      },
      // {
      //   id: 18,
      //   time: "3:45 pm - 04.30 pm",
      //   title: "🚀 Future of App Development: What's Next? 📱",
      //   speakers: [
      //     { id: 11, name: "Bharath", img: bharath },
      //   ],
      // }, 
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
          { id: 2, name: "Vijayakumar B", img: vijayakumarimg },
          // { id: 15, name: "Speaker 15", img: placeholder },
        ],
      },
        {
        id: 15,
        time: "11.30 am - 12:30 pm",
        title: "Public Cloud : The Foundation for Modern Business Transformation ☁️",
        speakers: [
          { id: 3, name: "Rajan Kannan", img: rajan_Kannanimg },
        ],
      },
      // {
      //   id: 22,
      //   time: "10:30 am - 11:30 am",
      //   title: "Road Map to full Stack Developer 🚀",
      //   speakers: [
      //     { id: 17, name: "Kamalakannan", img: kamalakannan },
      //   ],
      // },
      // {
      //   id: 23,
      //   time: "11:30 pm - 12.30 pm",
      //   title: "🔥 Fireside Chat: Startup Ignition - How to Turn 💡 Ideas into 🌍 Impact",
      //   speakers: [
      //     { id: 8, name: "Vishnu Vardhan", img: vishnuVardhan },
      //     { id: 9, name: "Dakshin", img: dakshin },
      //   ],
       
      // },
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
          { id: 12, name: "Vishal ", img: vishal },
        ],
      },
      {
        id: 26,
        time: "02:30 pm - 03.15 pm",
        title: "🧠 Problem Solving for Product Based Company",
        speakers: [
          { id: 13, name: "Usha kiran", img: ushakiran },
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
          { id: 17, name: "Kamalakannan", img: kamalakannan },
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
