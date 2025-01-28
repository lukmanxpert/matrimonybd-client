import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Biodatas = () => {
    const axiosPublic = useAxiosPublic();
    const [filters, setFilters] = useState({
        ageFrom: "",
        ageTo: "",
        biodataType: "",
        presentDivision: ""
    });

    const { data: biodatas = [] } = useQuery({
        queryKey: ["biodatas"],
        queryFn: async () => {
            try {
                const result = await axiosPublic.get("/biodatas");
                return result.data;
            } catch (error) {
                console.log(error);
            }
        }
    });

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setFilters({
            ageFrom: "",
            ageTo: "",
            biodataType: "",
            presentDivision: ""
        });
    };

    const filteredBiodatas = biodatas.filter((biodata) => {
        return (
            (!filters.ageFrom || Number(biodata.age) >= Number(filters.ageFrom)) &&
            (!filters.ageTo || Number(biodata.age) <= Number(filters.ageTo)) &&
            (!filters.biodataType || biodata.biodataType === filters.biodataType) &&
            (!filters.presentDivision || biodata.presentDivision === filters.presentDivision)
        );
    });

    return (
        <div className="container mx-auto p-4">
            <Tabs>
                <TabList className="flex border-b">
                    <Tab className="px-4 py-2 cursor-pointer">Biodatas</Tab>
                    <Tab className="px-4 py-2 cursor-pointer">Filter</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {filteredBiodatas.map((biodata) => (
                            <div key={biodata._id} className="border rounded-lg p-4 shadow-md">
                                <img src={biodata.profileImage} alt={biodata.name} className="w-20 h-20 rounded-full mx-auto" />
                                <h2 className="text-lg font-bold text-center">{biodata.name}</h2>
                                <p className="text-center">Biodata No: {biodata.biodataId}</p>
                                <p className="text-center">Age: {biodata.age}</p>
                                <p className="text-center">Division: {biodata.presentDivision}</p>
                                <p className="text-center">Occupation: {biodata.occupation}</p>
                                <Link to={`/biodatas/${biodata.biodataId}`} className="mt-3 block text-center w-full bg-pink-500 text-white py-2 rounded-lg">View Profile</Link>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="p-4 border rounded-lg shadow-md">
                        <label>Age Range:</label>
                        <div className="flex gap-2">
                            <input type="number" name="ageFrom" placeholder="From" value={filters.ageFrom} onChange={handleFilterChange} className="w-1/2 p-2 border rounded" />
                            <input type="number" name="ageTo" placeholder="To" value={filters.ageTo} onChange={handleFilterChange} className="w-1/2 p-2 border rounded" />
                        </div>

                        <label>Biodata Type:</label>
                        <select name="biodataType" onChange={handleFilterChange} className="w-full p-2 border rounded">
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                        <label>Present Division:</label>
                        <select name="presentDivision" onChange={handleFilterChange} className="w-full p-2 border rounded">
                            <option value="">Select</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Mymensingh">Mymensingh</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>

                        <button onClick={handleReset} className="mt-4 w-full bg-gray-500 text-white py-2 rounded-lg">
                            Reset Filters
                        </button>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Biodatas;
