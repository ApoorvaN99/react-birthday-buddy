import { useState } from 'react';

export const ToggleButton = ({ label, toggled, toggleSendEmail }) => {
  const [isToggled, toggle] = useState(toggled);

  const handleToggle = () => {
    toggle(!isToggled);
    toggleSendEmail(!isToggled);
  };

  return (
    <label>
      <input
        type="checkbox"
        defaultChecked={isToggled}
        onClick={handleToggle}
      />
      {label}
    </label>
  );
};
