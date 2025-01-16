import groups from "./assets/constants";
import EventPage from "./EventPage";
import GroupInfo from "./GroupInfo";
const LandingPage = () => {
  console.log(groups);
  return (
    <>
      {/* {groups.map((group,index) => {
       return <GroupInfo key={index} groupInfo={group} />;
      })} */}
      <EventPage groupInfo={groups[0]}/>
    </>
  );
};

export default LandingPage;
