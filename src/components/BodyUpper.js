export default function BodyUpper() {
  return (
    <div className="p-4 bg-white shadow-md mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Sport Xi Project</h2>
          <span className="bg-yellow-400 text-white px-2 py-1 rounded text-sm">
            in progress
          </span>
        </div>
        <div className="text-gray-500">Last updated on 04 April 2022</div>
      </div>
      <div className="flex items-center mt-2">
        <span>event production</span>
        <span className="mx-2">👥👥 (2)</span>
        <a href="#" className="text-blue-600">Manage</a>
      </div>
    </div>
  );
}