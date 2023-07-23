import { Heading, ShareLinkButton } from "@/components";
import { getReview, getSlugs } from "@/lib/reviews";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  // must be an array, each element must be an object
  // containing the params that are passed through the component
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

const ReviewPage = async ({ params: { slug } }) => {
  const { title, image, date, html } = await getReview(slug);
  //
  return (
    <div>
      <Heading>{title}</Heading>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{date}</p>
        <ShareLinkButton />
      </div>
      <img
        src={image}
        alt="game cover art"
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose prose-slate max-w-screen-sm"
      />
    </div>
  );
};

export default ReviewPage;
