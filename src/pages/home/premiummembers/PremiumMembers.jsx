import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const PremiumMembers = () => {
    const axiosPublic = useAxiosPublic();
    const { data: premiumMembers, isLoading, error } = useQuery({
        queryKey: ["premiumMembers"],
        queryFn: async () => {
            try {
                const result = await axiosPublic.get("/premiumMembers");
                return result.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
    });

    if (isLoading) {
        return <p className="text-center mt-6 text-gray-500">Loading...</p>;
    }

    if (error) {
        return (
            <p className="text-center mt-6 text-red-500">
                Something went wrong. Please try again later.
            </p>
        );
    }

    return (
        <div className="p-4 md:p-8">
            {/* Header */}
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
                Premium Members
            </h2>

            {/* Premium Members Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumMembers?.map((member) => (
                    <div
                        key={member.id}
                        className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
                    >
                        <img
                            src={member.profileImage}
                            alt={`${member.name}'s profile`}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-bold">{member.name}</h3>
                        <p className="text-gray-600">Biodata ID: {member.biodataId}</p>
                        <p className="text-gray-600">Biodata Type: {member.biodataType}</p>
                        <p className="text-gray-600">Age: {member.age}</p>
                        <p className="text-gray-600">Occupation: {member.occupation}</p>
                        <p className="text-gray-600">
                            Permanent Division: {member.permanentDivision}
                        </p>
                        <Link to={`/biodatas/${member.biodataId}`} className="mt-3 block text-center w-full bg-pink-500 text-white py-2 rounded-lg">View Profile</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PremiumMembers;
