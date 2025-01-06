export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productid: string }>;
}) {
  const id = (await params)?.productid;

  return (
    <>
    
      <h1>Product list number {id}</h1>
    </>
  );
}
