<template>
    <div class="todo">
        <h2>ToDo</h2>
        <ToDoForm />
        <div class="todo-list-wrapper">
            <span v-if="loading" class="loader">Loading...</span>
            <span v-else>
                <div v-for="item in todos" :key="item.id">
                    <TodoListIem 
                    :userId="item.userId"
                    :id="item.id"
                    :title="item.title"
                    :completed="item.completed"
                    />
                </div>
            </span>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import TodoListIem from "./TodoListIem.vue";
    import ToDoForm from "./ToDoForm.vue";
    import { getTodos } from "../composables/Todos.js";
    
    const loading = ref(false);
    const { isLoading, isReady, todos, error } = getTodos();
    loading.value = isLoading.value;
</script>

<style scoped>
    .todo {
        width: 50%;
        margin: 0 auto;
        padding: 0.5rem;
    }
    h2 {
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
    }
    .todo-list-wrapper {
        display: block;
        border: 2px solid #aaa;
        padding: 0.5rem;
    }
    .loader {
        display: block;
        padding:1rem;
        text-align: center;
        margin:1rem auto;
    }
</style>