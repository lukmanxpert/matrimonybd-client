const ContactUs = () => {
    const faqs = [
        {
            question: "How do I create an account?",
            answer: "Click on the Sign Up button on the homepage and follow the steps.",
        },
        {
            question: "Is my personal information secure?",
            answer: "Yes, we prioritize your privacy and ensure your data is protected.",
        },
        {
            question: "How do I contact customer support?",
            answer: "You can fill out the form below or email us at support@matrimony.com.",
        },
    ];

    const officeLocations = [
        {
            city: "New York",
            address: "123 Fifth Avenue, NY 10001",
            phone: "+1 212-555-1234",
        },
        {
            city: "London",
            address: "456 Oxford Street, London W1D 1AN",
            phone: "+44 20 7946 0958",
        },
        {
            city: "Dhaka",
            address: "789 Gulshan Avenue, Dhaka 1212",
            phone: "+880 123-456-7890",
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header Section */}
            <header className="bg-blue-600 text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-4 text-lg">
                    Have questions? We’re here to help. Reach out to us anytime.
                </p>
            </header>

            {/* Contact Form Section */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
                <form className="bg-white p-8 shadow-lg rounded-lg max-w-3xl mx-auto">
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="button"
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                    >
                        Send Message
                    </button>
                </form>
            </section>

            {/* Office Locations Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Offices</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {officeLocations.map((office, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                                <p className="text-gray-700">{office.address}</p>
                                <p className="text-gray-700 font-semibold mt-2">
                                    Phone: {office.phone}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                    <p className="text-lg mb-8">
                        Don’t hesitate to reach out to us. Our team is here to help.
                    </p>
                    <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
                        Contact Support
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
