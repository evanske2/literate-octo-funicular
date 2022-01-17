// FanInformation.js

const FanInformation = (props) => {
    console.log(props);

    const {teamName, number, city, stadium, followTeamFunction} = props;

    return (
        <div>
            <h2>Welcome to the fan area of {teamName}</h2>
            <p>They are {number} and 4</p>
            <button onClick={ () => { followTeamFunction(teamName) } }>Follow Team</button>
            <p>They are from {city} and their stadium is {stadium.name} and it seats {stadium.capacity}.</p>
        </div>
    )
}

export default FanInformation;


// What is happening:

// We have defined the followTeam function in the App.js
// Then we pass down the followTeam function into our FanInformation component through the followTeamFunction prop
// Then inside of the FanInformation component we can access that function through the props object by using props.followTeamFunction
// So essentially we are defining a function in the App.js component and are able to pass that function down to the FanInformation component through props

// Props are kind of like a tunnel that we can pass functions, values, or whatever we want from Parent components to their children components

