
import React from 'react';
function YourBotArmy({ army, removeFromArmy }) {
  return (
    <div className='bg-warning'>
      <h1 >YOUR BOT ARMY</h1>
      <div className='d-flex flex-row flex-wrap p-2'>
        {army.map(bot => (
          <div className="bg-secondary-subtle m-3" key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>{bot.name}</h2>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <button className="btn btn-danger"onClick={() => removeFromArmy(bot.id)}>Remove from Army</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
