import TeamCard from './TeamCard';
import SecData from './data/nssc_team_secy.json';
import HeadData from './data/nssc_team_head.json';
import SubheadData from './data/nssc_team_subhead.json'

const Teams = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '40px 0', textAlign: 'center',marginTop: '4.5rem' }}>
      <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '2rem' }}>HEADS</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {SecData.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
            socials={member.socials}
            />
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {HeadData.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
            socials={member.socials}
            />
        ))}
      </div>
      <h2 style={{ color: 'white', fontSize: '2.5rem', margin: '2rem' }}>SUB-HEADS</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {SubheadData.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
            socials={member.socials}
            />
        ))}
      </div>
    </div>
  );
};

export default Teams;
