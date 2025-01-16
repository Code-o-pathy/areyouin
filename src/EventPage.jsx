const EventPage = ({ groupInfo }) => {
  const {
    title,
    date,
    frequency,
    noOfMembers,
    noOfReacted,
    options,
    reactors,
    timeOfNotification,
  } = groupInfo;
  return (
    <div className="p-1 shadow-lg border-2 border-blue-50 mt-2 min-h-screen rounded-lg">
      {/* header */}
      <div>
        <h1 className="text-3xl font-pacifico text-center">{title}</h1>
      </div>

      {/* groupInfo */}
      <div className="flex justify-between shadow-lg mt-3 px-3">
        <h2 className="font-mono">{date}</h2>
        <h2 className="font-serif">{frequency}</h2>
      </div>
      <div className="flex justify-evenly mt-3 shadow-lg pb-2">
        {options.map((option, index) => {
          return (
            <div className="bg-gray-400 rounded-full px-4 py-2" key={index}>
              {option}
            </div>
          );
        })}
      </div>

      {/* reactors */}

      <div>
        {Object.entries(reactors).forEach(([key, value]) => {
          console.log(`Name: ${key}, Response: ${value}`);
        })}
      </div>
    </div>
  );
};

export default EventPage;
