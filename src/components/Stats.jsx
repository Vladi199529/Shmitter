import Avatar from "./Avatar.jsx";


const Stats = ({user,stats}) => {
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar user={user}/>
                {user.name}
            </div>
            <div className={'stats'}>
                Followers: {stats.followers}
            </div>
            <div className={'stats'}>
                Following: {stats.following}
            </div>
        </div>
    );
};

export default Stats;