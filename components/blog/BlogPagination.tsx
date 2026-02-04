export default function BlogPagination() {
  return (
    <div className="flex justify-center gap-2 py-16">
      <button className="px-4 py-2 border rounded">Prev</button>
      <button className="px-4 py-2 bg-black text-white rounded">1</button>
      <button className="px-4 py-2 border rounded">2</button>
      <button className="px-4 py-2 border rounded">Next</button>
    </div>
  );
}
