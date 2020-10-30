import React from 'react';

const ChatBox = ({ user1, onSubmit, form, onChange }) => {
  return (
    <div>
      CHATBOX
      <form onSubmit={onSubmit}>
        <input name={user1} type="text" value={form.msg} onChange={onChange} />
      </form>
    </div>
  );
};

export default ChatBox;
