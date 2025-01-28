import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useIsPremium from "../../hooks/useIsPremium";
import { FaHeart } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const ViewBiodatas = () => {
    const auth = useAuth()
    const { biodataId } = useParams()
    const axiosPrivate = useAxiosPrivate()
    const { isPremium, isPending } = useIsPremium();
    const { data: biodata } = useQuery({
        queryKey: ["biodata"],
        queryFn: async () => {
            try {
                const result = await axiosPrivate.get(`/biodatas/${biodataId}`)
                return result.data;
            } catch (error) {
                console.log(error);
            }
        }
    })
    const handleAddToFavourites = async () => {
        const favouriteData = {
            name: biodata?.name,
            biodataId: biodata?.biodataId,
            permanentAddress: biodata?.permanentDivision,
            occupation: biodata?.occupation,
            authEmail: auth.email
        }
        try {
            const result = await axiosPrivate.post("/addToFavourites", favouriteData);
            if (result.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Added to favourites!",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="max-w-7xl mx-auto p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">My Biodata</h1>
                <button onClick={handleAddToFavourites} className="text-2xl text-red-600 hover:scale-125 transition" title="add to favourite"><FaHeart /></button>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Biodata Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <img className="" src={biodata?.profileImage} alt={biodata?.name} />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                        <p>
                            <strong>Biodata ID:</strong> {biodata?.biodataId || "N/A"}
                        </p>
                        <p>
                            <strong>Name:</strong> {biodata?.name || "N/A"}
                        </p>
                        <p>
                            <strong>Date of Birth:</strong> {biodata?.dob || "N/A"}
                        </p>
                        <p>
                            <strong>Age:</strong> {biodata?.age || "N/A"}
                        </p>
                        <p>
                            <strong>Height:</strong> {biodata?.height || "N/A"} cm
                        </p>
                        <p>
                            <strong>Weight:</strong> {biodata?.weight || "N/A"} kg
                        </p>
                        <p>
                            <strong>Occupation:</strong> {biodata?.occupation || "N/A"}
                        </p>
                        <p>
                            <strong>Race:</strong> {biodata?.race || "N/A"}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Biodata Type</h3>
                        <p>
                            <strong>Type:</strong> {biodata?.biodataType || "N/A"}
                        </p>
                    </div>

                    {
                        isPending ? <div></div> : isPremium ? <div>
                            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                            <p>
                                <strong>Email:</strong> {biodata?.email || "N/A"}
                            </p>
                            <p>
                                <strong>Mobile Number:</strong> {biodata?.mobileNumber || "N/A"}
                            </p>
                        </div> : <div>
                            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                            <p className="text-red-700">
                                <strong>Email:</strong> To show, you need to be a premium user.
                            </p>
                            <p className="text-red-700">
                                <strong>Mobile Number:</strong> To show, you need to be a premium user.
                            </p>
                            <button className="px-4 py-2 my-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                Request Contact Info
                            </button>
                        </div>
                    }



                    <div>
                        <h3 className="text-lg font-semibold mb-2">Family Details</h3>
                        <p>
                            <strong>Father&apos;s Name:</strong> {biodata?.fathersName || "N/A"}
                        </p>
                        <p>
                            <strong>Mother&apos;s Name:</strong> {biodata?.mothersName || "N/A"}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Location Details</h3>
                        <p>
                            <strong>Permanent Division:</strong>{" "}
                            {biodata?.permanentDivision || "N/A"}
                        </p>
                        <p>
                            <strong>Present Division:</strong>{" "}
                            {biodata?.presentDivision || "N/A"}
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-lg font-semibold mb-2">Partner Preferences</h3>
                        <p>
                            <strong>Preferred Age:</strong> {biodata?.partnerAge || "N/A"}
                        </p>
                        <p>
                            <strong>Preferred Height:</strong>{" "}
                            {biodata?.partnerHeight || "N/A"} cm
                        </p>
                        <p>
                            <strong>Preferred Weight:</strong>{" "}
                            {biodata?.partnerWeight || "N/A"} kg
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewBiodatas;