import React, { useState } from 'react';

const ChatBox1 = ({ user, onSubmit, form, onChange }) => {
  return (
    <div>
      CHATBOX1
      <form onSubmit={onSubmit}>
        <input name={user} type="text" value={form.msg} onChange={onChange} />
      </form>
    </div>
  );
};

export default ChatBox1;
