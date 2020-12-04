import { observer, useObserver } from 'mobx-react';
import React, { useState } from 'react';
import { useStores } from '../stores';

const Main = () => {
  const { counterStore, todoStore } = useStores();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };
  const handleClickAdd = () => {
    todoStore.addTodo({
      title,
      content
    });
    setTitle('');
    setContent('');
  };
  const handleClickDel = (id) => {
    todoStore.delTodo(id);
  }

  return useObserver(() => (
    <div>
      <div>
        {counterStore.cnt}
        <button onClick={() => counterStore.increase()}>+</button>
        <button onClick={() => counterStore.decrease()}>-</button>
      </div>
      <div>
        <input value={title} onChange={handleChangeTitle} />
        <input value={content} onChange={handleChangeContent} />
        <button onClick={handleClickAdd}>addTodo</button>
      </div>
      <div>
        {todoStore.todo.map((elem, i) => (
          <div key={i}>
            <div>{elem.title}</div>
            <div>{elem.content}</div>
            <button onClick={() => handleClickDel(i)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  ));
}

export default observer(Main);
