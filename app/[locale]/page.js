import { getLocale, setRequestLocale } from "next-intl/server";
import { getPersonalData } from "@/utils/data/localized-content";
import AboutSection from "../components/homepage/about";
import Blog from "../components/homepage/blog";
import ContactSection from "../components/homepage/contact";
import Education from "../components/homepage/education";
import Experience from "../components/homepage/experience";
import HeroSection from "../components/homepage/hero-section";
import Projects from "../components/homepage/projects";
import Skills from "../components/homepage/skills";

async function getData(devUsername) {
  if (!devUsername) {
    return [];
  }

  const res = await fetch(`https://dev.to/api/articles?username=${devUsername}`);

  if (!res.ok) {
    return [];
  }

  const data = await res.json();
  return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
}

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const activeLocale = await getLocale();
  const personalData = getPersonalData(activeLocale);
  const blogs = await getData(personalData.devUsername);

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {blogs?.length > 0 && <Blog blogs={blogs} />}
      <ContactSection />
    </div>
  );
}
