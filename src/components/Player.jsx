import React from "react";
import { useState } from "react";

const Player = ({ name, symbol, isActive, onChangeName }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleEdit() {
    setIsEdit((editing) => !editing);
    if (isEdit) onChangeName(symbol, playerName);
  }
  function handleSave(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEdit ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleSave}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{!isEdit ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;
