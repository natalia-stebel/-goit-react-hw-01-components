import {Profile} from "components/Profile/Profile"
import user from "./data/user"
import statistics from "./data/statistics"
import { Statistics} from "components/statistics/Statistics";

export const App = () => {
  return (
    <div>
     <Profile
     username={user.username}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
     />
      <Statistics title="Upload stats" stats={statistics}/>
      <Statistics stats={statistics}
        
       />
    </div>
  );
};
