<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <!-- 임시 확인용 태그
      <p v-for="todo in todoList">{{ todoList }}</p> -->

        <!-- 할 일 목록 요소 컴포넌트  -->

        <!-- props로 받은 데이터 수정X 
            -> emit 이용해서 부모로 전달하여 수정 
            
            TodoItem -> TodoList -> App             -->
        <TodoListItem
          v-for="todo in todoList"
          :todoItem="todo"
          @toggle-completed="emit('toggle-completed', $event)"
          @delete-todo="emit('delete-todo', $event)"
        />
        <!-- $event : 자식 컴포넌트에서 방출된 payload 참조 변수($event = id) -->
      </ul>
    </div>
  </div>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

const props = defineProps({
  todoList: { type: Array, required: true },
});
const emit = defineEmits(['delete-todo', 'toggle-completed']);
</script>
