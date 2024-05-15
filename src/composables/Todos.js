import { ref } from "vue";
import { useToDoStore } from "@/Stores/useToDoStore";

export function getTodos () {
    const isLoading = ref(false);
    const isReady = ref(false);
    const todos = ref([]);
    const error = ref(undefined);
    const store = useToDoStore();

    const fetchTodos = async() => {
        error.value = undefined;
        isLoading.value = true;
        isReady.value = false;
        console.log('Fetch loding...', isLoading.value);
        try {
            const data = fetch("https://jsonplaceholder.typicode.com/todos")
            .then(data => data.json())
            .then(data => {
                todos.value = data;
                store.setTodos(data);
                isReady.value = true;
            })
        } catch (e) {
            error.value = e.message;
        } finally {
            isLoading.value = false;
            console.log('Finally loding...', isLoading.value);
        }
    }
    fetchTodos();

    return { isLoading, isReady, todos, error };

}