import React from 'react';
import { useSelector } from 'react-redux';

const ChatLog = ({ msg, id, name }) => {
  return (
    <li>
      {name}:{msg}
    </li>
  );
};

const ChatLogs = (form) => {
  return (
    //

    <div>
      ChatLogs
      {console.log(form)}
      <ul>
        {/* {form &&
          form.map((info) => (
            <ChatLog msg={info.msg} id={info.id} name={info.name} />
          ))} */}
      </ul>
    </div>
  );
};

export default ChatLogs;
