// SortBar.js
import React from 'react';

function SortBar({ sortByAttribute }) {
  return (
  <div className='bg-warning-subtle'>
  <h2>Sort By:</h2>
  <button className="btn btn-success" onClick={() => sortByAttribute('health')}>Health</button><br/>
  <button className="btn btn-danger" onClick={() => sortByAttribute('damage')}>Damage</button><br/>
  <button  className="btn btn-info" onClick={() => sortByAttribute('armor')}>Armor</button><br/>
  </div>
  );
  }

export default SortBar;
