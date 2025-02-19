import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { useState } from "react";

const PremiumMembers = () => {
    const axiosPublic = useAxiosPublic();
    const [sortOrder, setSortOrder] = useState("ascending"); // State for sorting

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

    // Sorting function
    const sortedMembers = premiumMembers
        ? [...premiumMembers].sort((a, b) => {
            if (sortOrder === "ascending") return a.age - b.age;
            return b.age - a.age;
        })
        : [];

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
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h2 className="text-2xl md:text-4xl font-bold">Premium Members</h2>
                <div className="mt-4 md:mt-0">
                    <label htmlFor="sortOrder" className="mr-2 text-gray-600">
                        Sort by Age:
                    </label>
                    <select
                        id="sortOrder"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none"
                    >
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedMembers.map((member) => (
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
                        <Link
                            to={`/biodatas/${member.biodataId}`}
                            className="mt-3 block text-center w-full bg-primary text-white py-2 rounded-lg hover:bg-darkPrimary transition"
                        >
                            View Profile
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PremiumMembers;
