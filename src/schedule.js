import { useState } from 'react';

const scheduleData = {
    day0: [
        {
            title: 'Opening Ceremony',
            venue: 'Bhatnagar Auditorium',
            time: '6:30PM',
            link: '#',
        },
        {
            title: 'Stargazing Session',
            venue: 'Tata Steel Sports Complex',
            time: '8PM',
            link: '#',
        },
    ],
    
    day1: [
        {
            title: 'Case Study',
            venue: 'Maitrayee Auditorium',
            time: '9AM',
            link: '#',
        },
        {
            title: 'Lift Off',
            venue: 'MG Ground',
            time: '10AM',
            link: '#',
        },
        {
            title: 'Eggstravaganza',
            venue: 'Gymkhana',
            time: '10AM',
            link: '#',
        },
        {
            title: 'Hoverpod',
            venue: 'Vikramshila Arena',
            time: '11AM',
            link: '#',
        },
        {
            title: 'Pitch The Cosmos',
            venue: 'KCSTC',
            time: '1PM',
            link: '#',
        },
        {
            title: 'IUCAA Workshop',
            venue: 'Vikramshila V4',
            time: '1PM',
            link: '#',
        },
        {
            title: 'Space Quiz Prelims',
            venue: 'Maitrayee Auditorium',
            time: '2PM',
            link: '#',
        },
        {
            title: 'Cosmonath',
            venue: 'Maitrayee Auditorium',
            time: '4PM',
            link: '#',
        },
        {
            title: 'Guest Lecture',
            venue: 'Vikramshila V4',
            time: '4PM',
            link: '#',
        },
        {
            title: 'Talk Show',
            venue: 'Vikramshila V3',
            time: '7PM',
            link: '#',
        },
    ],    
    
    day2: [
        {
            title: 'Paper Presentation',
            venue: 'KCSTC',
            time: '9AM',
            link: '#',
        },
        {
            title: 'Astrobyte',
            venue: 'Maitrayee Auditorium',
            time: '9AM',
            link: '#',
        },
        {
            title: 'Ashish Mahabal',
            venue: 'Bhatnagar Auditorium',
            time: '9:30AM',
            link: '#',
        },
        {
            title: 'Lift Off',
            venue: 'MG Ground',
            time: '10AM',
            link: '#',
        },
        {
            title: 'Maze Runner',
            venue: 'Vikramshila Arena',
            time: '11AM',
            link: '#',
        },
        {
            title: 'Debdatta Mishra',
            venue: 'Vikramshila V4',
            time: '11:30AM',
            link: '#',
        },
        {
            title: 'Data Analytics',
            venue: 'Maitrayee Auditorium',
            time: '11:30AM',
            link: '#',
        },
        {
            title: 'Space Quiz',
            venue: 'Bhatnagar Auditorium',
            time: '12PM',
            link: '#',
        },
        {
            title: 'Dr. P SreeKumar',
            venue: 'Vikramshila V4',
            time: '3PM',
            link: '#',
        },
        {
            title: 'Closing Ceremony',
            venue: 'Vikramshila V2',
            time: '7PM',
            link: '#',
        },
    ],
    
};

const Schedule = () => {
    const [activeDay, setActiveDay] = useState('day0');

    return (
        <div className="schedule-container">
            <div className="day-buttons">
                {['day0', 'day1', 'day2'].map(day => (
                    <button
                        key={day}
                        className={activeDay === day ? 'active' : ''}
                        onClick={() => setActiveDay(day)}
                    >
                        {day.toUpperCase()}
                    </button>
                ))}
            </div>

            <div className="timeline">
                {scheduleData[activeDay].map((event, idx) => (
                    <div className={`timeline-item ${idx % 2 === 0 ? 'right' : 'left'}`} key={idx}>
                        <div className="timeline-content">
                            <h3>{event.title}</h3>
                            <p><i className="fas fa-location-dot"></i> {event.venue}</p>
                            <p><i className="fas fa-clock"></i> {event.time}</p>
                            <a href={event.link} className="btn">Know More</a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Schedule;
