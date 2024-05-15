import { defineStore } from "pinia";
import { ref } from "vue";

export const useToDoStore = defineStore('todos', () => {
    const isNewItem = ref(false);
    
    const todo = ref({
        userId: 0,
        id:0,
        title: '',
        completed: false
    });

    const addTodo = (todoTitle) => {
        todo.value.title = todoTitle;
    }

    return { addTodo, todo, isNewItem };
});