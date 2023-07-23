import { readFile, readdir } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

const getFeaturedReview = async () => {
  const reviews = await getReviews()
  // console.log(reviews)
  return reviews
}

async function getReview(slug) {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const html = marked(content, {
    mangle: false,
    headerIds: false,
  });
  return {
    title,
    date,
    html,
    image,
    slug
  };
}

const getReviews = async () => {
  const slugs = await getSlugs() // removes file extentions
  //
  const reviews = []
  for (const slug of slugs){
    const review = await getReview(slug)
    reviews.push(review)
  }
  //
  const dateOrder = reviews.sort((a, b) => +b.date - +a.date)
  //
  return (
    dateOrder
  )
}

const getSlugs = async () => {
  const files = await readdir("./content/reviews");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length)); // removes file extentions
  //
  return slugs
}



export{
  getReview,
  getReviews,
  getSlugs,
  getFeaturedReview,
}