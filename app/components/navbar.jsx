import { getLocale, getTranslations } from "next-intl/server";
import { getPersonalData } from "@/utils/data/localized-content";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./language-switcher";

async function Navbar() {
  const t = await getTranslations("Navbar");
  const locale = await getLocale();
  const personalData = getPersonalData(locale);

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5 gap-4">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-2xl md:text-3xl font-bold">
            {personalData.name}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100 md:items-center" id="navbar-default">
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("about")}</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("experience")}</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("skills")}</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("education")}</div>
              </Link>
            </li>
            {personalData.devUsername && (
              <li>
                <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog">
                  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("blogs")}</div>
                </Link>
              </li>
            )}
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t("projects")}</div>
              </Link>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
