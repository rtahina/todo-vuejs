<script setup>
    import { storeToRefs } from 'pinia'
    import { ref, watch } from "vue";
    import TodoListIem from "./TodoListIem.vue";
    import { useToDoStore } from "@/Stores/useToDoStore";
    import Loader from "./Loader.vue"
    
    const isLoading = ref(false);
    const isReady = ref(false);
    const error = ref('');
    const items = ref([]);
    const store = useToDoStore();
    const { todo, isNewItem } = storeToRefs(store);
    const nbrItems = ref(0);
    const nbrCompleted = ref(0);

    const fetchTodos = async() => {
        error.value = undefined;
        isLoading.value = true;
        isReady.value = false;
        
        try {
            const data = fetch("https://jsonplaceholder.typicode.com/todos")
            .then(data => data.json())
            .then(data => {
                data = data.slice(0, 10); // 10 todos
                items.value = data;
                isReady.value = true;
                nbrItems.value = data.length;
                nbrCompleted.value = countCompleted();
            })
        } catch (e) {
            error.value = e.message;
        } finally {
            isLoading.value = false;
        }
    }
    fetchTodos();

    watch(isNewItem, () => {
        const newArr = [...items.value];
        const temp = todo.value; 
        newArr.push(temp);
        items.value = newArr;
        nbrItems.value = items.value.length;
        nbrCompleted.value = countCompleted();
        console.log('Add on list');
    });

    const countCompleted = () => {
        const completed = items.value.filter(item => {
            return item.completed;
        });

        return completed.length;
    }

    const toogleComplete = (id) => {
        items.value.find((o, i) => {
            if (o.id === id) {
                items.value[i] = { 
                    userId: o.userId, 
                    id: o.id, 
                    title: o.title, 
                    completed: !o.completed 
                };
                return true;
            }
        });
        nbrCompleted.value = countCompleted();
    }
</script>

<template>
    <span v-if="!isReady">
        <Loader />
    </span>
    <span v-else>
        <div class="stats">
            <span>{{ nbrItems }} items</span>
            <span>{{ nbrCompleted }} completed</span> 
            <span><input type="checkbox" /> Hide completed</span>
        </div>
        <div v-for="item in items" :key="item.id">
            <TodoListIem 
            :userId="item.userId"
            :id="item.id"
            :title="item.title"
            :completed="item.completed"
            @mark-complete="toogleComplete"
        />
        </div>
    </span>
</template>

<style scoped>
    .stats {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0.5rem;
        background-color: #efefef;
        margin-bottom: 0.5rem;
    }
</style>