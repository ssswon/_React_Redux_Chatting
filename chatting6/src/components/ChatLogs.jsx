import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { send } from '../modules/chat';

const ChatLog = ({ id, msg }) => {
  return (
    <li>
      {id}:{msg}
    </li>
  );
};

const ChatLogs = ({ msgs }) => {
  return (
    //
    <div>
      {msgs.map((msg) => (
        <ChatLog id={msg.id} msg={msg.msg} />
      ))}
    </div>
  );
};

export default ChatLogs;
