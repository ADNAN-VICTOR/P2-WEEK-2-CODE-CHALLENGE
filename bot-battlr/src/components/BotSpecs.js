
import React from 'react';

// BotSpecs Page Component
function BotSpecs({ bot, goBackToList, enlistBot }) {
  return (
    <div id="specs" className='bg-secondary-subtle' >
      <h1>{bot.name} Specs</h1>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <button className='btn btn-warning' onClick={goBackToList}>Back to List</button>
      <button className='btn btn-success' onClick={() => enlistBot(bot)}>Enlist</button>
    </div>
  );
}

  
  

export default BotSpecs;
