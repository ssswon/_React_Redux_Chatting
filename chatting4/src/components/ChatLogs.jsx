import React from 'react';
import { useSelector } from 'react-redux';

const ChatLog = ({ msg, id }) => {
  return (
    <li>
      {id}:{msg}
    </li>
  );
};

const ChatLogs = ({ form }) => {
  console.log(form);

  return (
    //

    <div>
      ChatLogs
      <ul>
        {/* {form && form.map((info) => <ChatLog msg={info.msg} id={info.id} />)} */}
      </ul>
    </div>
  );
};

export default ChatLogs;
