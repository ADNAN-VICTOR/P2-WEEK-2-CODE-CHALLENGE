// BotCollection.js
import React from 'react';

function BotCollection({ bots, addToArmy, showBotSpecs }) {
  return (
    <div>
      <h1>Bot Collection</h1>
      <div id="botContainer" className="d-flex flex-row flex-wrap p-2 ">
        {bots.map(bot => (
          <div className="bg-secondary-subtle m-3"  key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h2>{bot.name}</h2>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <button className="btn btn-success" onClick={() => addToArmy(bot)}>Add to Army</button>
            <button className="btn btn-info" onClick={() => showBotSpecs(bot)}>View Specs</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default BotCollection;
