import { FAQListView } from "../faq/FAQListView";
import Footer from "../../ui/Footer";
import Navigation from "../../ui/Naviagtion";
import { Header } from "../../../features/agenda/ui";
export function FAQ() {
  return (
    <>
  
    <Navigation />
    <main className="flex min-h-screen flex-col bg-[#0A0C12] text-gray-100">
<main className="mx-auto w-[90%] max-w-screen-lg flex-grow space-y-12  py-0 sm:py-10">
        {/* <Header
          title="FAQ"
          description="Here you can find answers to the most frequently asked questions about OA's Techfest"
        /> */}
        <div className="flex max-h-fit flex-col items-center bg-agenda justify-center text-center sm:text-left mt-3 sm:mt-5 px-0 sm:px-12  py-0 sm:py-4 box-border max-sm:pb-[10px]">
      
        <h1
        className="text-2xl sm:text-3xl font-semibold mb-4 max-[450px]:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]"
        aria-label="Event Title"
      >
       FAQ
      </h1>
      <p
        className="text-center max-w-2xl text-[16px] sm:text-lg md:text-xl text-White"
        aria-label="Event Description"
      >
        Here you can find answers to the most frequently asked questions about OA's Techfest
      </p>
      </div>
        <FAQListView />
      </main>
      <Footer />
    </main>
    </>
    
  );
}
