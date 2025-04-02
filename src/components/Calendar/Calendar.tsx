'use client';

export default function Calendar() {
  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i;
    const period = hour >= 12 ? 'pm' : 'am';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:00${period}`;
  });

  return (
    <div className="h-full overflow-auto">
      <div className="grid grid-cols-7 border-x border-black dark:border-gray-600">
        {/* Header row with days */}
        <div className="border-x border-black dark:border-gray-600 p-1 flex flex-col border-b">
          <h2 className="text-3xl font-bold">Monday</h2>
        </div>
        <div className="border-x border-black dark:border-gray-600 p-1 flex flex-col border-b">
          <h2 className="text-3xl font-bold">Tuesday</h2>
        </div>
        <div className="border-x border-black dark:border-gray-600 p-1 flex flex-col border-b">
          <h2 className="text-3xl font-bold">Wednesday</h2>
        </div>
        <div className="border-x border-black dark:border-gray-600 p-1 flex flex-col border-b">
          <h2 className="text-3xl font-bold">Thursday</h2>
        </div>
        <div className="border-x border-black dark:border-gray-600 p-1 flex flex-col border-b">
          <h2 className="text-3xl font-bold">Friday</h2>
        </div>
        <div className="border-x border-black dark:border-gray-600 p-1 flex flex-col border-b">
          <h2 className="text-3xl font-bold">Saturday</h2>
        </div>
        <div className="border-x border-black dark:border-gray-600 p-1 flex flex-col border-b">
          <h2 className="text-3xl font-bold">Sunday</h2>
        </div>

        {/* Time slots */}
        {timeSlots.map((time, index) => (
          <>
            <div key={`monday-${index}`} className="border-x border-black dark:border-gray-600 h-24 pl-1">
              <div className="text-sm text-gray-500">{time}</div>
            </div>
            <div key={`tuesday-${index}`} className="border-x border-black dark:border-gray-600 h-24 pl-1">
              <div className="text-sm text-gray-500">{time}</div>
            </div>
            <div key={`wednesday-${index}`} className="border-x border-black dark:border-gray-600 h-24 pl-1">
              <div className="text-sm text-gray-500">{time}</div>
            </div>
            <div key={`thursday-${index}`} className="border-x border-black dark:border-gray-600 h-24 pl-1">
              <div className="text-sm text-gray-500">{time}</div>
            </div>
            <div key={`friday-${index}`} className="border-x border-black dark:border-gray-600 h-24 pl-1">
              <div className="text-sm text-gray-500">{time}</div>
            </div>
            <div key={`saturday-${index}`} className="border-x border-black dark:border-gray-600 h-24 pl-1">
              <div className="text-sm text-gray-500">{time}</div>
            </div>
            <div key={`sunday-${index}`} className="border-x border-black dark:border-gray-600 h-24 pl-1">
              <div className="text-sm text-gray-500">{time}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
} 