import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Rewrites absolute URLs (/about/) to include the path prefix when the site
  // is served from a sub-path, e.g. https://donpulpo.github.io/passarella/.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/css": "css", "src/images": "images" });
  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addCollection("notes", (api) =>
    api.getFilteredByGlob("src/notes/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    pathPrefix: process.env.PATH_PREFIX || "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
  };
}
