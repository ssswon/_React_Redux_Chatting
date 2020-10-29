import React from 'react';
import { useSelector } from 'react-redux';

const ChatLog = ({ msg }) => {
  return { msg };
};

const ChatLogs = ({ form }) => {
  console.log(form[0]);

  return (
    <div>
      ChatLogs
      {/* {form.map((info, i) => (
        <ChatLog key={i} msg={info} />
      ))} */}
      chatLog
    </div>
  );
};

export default ChatLogs;
