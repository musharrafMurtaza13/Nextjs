export default async function reviewId({
  params,
}: {
  params: Promise<{ productid: string; reviewId: string }>;
}) {
  const { productid, reviewId } = await params;

  return (
    <>
      <h1>
        product of {productid} for review {reviewId}{" "}
      </h1>
    </>
  );
}
