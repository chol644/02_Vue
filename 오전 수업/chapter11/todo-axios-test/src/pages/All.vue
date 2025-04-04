<template>
  <div>
    <h1>All(전체조회)</h1>
    <table class="table table-bordered">
      <thead>
        <th>Done</th>
        <th>ID</th>
        <th>Todo</th>
        <th>Description</th>
        <th>Delete</th>
      </thead>
      <tbody>
        <tr v-for="todo in state.todos" :key="todo.id">
          <td>
            <input
              type="checkbox"
              :checked="todo.done"
              @change="updateTodo(todo)"
            />
          </td>
          <td>{{ todo.id }}</td>
          <td>{{ todo.todo }}</td>
          <td>{{ todo.desc }}</td>
          <!-- id만 있어도 삭제가능하므로 클릭 시 id만 전달 -->
          <td><button @click="deleteTodo(todo.id)">삭제</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import axios from 'axios';

// 상태 변수 선언 -> 값 변경 시 반응 -> 컴포넌트 다시 랜더링
const state = reactive({ todos: [] });

// 비동기로 서버로부터 모든 할일 목록 얻어오기
const fetchTodoList = async () => {
  // /api === http://localhost:3000/
  const response = await axios.get('/api/todos'); // 비동기 통신 기다려라

  state.todos = response.data; // 조회 결과를 state에 저장
};

// 할일 목록 얻어오기 함수
fetchTodoList();

// 할일 완료 여부 수정
const updateTodo = async (todo) => {
  todo.done = !todo.done; // true <-> false

  // 비동기로 할일 완료 여부 수정. 비동기 기다리기 위해서 await 사용
  const response = await axios.put(`/api/todos/${todo.id}`, todo);

  // 콘솔로 변경된 todo 확인
  console.log(response.data);
};

// 비동기로 할일 삭제
const deleteTodo = async (id) => {
  const response = await axios.delete(`/api/todos/${id}`);
  console.log('삭제된 todo:', response.data);

  // 삭제된 할일을 state.todos에서 찾아서 제거. 현재 id와 받은 id가 다른 경우 유지.
  state.todos = state.todos.filter((todo) => todo.id !== id);
};
</script>
