module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Jesús Espejo. Blog", // Site title.
  siteTitleAlt: "Blog de Jesús Espejo", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://yesobo.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "/blog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Blog de Jesús Espejo.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "380245349081912", // FB Application ID for using app insights
  siteGATrackingID: "UA-111173313-1", // Tracking code ID for google analytics.
  disqusShortname: "yesobo-githubpages-com", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Jesús", // Username to display in the author segment.
  userTwitter: "JesusEspejoA", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Madrid, Spain", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/yesobo",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/JesusEspejoA",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:jesus.espejo.arnas@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "" // Copyright string for the footer of the website and RSS feed.
};
