import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatBox1 from '../components/ChatBox1';
import { changeField, initialField, send } from '../modules/chat';

const ChatBoxContainer1 = () => {
  const { form } = useSelector(({ chat }) => ({
    form: chat.form,
  }));
  const dispatch = useDispatch();

  const [user, setUser] = useState('user1');

  const onSubmit = (e) => {
    e.preventDefault();
    // dispatch(send({ msg: form.msg, name: user })); //form의 msg에 꽂혀있는 것을 msg에, user1은 name에 꽂아준다.
    dispatch(send({ msg: form.msg, name: user }));
  };
  const onChange = (e) => {
    let msg = e.target.value;
    dispatch(changeField(e.target.value)); //form의msg에 꽂히게 된다.
  };

  return (
    //
    <div>
      <ChatBox1
        user={user}
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ChatBoxContainer1;
