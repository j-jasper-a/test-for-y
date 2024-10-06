type PageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: PageProps) {
  const { id } = params;
  return <div>Product: {id}</div>;
}
