import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPersonalData } from "@/utils/data/localized-content";
import BlogCard from "../../components/homepage/blog/blog-card";

async function getBlogs(devUsername) {
  if (!devUsername) {
    return [];
  }

  const res = await fetch(`https://dev.to/api/articles?username=${devUsername}`);

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("Blog");
  const personalData = getPersonalData(locale);
  const blogs = await getBlogs(personalData.devUsername);

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            {t("allBlog")}
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-400">{t("empty")}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {blogs.map((blog, i) =>
            blog?.cover_image ? (
              <BlogCard blog={blog} key={i} priority={i < 3} />
            ) : null
          )}
        </div>
      )}
    </div>
  );
}
