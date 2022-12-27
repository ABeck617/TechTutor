const CATEGORIES = [
  { name: "SSO", color: "#3b82f6" },
  { name: "Account Management", color: "#16a34a" },
  { name: "Reports", color: "#ef4444" },
  { name: "Troubleshooting", color: "#eab308" },
  { name: "Cloud SIEM", color: "#db2777" },
  { name: "Log Parsing", color: "#14b8a6" },
  { name: "S3 Archiving", color: "#f97316" },
  { name: "Azure Archiving", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "Logz.io offers a quick integration for SSO with Azure.",
    source:
      "https://docs.logz.io/user-guide/users/single-sign-on/azure-sso.html",
    category: "SSO",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2017,
  },
  {
    id: 2,
    text: "This guide will help you how to Troubleshoot Log Shipping with Filebeat",
    source:
      "https://docs.logz.io/user-guide/log-troubleshooting/filebeat-troubleshooting.html",
    category: "Troubleshooting",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2016,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// LINK TO APP SAMPLE DATA: https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0

// 👍 🤯 ⛔️
