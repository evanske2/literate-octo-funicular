import FanInformation from './FanInformation';
import PageHeading from './PageHeading';

function App() {

  const BirbsTeam = {
    id: 1,
    name: 'Sports Birbs',
    city: 'Marchmount',
    stadium: {
      name: 'Birbs Nest',
      capacity: 50000
    }
  } 

  const newBirbsTeam = {
    id: 2,
    name: 'Better Birbs',
    city: 'Marchmount',
    stadium: {
      name: 'Birbs Roost',
      capacity: 50001
    }
  }

  const sportsTeams = [BirbsTeam, newBirbsTeam];

  const followTeam = (name) => {
    console.log(`You're following ${name}`);
  }

  return (
    <div>
      <PageHeading>
        <h1>All the sports teams</h1>
        <h2>All the time</h2>
      </PageHeading>
      <div>
        {
          sportsTeams.map( (team, index) => {
            return (
              <FanInformation
                key = {team.id}
                teamName = {team.name}
                number = {index}
                city = {team.city}
                stadium = {team.stadium}
                followTeamFunction = {followTeam}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
