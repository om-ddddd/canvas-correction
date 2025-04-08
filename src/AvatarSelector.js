import { useState, useEffect } from 'react';
const avatars = [
  { id: 'astronaut', icon: 'fas fa-user-astronaut' },
  { id: 'rocket', icon: 'fas fa-rocket' },
  { id: 'satellite', icon: 'fas fa-satellite' },
  { id: 'alien', icon: 'fad fab fa-reddit-alien' },
  { id: 'moon', icon: 'fas fa-moon' },
  { id: 'meteor', icon: 'fas fa-meteor' },
  { id: 'earth', icon: 'fas fa-earth' },
  { id: 'sun', icon: 'fas fa-sun' },
  { id: 'spaceshuttle', icon: 'fas fa-space-shuttle' },
];

const AvatarSelector = ({ onSelect }) => {
  const [selected, setSelected] = useState(localStorage.getItem('avatar') || 'fa-user-astronaut');

  useEffect(() => {
    localStorage.setItem('avatar', selected);
    if (onSelect) onSelect(selected);
  }, [selected, onSelect]);

  return (
    <div className="avatar-selector">
      <h3>Select Your Avatar</h3>
      <div className="avatar-grid">
        {avatars.map(({ id, icon }) => (
          <div
            key={id}
            className={`avatar-option ${selected === icon ? 'selected' : ''}`}
            onClick={() => setSelected(icon)}
          >
            <i className={`${icon}`}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
