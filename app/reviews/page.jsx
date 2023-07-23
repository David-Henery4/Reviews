import Link from "next/link";
import { Heading } from "@/components";
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: "About",
  description: "Only the best indie game reviews for you.",
};

const Reviews = async () => {
  const reviewsList = await getReviews()
  console.log("reviews");
  //
  return (
    <div>
      <Heading>Reviews</Heading>
      <p>All reviews list lives here</p>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviewsList.map(rev => {
          return (
            <li key={`${rev?.slug}`} className="border rounded bg-white w-80 shadow hover:shadow-xl">
              <Link href={`/reviews/${rev?.slug}`}>
                <img
                  src={`/images/${rev?.slug}.jpg`}
                  alt="game thumbnail"
                  width="320"
                  height="180"
                  className="mb-2 rounded-t"
                />
                <h2 className="py-1 text-center font-bold font-orbitron">
                  {rev?.title}
                </h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
