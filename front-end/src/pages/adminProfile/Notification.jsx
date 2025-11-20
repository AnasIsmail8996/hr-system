import React from 'react';

const notificationsData = [
    {
        name: "Smith jones",
        time: "12:22",
        message: "fill up the quotation foam",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        name: "David robins",
        time: "12:22",
        message: "fill up the quotation foam",
        avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
        name: "Ethan jones",
        time: "12:22",
        message: "fill up the quotation foam",
        avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
        name: "Williams roy",
        time: "12:22",
        message: "fill up the quotation foam",
        avatar: "https://i.pravatar.cc/150?img=4"
    },
    {
        name: "Donald trump",
        time: "12:22",
        message: "fill up the quotation foam",
        avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "Kevin roy",
        time: "12:22",
        message: "fill up the quotation foam",
        avatar: "https://i.pravatar.cc/150?img=6"
    },
    {
        name: "Sam jones",
        time: "12:22",
        message: "fill up the quotation foam",
        avatar: "https://i.pravatar.cc/150?img=7"
    },
];

const Notification = () => {
    const todayCount = 2;

    return (
        <div className="w-full bg-white shadow-lg rounded-xl p-6 border border-gray-100">
            
            {/* Header */}
            <h2 className="text-2xl font-bold pb-4 border-b border-gray-200">
                Notifications
            </h2>
            
            {/* Notification Count */}
            <p className="pt-4 text-gray-600">
                You have <span className="font-semibold text-gray-900">{todayCount}</span> notifications today.
            </p>

            {/* Notification List */}
            <div className="mt-4 divide-y divide-gray-100 max-h-[70vh] overflow-y-scroll pr-2">
                {notificationsData.map((notification, index) => (
                    <div 
                        key={index}
                        className="flex items-start py-4 hover:bg-gray-50 transition rounded-lg px-2"
                    >
                        
                        {/* Avatar */}
                        <img 
                            src={notification.avatar}
                            alt="avatar"
                            className="w-12 h-12 rounded-full object-cover mr-4"
                        />

                        {/* Content */}
                        <div className="flex-grow">
                            <p className="text-sm">
                                <span className="font-semibold text-gray-900">
                                    {notification.name}
                                </span>
                                <span className="text-gray-700">, {notification.message}</span>
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>

                        {/* Menu Icon */}
                        <div className="ml-3 text-gray-400 hover:text-gray-700 cursor-pointer">
                            <span className="text-xl">&#x22EE;</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification;
