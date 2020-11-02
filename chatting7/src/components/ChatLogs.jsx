import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { send } from '../modules/chat';

const ChatLog = ({ name, msg }) => {
  return (
    <li>
      {name}:{msg}
    </li>
  );
};

const ChatLogs = ({ msgs }) => {
  return (
    //
    <div>
      {msgs.map((msg) => (
        <ChatLog name={msg.name} msg={msg.msg} />
      ))}
    </div>
  );
};

export default ChatLogs;
