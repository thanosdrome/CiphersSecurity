
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { useEffect, useState } from "react";

// Blog post data structure
interface BlogPost {
  id?: number;
  image: string;
  categories: Array<{
    name: string;
    bgColor: string;
    textColor: string;
  }>;
  title: string[];
  description: string[];
  author: {
    name: string;
    avatar: string;
  };
  date: string;
}

export const PostCard = (): JSX.Element => {
  // Blog posts data

  interface WPAuthor {
    name: string;
    avatar_urls?: { [key: string]: string };
  }

  interface WPPost {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    _embedded?: {
      author?: WPAuthor[];
      "wp:featuredmedia"?: Array<{ source_url: string }>;
      "wp:term"?: Array<Array<{ name: string }>>;
    };
  }

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch(
      "https://cipherssecurity.com/wp-json/wp/v2/posts?_embed&per_page=12"
    )
      .then((res) => res.json())
      .then((data: WPPost[]) => {
        const posts: (BlogPost & { id?: number })[] = data.map((post) => {
          // Get featured image
          const image =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "";

          // Get categories/tags
          const categories =
            post._embedded?.["wp:term"]?.[0]?.map((cat) => ({
              name: cat.name,
              bgColor: "#073940",
              textColor: "#18bed4",
            })) || [];

          // Get author
          const authorObj = post._embedded?.author?.[0];
          const author = {
            name: authorObj?.name || "",
            avatar:
              authorObj?.avatar_urls?.["24"] ||
              authorObj?.avatar_urls?.["48"] ||
              "",
          };

          // Title and description
          const title = [post.title.rendered.replace(/(<([^>]+)>)/gi, "")];
          const description = [
            post.excerpt.rendered
              .replace(/(<([^>]+)>)/gi, "")
              .replace(/\n/g, " ")
              .slice(0, 180) + "...",
          ];

          return {
            id: post.id,
            image,
            categories,
            title,
            description,
            author,
            date: new Date(post.date).toLocaleDateString(),
          };
        });
        setBlogPosts(posts);
      });
  }, []);
  return (
    <section className="w-full py-8 px-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
            <a
              key={index}
              href={`https://cipherssecurity.com/?p=${post.id ?? ""}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Card className="bg-[#18181a] rounded-2xl overflow-hidden border-0 flex flex-col h-full min-h-[420px]">
                <div
                  className="h-[220px] bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <CardContent className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex gap-1.5">
                    {post.categories.map((category, catIndex) => (
                      <Badge
                        key={catIndex}
                        style={{
                          backgroundColor: category.bgColor,
                          color: category.textColor,
                        }}
                        className="rounded-md px-2 py-1 text-[10.8px] font-normal"
                      >
                        {category.name}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-0">
                    {(() => {
                      // Limit title to 8 words max
                      const maxTitleWords = 8;
                      const titleText = post.title.join(" ");
                      const titleWords = titleText.split(/\s+/).slice(0, maxTitleWords).join(" ");
                      return (
                        <h3
                          className="text-white text-[19.8px] leading-[26px] font-normal [font-family:'Inter',Helvetica]"
                          dangerouslySetInnerHTML={{ __html: titleWords + (titleText.split(/\s+/).length > maxTitleWords ? "..." : "") }}
                        />
                      );
                    })()}
                  </div>

                  <div className="space-y-0 flex-1">
                    {(() => {
                      // Limit description to 18 words max
                      const maxDescWords = 18;
                      const descText = post.description.join(" ");
                      const descWords = descText.split(/\s+/).slice(0, maxDescWords).join(" ");
                      return (
                        <p
                          className="text-[#7c7c86] text-[16.1px] leading-6 font-normal [font-family:'Inter',Helvetica]"
                          dangerouslySetInnerHTML={{ __html: descWords + (descText.split(/\s+/).length > maxDescWords ? "..." : "") }}
                        />
                      );
                    })()}
                  </div>

                  <div className="flex items-center mt-4">
                    {post.author.avatar && (
                      <div
                        className="w-6 h-6 rounded-full bg-cover bg-center mr-2"
                        style={{ backgroundImage: `url(..//image-12.png)` }}
                      />
                    )}
                    {post.author.name && (
                      <span className="text-[#d8d8db] text-[11.8px] leading-[15.6px] font-normal [font-family:'Inter',Helvetica]">
                        Anukram Rao
                      </span>
                    )}
                    <span className="text-[#96969e] text-[11.8px] leading-[15.6px] font-normal [font-family:'Inter',Helvetica] ml-4">
                      {post.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
        ))}
      </div>
    </section>
  );
};
