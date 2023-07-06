const Blogs = [
  {
    index: 1,
    title: "What is Spark9?",
    author: "Romina",
    description: "Spark 9 Project - First Blog Post",
    date: "2023-06-21",
    path: "./blogContents/What-is-Spark9",
    content: "If you’ve come across this website, you’re probably wondering: what is Spark9 all about? what does the name mean? who is behind this movement and, above all else, what is its purpose? This introductory blog post hopes to answer some of those questions and more, introducing you to our movement. /n/nThe Spark9 Project is a youth-led initiative based in Greater Vancouver, BC. We believe that it only takes a spark - hence our name - to create immensely positive change in our communities. Our purpose is just that, to spearhead and sustain tangible and united progress throughout Greater Vancouver. /n/nTo achieve this goal, we are planning a series of diverse service projects intended to target specific needs in our communities, including but not limited to climate action, equitable education, mental health support and awareness, and more! Our first event, happening on Saturday, June 24, 2023, will be our Youth-Led Beach Clean Up. This event takes place at Sunset Beach Park from 2-5pm. All are welcome to join as volunteers for this event and support us in our first service project for the summer. If you have any questions or are interested in participating, please email spark9project@gmail.com. /n/nOur project is grateful to be a part of the 2023 Sprout Ideas Fellowship through our Project Director and 2023 Sprout Idea Fellow, Aaliyah Mahboubi. The Sprout Ideas Fellowship has provided us with a #RisingYouth microgrant, helping us transform our ideas into reality."
  },
];

export const fallbackBlog: (typeof Blogs)[0] = {
  index: 0,
  title: "",
  author: "",
  description: "",
  date: "",
  path: "",
  content: ""
};

export default Blogs;
