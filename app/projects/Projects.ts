const projects = [
  {
    index: 1,
    name: "Super Beach Cleanup",
    coverImage: "/Projects/Super-Beach-Cleanup/Cover.jpg",
    pictures: ["Cover.jpg", "Poster.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"] as string[],
    description:
      "Join us this Saturday, June 24th at Sunset Beach for an epic beach cleanup! This is an opportunity to clean the beach front, socialize, and have fun. \n\nThis is no average cleanup… each participant will have the chance to win a prize for most bags of treasures (garbage) collected. \n\nOpen to everyone, for everyone. Please invite your contacts!",
    startDate: "2023-06-24",
    endDate: "2023-06-24",
    startTime: "14:00",
    endTime: "17:00",
    location: "Sunset beach",
    status: "finished",
  },

  {
    index: 2,
    name: "Music Camp",
    coverImage: "/Projects/Music-Camp/Cover.jpeg",
    pictures: ["Poster.jpg"] as string[],
    description: "Vestibulum interdum diam a urna fermentum tempor.",
    startDate: "2023-07-15",
    endDate: "2023-07-05",
    startTime: "14:00",
    endTime: "16:00",
    location: "Lafarge lake",
    status: "upcoming",
  },
  {
    index: 3,
    name: "Art Camp",
    coverImage: "/Projects/Art-Camp/Cover.webp",
    pictures: ["Poster.jpg"] as string[],
    description: "Vestibulum interdum diam a urna fermentum tempor.",
    startDate: "2023-07-15",
    endDate: "2023-07-15",
    startTime: "14:00",
    endTime: "17:00",
    location: "Lafarge lake",
    status: "upcoming",
  },
  {
    index: 4,
    name: "Great Vancouver Food Bank Fundraiser",
    coverImage: "/Projects/Great-Vancouver-Food-Bank-Fundraiser/Cover.jpg",
    pictures: [] as string[],
    description: "Vestibulum interdum diam a urna fermentum tempor.",
    startDate: "2023-07-29",
    endDate: "2023-07-29",
    startTime: "14:00",
    endTime: "16:00",
    location: "Deep cove",
    status: "upcoming",
  },
  {
    index: 5,
    name: "Puppy Therapy",
    coverImage: "/Projects/Puppy-Therapy/Cover.jpg",
    pictures: [] as string[],
    description: "Nulla facilisi. Sed euismod nisl sit amet magna consectetur.",
    startDate: "2023-08-05",
    endDate: "2023-08-05",
    startTime: "14:00",
    endTime: "16:00",
    location: "Ambleside beach",
    status: "upcoming",
  },
  {
    index: 6,
    name: "Soccer Camp",
    coverImage: "/Projects/Soccer-Camp/Cover.webp",
    pictures: [] as string[],
    description: "Vestibulum interdum diam a urna fermentum tempor.",
    startDate: "2023-08-12",
    endDate: "2023-08-12",
    startTime: "14:00",
    endTime: "17:00",
    location: "",
    status: "upcoming",
  },
  {
    index: 7,
    name: "Bike For Cancer Fundraiser",
    coverImage: "/Projects/Bike-For-Cancer-Fundraiser/Cover.jpg",
    pictures: [] as string[],
    description: "Vestibulum interdum diam a urna fermentum tempor.",
    startDate: "2023-09-02",
    endDate: "2023-09-02",
    startTime: "14:00",
    endTime: "17:00",
    location: "",
    status: "upcoming",
  },
  {
    index: 8,
    name: "Scholarship and Grant-Writing Workshop",
    coverImage: "/Projects/Scholarship-and-Grant-Writing-Workshop/Cover.jpg",
    pictures: [] as string[],
    description: "Vestibulum interdum diam a urna fermentum tempor.",
    startDate: "2023-09-09",
    endDate: "2023-09-09",
    startTime: "14:00",
    endTime: "17:00",
    location: "",
    status: "upcoming",
  },
  {
    index: 9,
    name: "Sustainability Panel",
    coverImage: "/Projects/Sustainability-Panel/Cover.jpeg",
    pictures: [] as string[],
    description: "Vestibulum interdum diam a urna fermentum tempor.",
    startDate: "2023-09-30",
    endDate: "2023-09-30",
    startTime: "14:00",
    endTime: "17:00",
    location: "",
    status: "upcoming",
  },
];

export const fallbackProject: (typeof projects)[0] = {
  index: 0,
  name: "",
  coverImage: "",
  pictures: [] as string[],
  description: "",
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
  location: "",
  status: "",
};

export default projects;
