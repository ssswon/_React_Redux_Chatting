import React, { useState } from 'react';

const ChatBox2 = ({ user, onSubmit, form, onChange }) => {
  return (
    <div>
      CHATBOX2
      <form onSubmit={onSubmit}>
        <input name={user} type="text" onChange={onChange} />
      </form>
    </div>
  );
};

export default ChatBox2;
