import { Heading } from "@/components";
import Link from "next/link";
import { getFeaturedReview } from "@/lib/reviews";


export default async function Home() {
  const featuredReview = await getFeaturedReview()
  console.log("featured:", featuredReview)
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie game reviews for you.</p>
      <div className="border rounded w-80 bg-white shadow hover:shadow-xl sm:w-full">
        <Link href={`/reviews/${featuredReview[0].slug}`} className="flex flex-col sm:flex-row ">
          <img
            src={`/images/${featuredReview[0].slug}.jpg`}
            alt="game thumbnail"
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="py-1 text-center font-bold font-orbitron sm:px-2">
            {featuredReview[0].title}
          </h2>
        </Link>
      </div>
    </>
  );
}
