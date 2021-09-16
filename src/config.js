// config.js
module.exports = {
  github: {
    username: "mandaluzr", // Your GitHub org/user name. (Required)
    sortBy: "stars", // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ["picturest-node-1", "picturest-react-1"], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: "marcos-andaluz-de-rosas",
    twitter: "",
    facebook: "",
    dribbble: "",
    behance: "",
    medium: "",
    devto: "",
    website: "https://mandaluzr.github.io/mandaluzr/",
    phone: "",
    email: "mandaluzr@hotmail.com",
  },
  skills: ["JavaScript", "React.js", "Node.js", "MySQL", "Git", "CSS", "Redux"],
  experiences: [
    {
      company: "Tiller Systems",
      position: "Senior Customer Success Manager",
      from: "June 2019",
      to: "Present",
    },
    {
      company: "Tonica",
      position: "Junior Front-End Developer(Contractor)",
      from: "August 2020",
      to: "Present",
    },
    {
      company: "PwC Argentina",
      position: "Account Manager",
      from: "January 2019",
      to: " June 2019",
    },
  ],
  education: [
    {
      institution: "Nuclio Digital School - Barcelona",
      degree: "Máster in Full Stack Development",
      from: "2020",
      to: "2021",
    },
    {
      institution: "Udemy",
      degree: "Web Profesional Design and Development course by Carlos Arturo",
      from: "2019",
      to: "2020",
    },
    {
      institution: "Universidad Nacional de Rosario",
      degree: "Degree in Business Management and Accounting",
      from: "2012",
      to: "2018",
    },
  ],
  blog: {
    // Display blog posts from your medium or dev.to account. (Optional)
    source: "dev.to", // medium | dev.to
    username: "mandaluzr",
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: "G-WLLB5E14M6", // Please remove this and use your own tag id
  },
  themeConfig: {
    default: "forest",

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should we use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded default
    respectPrefersColorScheme: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
    ],
  },
};
