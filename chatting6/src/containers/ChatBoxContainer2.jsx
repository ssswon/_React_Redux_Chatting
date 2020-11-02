import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatBox2 from '../components/ChatBox2';
import {
  updateMessages,
  changeField,
  initialField,
  send,
} from '../modules/chat';

const ChatBoxContainer2 = () => {
  const { form } = useSelector(({ chat }) => ({
    form: chat.form,
  }));
  const dispatch = useDispatch();

  const [user, setUser] = useState('user2');

  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(send({ msg: form.msg, name: user })); //form의 msg에 꽂혀있는 것을 msg에, user1은 name에 꽂아준다.
    dispatch(send({ msg: form.msg, name: user }));
    dispatch(updateMessages());

    dispatch(initialField());
  };
  const onChange = (e) => {
    let msg = e.target.value;
    dispatch(changeField(e.target.value)); //form의msg에 꽂히게 된다.
  };

  return (
    //
    <div>
      <ChatBox2
        user={user}
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ChatBoxContainer2;
