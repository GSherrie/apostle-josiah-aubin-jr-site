module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("year", (dateObj) => {
    if (!dateObj) return "";
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    return d.getFullYear();
  });
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("uploads");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("search.js");
  eleventyConfig.addPassthroughCopy("search-data.js");
  eleventyConfig.addPassthroughCopy("hero-slider.js");
  eleventyConfig.addPassthroughCopy("topbar.js");
  eleventyConfig.addPassthroughCopy("about-slider.js");
  eleventyConfig.addPassthroughCopy("animations.js");
  eleventyConfig.addPassthroughCopy("loader.js");
  eleventyConfig.addPassthroughCopy("slide");
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.png");

  eleventyConfig.addCollection("sermons", (collection) =>
    collection.getFilteredByGlob("content/sermons/*.md")
  );
  eleventyConfig.addCollection("teachings", (collection) =>
    collection.getFilteredByGlob("content/teachings/*.md")
  );
  eleventyConfig.addCollection("books", (collection) =>
    collection.getFilteredByGlob("content/books/*.md")
  );
  eleventyConfig.addCollection("testimonies", (collection) =>
    collection.getFilteredByGlob("content/testimonies/*.md")
  );

  return {
    dir: {
      input: "content",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
