import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);
  const [classesFilter, setClassesFilter] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('https://json-3qco.onrender.com/bots')
      .then(response => response.json())
      .then(data => {
        setBots(data);
        setFilteredBots(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addToArmy = (bot) => {
    setArmy([...army, bot]);
    setFilteredBots(filteredBots.filter(b => b.id !== bot.id));
  };

  const removeFromArmy = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
    setFilteredBots([...filteredBots, bots.find(bot => bot.id === botId)]);
  };

  const showBotSpecs = (bot) => {
    setSelectedBot(bot);
  };

  const sortByAttribute = (attribute) => {
    const sortedBots = [...filteredBots].sort((a, b) => {
      if (a[attribute] < b[attribute]) return -1;
      if (a[attribute] > b[attribute]) return 1;
      return 0;
    });
    setFilteredBots(sortedBots);
  };

  const applyFilter = (cls) => {
    if (classesFilter.includes(cls)) {
      setClassesFilter(classesFilter.filter(filterCls => filterCls !== cls));
    } else {
      setClassesFilter([...classesFilter, cls]);
    }
  };

  const filteredAndSortedBots = filteredBots
    .filter(bot => classesFilter.length === 0 || classesFilter.includes(bot.bot_class));

  return (
    <div>
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} />
      <SortBar sortByAttribute={sortByAttribute} />
      <Filter classes={['Support', 'Medic', 'Assault', 'Defender', 'Captain', 'Witch']} applyFilter={applyFilter} />
      {selectedBot ? (
        <BotSpecs bot={selectedBot} goBackToList={() => setSelectedBot(null)} enlistBot={addToArmy} />
      ) : (
        <BotCollection bots={filteredAndSortedBots} addToArmy={addToArmy} showBotSpecs={showBotSpecs} />
      )}
      
    </div>
  );
}

export default App;
