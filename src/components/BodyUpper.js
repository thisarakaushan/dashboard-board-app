import { FaPencilAlt } from 'react-icons/fa';

export default function BodyUpper({ title = 'Sport Xi Project', status = 'in progress', lastUpdated = '04 April 2022', collaborators = ['AB', 'CD', 'EF', 'GH'], }) {

    const extraCollaborators = collaborators.length > 3 ? collaborators.length - 3 : 0;
    return (
        <div className="p-4 bg-white shadow-md mb-4">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold flex items-center">
                        {title}
                        <span className="bg-yellow-400 text-white px-2 py-1 rounded text-sm ml-3">{status}</span>
                    </h2>
                </div>
            </div>
            <div className="flex items-center mt-2 space-x-2">
                <span>event production</span>
            </div>
            <div className="mt-2 mb-4">
                <span className="flex items-center">
                    assigned
                    <div className="flex mt-1 ml-2">
                        {collaborators.slice(0, 3).map((collab, i) => (
                            <div
                                key={i}
                                className="w-6 h-6 bg-gray-300 rounded-full mr-1 flex items-center justify-center text-xs"
                            >
                                {collab[0]}
                            </div>
                        ))}
                        {extraCollaborators > 0 && (
                            <div className="w-6 h-6 bg-gray-300 rounded-full mr-1 flex items-center justify-center text-xs">
                                +{extraCollaborators}
                            </div>
                        )}
                    </div>
                    <button
                        className="ml-3 flex items-center text-gray-500 text-sm bg-white border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-100 transition"
                    >
                        Manage
                        <FaPencilAlt className="ml-2 text-gray-400 text-xs" />
                    </button>
                </span>
            </div>
            <div className="text-gray-500 border-t pt-4 pb-2">
                <span>Last updated: {lastUpdated}</span>
            </div>
        </div>
    );
}