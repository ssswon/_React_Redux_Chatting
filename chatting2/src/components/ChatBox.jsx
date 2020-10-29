import React from 'react';

const ChatBox = ({ onSubmit, form, onChange }) => {
  return (
    <div>
      CHATBOX
      <form onSubmit={onSubmit}>
        <input type="text" value={form.msg} onChange={onChange} />
      </form>
    </div>
  );
};

export default ChatBox;
