import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
    const axiosPrivate = useAxiosPrivate();

    const { data: bioData } = useQuery({
        queryKey: ["allBiodatas"],
        queryFn: async () => {
            const result = await axiosPrivate.get("/totalBiodata");
            return result.data;
        }
    });

    // Calculate statistics
    const mailBioData = bioData?.filter((data) => data.biodataType === "Male");
    const femaleBioData = bioData?.filter((data) => data.biodataType === "Female");
    const premiumBioData = bioData?.filter((data) => data.premiumStatus === "premium");
    const totalBioData = bioData?.length || 0;
    const totalMailBioData = mailBioData?.length || 0;
    const totalFemaleBioData = femaleBioData?.length || 0;
    const totalPremiumBioData = premiumBioData?.length || 0;

    // Pie chart data
    const pieData = {
        labels: ["Total Biodatas", "Male Biodatas", "Female Biodatas", "Premium Biodatas"],
        datasets: [
            {
                label: "Biodata Statistics",
                data: [totalBioData, totalMailBioData, totalFemaleBioData, totalPremiumBioData],
                backgroundColor: ["#4CAF50", "#2196F3", "#FF5722", "#FFC107"],
                hoverBackgroundColor: ["#45A049", "#1E88E5", "#E64A19", "#FFB300"],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            {/* Header */}
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-800">
                Admin Dashboard
            </h1>

            {/* Statistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">{totalBioData}</h2>
                    <p className="text-gray-600">Total Biodatas</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">{totalMailBioData}</h2>
                    <p className="text-gray-600">Male Biodatas</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">{totalFemaleBioData}</h2>
                    <p className="text-gray-600">Female Biodatas</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">{totalPremiumBioData}</h2>
                    <p className="text-gray-600">Premium Biodatas</p>
                </div>
            </div>

            {/* Pie Chart Section */}
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Biodata Distribution
                </h2>
                <div className="flex justify-center">
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        <Pie data={pieData} />
                    </div>
                </div>
            </div>

            {/* Extra Section */}
            <div className="mt-12 bg-blue-100 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Did You Know?
                </h3>
                <p className="text-gray-700">
                    Our platform has successfully helped connect over <span className="font-bold">{totalPremiumBioData}</span>{" "}
                    premium members with their life partners. With a growing number of biodatas, 
                    we aim to make matchmaking accessible and efficient for everyone.
                </p>
            </div>
        </div>
    );
};

export default AdminDashboard;
