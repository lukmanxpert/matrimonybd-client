const AboutUs = () => {
    const teamMembers = [
        { id: 1, name: "John Doe", role: "Founder & CEO", image: "https://i.ibb.co.com/zXKxW8N/images-2.jpg" },
        { id: 2, name: "Jane Smith", role: "CTO", image: "https://i.ibb.co.com/tDvY3rP/csm-Person-Yury-Prof-Foto-An-LI-Footgrafie-2-JPG-94f12fbf25.jpg" },
        { id: 3, name: "Alice Johnson", role: "Marketing Head", image: "https://i.ibb.co.com/82PkPvJ/Kayla-Person.jpg" },
    ];

    const testimonials = [
        {
            id: 1,
            name: "Emily Brown",
            feedback:
                "Thanks to this platform, I found my perfect life partner. The experience was smooth and wonderful!",
            image: "https://i.ibb.co.com/hgjqNxq/360-F-383258331-D8ima-EMl8-Q3lf7-EKU2-Pi78-Cn0-R7-Kk-W9o.jpg",
        },
        {
            id: 2,
            name: "Michael Green",
            feedback:
                "A great platform with verified profiles and excellent search features. Highly recommended!",
            image: "https://i.ibb.co.com/HPRWcwq/360-F-243123463-z-Tooub557x-EWABDLk0j-Jkl-Dy-LSGl2jrr.jpg",
        },
    ];

    return (
        <div className="bg-gray-100">
            {/* Header Section */}
            <header className="bg-blue-600 text-white py-16 text-center">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-4 text-lg">
                    Connecting people to build meaningful relationships.
                </p>
            </header>

            {/* Mission and Vision Section */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-700 text-lg">
                            Our mission is to simplify the journey of finding a life partner
                            by providing a secure, trustworthy, and user-friendly platform.
                            We aim to build a community of meaningful connections.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-gray-700 text-lg">
                            Our vision is to be the most reliable and widely-used matrimony
                            platform, connecting people across cultures and communities to
                            create lifelong relationships.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 mx-auto rounded-full mb-4"
                                />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 mx-auto rounded-full mb-4"
                            />
                            <p className="text-gray-700 italic">{testimonial.feedback}</p>
                            <h3 className="text-lg font-bold mt-4">{testimonial.name}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Find Your Match?</h2>
                    <p className="text-lg mb-8">
                        Join our platform today and start your journey towards a meaningful
                        relationship.
                    </p>
                    <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
                        Join Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
