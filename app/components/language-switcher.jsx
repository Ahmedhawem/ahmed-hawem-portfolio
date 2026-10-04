"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

function LanguageSwitcher() {
  const t = useTranslations("Language");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const onChange = (nextLocale) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex items-center gap-1" aria-label={t("label")}>
      {routing.locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          className={`px-2 py-1 text-xs font-semibold uppercase rounded transition-colors duration-200 ${
            locale === code
              ? "bg-[#16f2b3] text-[#0d1224]"
              : "text-white hover:text-pink-500"
          }`}
        >
          {t(code)}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
