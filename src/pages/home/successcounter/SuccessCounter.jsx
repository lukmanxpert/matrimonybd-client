const SuccessCounter = () => {
    const stats = [
        { id: 1, label: "Total Biodatas", value: 500, icon: "📂" },
        { id: 2, label: "Boys' Biodatas", value: 300, icon: "👦" },
        { id: 3, label: "Girls' Biodatas", value: 200, icon: "👧" },
        { id: 4, label: "Marriages Completed", value: 120, icon: "💍" },
    ];

    return (
        <div className="p-4 md:p-8 bg-white">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
                Success Counter
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className="flex flex-col items-center bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition"
                    >
                        <div className="text-4xl md:text-6xl mb-4">{stat.icon}</div>
                        <h3 className="text-2xl font-bold">{stat.value}</h3>
                        <p className="text-gray-600 text-center">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuccessCounter;
