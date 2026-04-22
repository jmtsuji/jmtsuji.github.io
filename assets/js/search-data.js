
const currentUrl = window.location.href;
const siteUrl = "https://jmtsuji.github.io";
let updatedUrl = currentUrl.replace("https://jmtsuji.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "A blog exploring miscellaneous research themes related to microorganisms and global ecology",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Key themes of my current work",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-processing-hplc-data-using-jupyterlab",
        
          title: "Processing HPLC data using JupyterLab",
        
        description: "My experiences using iPython notebooks to process chromatograph signal data",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/hplc-data-analysis/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-analogues-of-ancient-earth-oceans",
          title: 'Analogues of ancient Earth oceans',
          description: "Probing unique modern environments to peer back through time at ancient metabolisms and nutrient cycles",
          section: "Projects",handler: () => {
              window.location.href = "/projects/archaean_analogues/";
            },},{id: "projects-tools-for-modern-genomics",
          title: 'Tools for modern genomics',
          description: "Developing approaches to make sense of cutting-edge DNA/RNA sequencing data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/genomics/";
            },},{id: "projects-physiological-basis-of-phototrophy",
          title: 'Physiological basis of phototrophy',
          description: "Unravelling how photosynthetic bacteria perform metabolism in the context of Earth history",
          section: "Projects",handler: () => {
              window.location.href = "/projects/photosynthesis/";
            },},{
          id: 'lang-ja-jp',
          title: 'ja-jp',
          section: 'Languages',
          handler: () => {
            window.location.href = "/ja-jp" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
