const GroupInfo = ({ groupInfo }) => {
  const { title, noOfMembers, date,noOfReacted } = groupInfo;
  return (
    <div className="shadow border-2 border-blue-50 mx-3 my-2 px-1 py-1 rounded-lg h-28">
      <div className="flex justify-between mr-2">
        <h2 className="text-2xl font-medium mt-2">{title}</h2>
      </div>
      <div className="flex justify-between mr-2  mt-7">
        <p className="text-lg">{date}</p>
        <p className="text-lg">{Number(noOfReacted)}/{Number(noOfMembers)}</p>
      </div>
    </div>
  );
};

export default GroupInfo;
