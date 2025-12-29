import { Footer, Navbar, Navigation } from "../../../common/ui";
import { Header } from "../../agenda/ui";

export default function PrivacyPolicy() {
  return (
    <>
      
      <Navigation />

      <main className="flex min-h-screen flex-col bg-[#0A0C12] text-gray-200">
        <div className="mx-auto w-[90%] max-w-screen-lg flex-grow space-y-12 py-0 sm:py-10">

          {/* TITLE */}
          <div className="flex max-h-fit flex-col items-center justify-center text-center sm:text-left mt-3 sm:mt-5 px-0 sm:px-12 py-0 sm:py-4 box-border">
            <h1
              className="text-2xl sm:text-3xl font-semibold mb-4 max-[450px]:text-2xl 
              text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]"
            >
              Privacy Policy
            </h1>

            <p className="text-center max-w-2xl text-[16px] sm:text-lg md:text-xl text-white">
              Thank you for visiting our website and booking a ticket for OA TechFest 2025. 
              By registering, you agree to the terms outlined in this Privacy Policy.
            </p>
          </div>

          {/* === SECTIONS DARK THEME === */}
          <section className="bg-[#12151C] p-6 rounded-lg shadow-xl border border-[#1f2937] hover:border-[#00C2FF]/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              1. Information We Collect
            </h2>
            <p className="text-gray-400">To facilitate your event registration, we collect:</p>
            <ul className="list-disc mt-4 ml-6 space-y-2 text-gray-400">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Institution/Company Name</li>
              <li>T-Shirt Size</li>
              <li>Payment Information (secured via third-party gateway)</li>
            </ul>
          </section>

          <section className="bg-[#12151C] p-6 rounded-lg shadow-xl border border-[#1f2937] hover:border-[#00C2FF]/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-400">Your information is used for:</p>
            <ul className="list-disc mt-4 ml-6 space-y-2 text-gray-400">
              <li>Processing ticket registration</li>
              <li>Sending event updates</li>
              <li>Goodies distribution</li>
              <li>Check-in verification</li>
              <li>Internal event improvements</li>
            </ul>
          </section>

          <section className="bg-[#12151C] p-6 rounded-lg shadow-xl border border-[#1f2937] hover:border-[#00C2FF]/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              3. Refund & Cancellation Policy
            </h2>
            <ul className="list-disc mt-4 ml-6 space-y-2 text-gray-400">
              <li>No refunds under any circumstances.</li>
              <li>Tickets are non-transferable and non-cancellable.</li>
            </ul>
          </section>

          <section className="bg-[#12151C] p-6 rounded-lg shadow-xl border border-[#1f2937] hover:border-[#00C2FF]/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              4. Data Protection & Security
            </h2>
            <p className="text-gray-400">We use reasonable measures to protect your data.</p>
          </section>

          <section className="bg-[#12151C] p-6 rounded-lg shadow-xl border border-[#1f2937] hover:border-[#00C2FF]/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              5. Changes to This Policy
            </h2>
            <p className="text-gray-400">Updates will be posted on this website.</p>
          </section>

          <section className="bg-[#12151C] p-6 rounded-lg shadow-xl border border-[#1f2937] hover:border-[#00C2FF]/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              6. Contact Us
            </h2>
            <p className="text-gray-400">
              Email: <span className="text-[#00C2FF]">oatechfest@gmail.com</span>
            </p>
          </section>

          <hr className="border-gray-700 my-8" />

          {/* TERMS & CONDITIONS TITLE */}
          <div className="flex max-h-fit flex-col items-center justify-center text-center sm:text-left mt-3 sm:mt-5 px-0 sm:px-12 py-0 sm:py-4 box-border">
            <h1
              className="text-2xl sm:text-3xl font-semibold mb-4 max-[450px]:text-2xl 
              text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]"
            >
              Terms & Conditions
            </h1>

            <p className="text-center max-w-2xl text-[16px] sm:text-lg md:text-xl text-white">
              By registering for OA TechFest 2025, you agree to these terms.
            </p>
          </div>

          {/* TERMS SECTIONS */}
          <section className="bg-[#12151C] p-6 rounded-lg shadow-xl border border-[#1f2937] hover:border-[#00C2FF]/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              1. Event Registration & Participation
            </h2>
            <ul className="list-disc mt-4 ml-6 space-y-2 text-gray-400">
              <li>Follow event rules & guidelines.</li>
              <li>Registration is non-transferable.</li>
              <li>Organizers may refuse entry for violations.</li>
            </ul>
          </section>

          <section className="bg-[#12151C] p-6 rounded-lg shadow-xl border border-[#1f2937] hover:border-[#00C2FF]/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              2. Code of Conduct
            </h2>
            <ul className="list-disc mt-4 ml-6 space-y-2 text-gray-400">
              <li>Behave professionally.</li>
              <li>No harassment or disruptive actions.</li>
            </ul>
          </section>

          <section className="bg-[#12151C] p-6 rounded-lg shadow-xl border border-[#1f2937] hover:border-[#00C2FF]/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              3. Intellectual Property & Media Consent
            </h2>
            <ul className="list-disc mt-4 ml-6 space-y-2 text-gray-400">
              <li>Event photos & recordings may include attendees.</li>
              <li>Unauthorized recording is prohibited.</li>
            </ul>
          </section>

          <section className="bg-[#12151C] p-6 rounded-lg shadow-xl border border-[#1f2937] hover:border-[#00C2FF]/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              4. Liability Disclaimer
            </h2>
            <ul className="list-disc mt-4 ml-6 space-y-2 text-gray-400">
              <li>Organizers are not responsible for personal loss or damage.</li>
              <li>Attendees must secure their belongings.</li>
            </ul>
          </section>

          <section className="bg-[#12151C] p-6 rounded-lg shadow-xl border border-[#1f2937] hover:border-[#00C2FF]/40 transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#EE4C9C]">
              5. Event Changes & Cancellations
            </h2>
            <ul className="list-disc mt-4 ml-6 space-y-2 text-gray-400">
              <li>Event schedule may change as needed.</li>
              <li>Updates will be emailed to attendees.</li>
            </ul>
          </section>

        </div>
        <Footer />
      </main>
    </>
  );
}
