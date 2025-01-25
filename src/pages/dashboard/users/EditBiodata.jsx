import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const EditBiodata = ({ biodataId }) => {
    const user = useAuth();
    const [formData, setFormData] = useState({
        biodataType: "Male",
        name: "",
        profileImage: "",
        dob: "",
        height: "",
        weight: "",
        age: "",
        occupation: "",
        race: "",
        fathersName: "",
        mothersName: "",
        permanentDivision: "",
        presentDivision: "",
        partnerAge: "",
        partnerHeight: "",
        partnerWeight: "",
        email: "",
        mobileNumber: "",
    });

    useEffect(() => {
        axios.get(`/api/biodata/${biodataId}`).then((response) => {
            setFormData(response.data);
        });
    }, [biodataId]);

    const heightOptions = Array.from({ length: 121 }, (_, i) => 121 + i);
    const weightOptions = Array.from({ length: 102 }, (_, i) => 40 + i);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/biodata/${biodataId}`, formData)
            .then(() => alert("Biodata updated successfully!"))
            .catch((error) => alert("Error updating biodata: " + error.message));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Edit Biodata</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Biodata Type</label>
                        <select
                            name="biodataType"
                            defaultValue={formData.biodataType}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Profile Image Link</label>
                        <input
                            type="url"
                            name="profileImage"
                            defaultValue={formData.profileImage}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter profile image URL"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            defaultValue={formData.dob}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Height</label>
                        <select
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            {heightOptions.map((height) => (
                                <option key={height} value={height}>
                                    {height} cm
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Weight</label>
                        <select
                            name="weight"
                            value={formData.weight}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            {weightOptions.map((weight) => (
                                <option key={weight} value={weight}>
                                    {weight} kg
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Age</label>
                        <input
                            type="number"
                            name="age"
                            defaultValue={formData.age}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter your age"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Occupation</label>
                        <select
                            name="occupation"
                            defaultValue={formData.occupation}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="" disabled>
                                Select Occupation
                            </option>
                            <option value="Student">Student</option>
                            <option value="Job">Job</option>
                            <option value="Housewife">Housewife</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Race</label>
                        <select
                            name="race"
                            defaultValue={formData.race}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="" disabled>
                                Select Race
                            </option>
                            <option value="Fair">Fair</option>
                            <option value="Medium">Medium</option>
                            <option value="Dark">Dark</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Father&apos;s Name</label>
                        <input
                            type="text"
                            name="fathersName"
                            defaultValue={formData.fathersName}
                            onChange={handleChange}
                            placeholder="Enter Father's Name"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-1 font-medium">Mother&apos;s Name</label>
                        <input
                            type="text"
                            name="mothersName"
                            defaultValue={formData.mothersName}
                            onChange={handleChange}
                            placeholder="Enter Mother's Name"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Permanent Division</label>
                        <select
                            name="permanentDivision"
                            defaultValue={formData.permanentDivision}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="" disabled>
                                Select Permanent Division
                            </option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Mymensingh">Mymensingh</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="block mb-1 font-medium">Present Division</label>
                        <select
                            name="presentDivision"
                            defaultValue={formData.presentDivision}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="" disabled>
                                Select Present Division
                            </option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chattogram">Chattogram</option>
                            <option value="Rangpur">Rangpur</option>
                            <option value="Barisal">Barisal</option>
                            <option value="Khulna">Khulna</option>
                            <option value="Mymensingh">Mymensingh</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="block mb-1 font-medium">Expected Partner Age</label>
                        <input
                            type="number"
                            name="partnerAge"
                            defaultValue={formData.partnerAge}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter expected partner age"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-1 font-medium">Expected Partner Height</label>
                        <select
                            name="partnerHeight"
                            defaultValue={formData.partnerHeight}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            {heightOptions.map((height) => (
                                <option key={height} value={height}>
                                    {height} cm
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-4">
                        <label className="block mb-1 font-medium">Expected Partner Weight</label>
                        <select
                            name="partnerWeight"
                            defaultValue={formData.partnerWeight}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            {weightOptions.map((weight) => (
                                <option key={weight} value={weight}>
                                    {weight} kg
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user?.email}
                            readOnly
                            className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Mobile Number</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            defaultValue={formData.mobileNumber}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            placeholder="Enter mobile number"
                            required
                        />
                    </div>
                </div>
                <div className="mt-4 flex justify-between">
                    <button
                        type="button"
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        onClick={() => alert("Publish functionality pending")}
                    >
                        Save and Publish Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditBiodata;
