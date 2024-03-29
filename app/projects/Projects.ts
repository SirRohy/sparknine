const projects = [
  {
    index: 1,
    name: "Super Beach Cleanup",
    coverImage: "/Projects/Super-Beach-Cleanup/Cover.jpg",
    gallery: ["Cover.jpg", "Poster.jpg", "One.jpg", "Two.jpg", "Three.jpg", "Four.jpg", "Five.jpg", "Six.jpg", "Seven.jpg"] as string[],
    description:
      "Join us this Saturday, June 24th at Sunset Beach for an epic beach cleanup! This is an opportunity to clean the beach front, socialize, and have fun. \n\nThis is no average cleanup… each participant will have the chance to win a prize for most bags of treasures (garbage) collected. \n\nOpen to everyone, for everyone. Please invite your contacts!",
    startDate: "2023-06-24",
    endDate: "2023-06-24",
    startTime: "14:00",
    endTime: "17:00",
    location: "Sunset beach",
    partners: "",
    status: "finished",
  },

  {
    index: 2,
    name: "Art and Music Camp",
    coverImage: "/Projects/Art-and-Music-Camp/Cover.jpg",
    gallery: ["Poster.jpg", "Img1.jpg", "Img2.jpg", "Img3.jpg", "Img4.jpg", "Img5.jpg", "Img6.jpg", "Img7.jpg", "Img8.jpg", "Img9.jpg", "Img10.jpg", "Img11.jpg", "Img12.jpg", "Img13.jpg", "Vid1.mp4", "Vid2.mp4", "Vid3.mp4", "Vid4.mp4"] as string[],
    description: "The aim of this activity is for us to provide some entertainment for our communities based here in the tri-cities (at Town Centre Park, in Coquitlam) as we all gather together and perform various different activities among the arts, from painting to playing music. \n\nThis is going to be a fun and safe space for all, a place to chat and hang out with our fellow peers as we embrace each others' creativity and make new friends along the way.",
    startDate: "2023-07-15",
    endDate: "2023-07-15",
    startTime: "14:00",
    endTime: "17:00",
    location: "Lafarge lake",
    partners: "",
    status: "upcoming",
  },
  {
    index: 3,
    name: "Bake Sale Fundraiser",
    coverImage: "/Projects/Bake-Sale-Fundraiser/Cover.jpg",
    gallery: ["Poster.jpg"] as string[],
    description: "This will be our 4th project, a fundraiser for the Greater Vancouver Foodbank (GVFB), where we will be raising money by selling baked goods! This will be an opportunity to support the GVFB, spark conversation about food waste & nutrition, and drive action for change.",
    startDate: "2023-07-29",
    endDate: "2023-07-29",
    startTime: "14:00",
    endTime: "16:00",
    location: "Deep cove",
    partners: "Greater Vancouver Food Bank",
    status: "upcoming",
  },
  {
    index: 4,
    name: "Puppy Therapy",
    coverImage: "/Projects/Puppy-Therapy/Cover.jpg",
    gallery: [] as string[],
    description: "",
    startDate: "2023-08-05",
    endDate: "2023-08-05",
    startTime: "14:00",
    endTime: "16:00",
    location: "Ambleside beach",
    partners: "",
    status: "upcoming",
  },
  {
    index: 5,
    name: "Soccer Camp",
    coverImage: "/Projects/Soccer-Camp/Cover.webp",
    gallery: [] as string[],
    description: "",
    startDate: "2023-08-12",
    endDate: "2023-08-12",
    startTime: "14:00",
    endTime: "17:00",
    location: "",
    partners: "",
    status: "upcoming",
  },
  {
    index: 6,
    name: "Bike For Cancer Fundraiser",
    coverImage: "/Projects/Bike-For-Cancer-Fundraiser/Cover.jpg",
    gallery: [] as string[],
    description: "",
    startDate: "2023-09-02",
    endDate: "2023-09-02",
    startTime: "14:00",
    endTime: "17:00",
    location: "",
    partners: "",
    status: "upcoming",
  },
  {
    index: 7,
    name: "Scholarship and Grant-Writing Workshop",
    coverImage: "/Projects/Scholarship-and-Grant-Writing-Workshop/Cover.jpg",
    gallery: [] as string[],
    description: "",
    startDate: "2023-09-09",
    endDate: "2023-09-09",
    startTime: "14:00",
    endTime: "17:00",
    location: "",
    partners: "",
    status: "upcoming",
  },
  {
    index: 8,
    name: "Sustainability Panel",
    coverImage: "/Projects/Sustainability-Panel/Cover.jpeg",
    gallery: [] as string[],
    description: "",
    startDate: "2023-09-30",
    endDate: "2023-09-30",
    startTime: "14:00",
    endTime: "17:00",
    location: "",
    partners: "",
    status: "upcoming",
  },
];

export const fallbackProject: (typeof projects)[0] = {
  index: 0,
  name: "",
  coverImage: "",
  gallery: [] as string[],
  description: "",
  startDate: "",
  endDate: "",
  startTime: "",
  endTime: "",
  location: "",
  partners: "",
  status: "",
};

export default projects;
