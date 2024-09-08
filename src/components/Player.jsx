import React from "react";
import { useState } from "react";

const Player = ({ name, symbol, isActive }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isSaving, setIsSaving] = useState(name);
  function handleEdit() {
    setIsEdit((editing) => !editing);
  }
  function handleSave(e) {
    setIsSaving(e.target.value);
  }

  return (
    <li className={isActive ? "active"  : undefined}>
      <span className="player">
        {isEdit ? (
          <input type="text" required value={isSaving} onChange={handleSave} />
        ) : (
          <span className="player-name">{isSaving}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{!isEdit ? "Edit" : "Save"}</button>
    </li>
  );
};

export default Player;
