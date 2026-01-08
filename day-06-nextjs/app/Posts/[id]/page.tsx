export default function Post({ params }: { params: { id: string } }) {
  return <h1>Post ID: {params.id}</h1>;
}
