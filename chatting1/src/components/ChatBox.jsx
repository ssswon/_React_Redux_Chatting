import React from 'react';

const ChatBox = ({ onSubmit, form, onChange }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={form} onChange={onChange} />
      </form>
    </div>
  );
};

export default ChatBox;
