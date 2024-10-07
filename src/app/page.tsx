import Head from "next/head";
import SignInButton from "@/components/signInButton";
import MyProjects from "@/components/myprojects"
import SkillsSection from "@/components/skillsSection"
import ContactPage from "@/components/contact";
import ServicesPage from "@/components/services";

export default function Home() {
  return (
    <main className='flex justify-center'>

      <div className="">
        {/* -------------hero/home page section-------------- */}
        <section className="relative overflow-hidden h-screen">
          <div className="container mx-auto flex flex-col justify-center items-center h-full relative z-10 text-center">
            <h1 className="text-5xl font-extrabold text-white">Hey, I&apos;m Arif, <p></p> </h1>
            <p className="text-xl mt-4 text-gray-300">Highly secured, 100% trusted, built on modern web technologies.</p>
            <a href="#" data-theme="midnight-aurora-button" className="mt-8 px-8 py-3  text-white  text-lg">Get Started</a>
          </div>
        </section>
        <hr />

        <SkillsSection />
        <hr />
        <MyProjects />
        <hr />
        <ServicesPage />
        <hr />
        <ContactPage />
      </div>
    </main>
  );
}
