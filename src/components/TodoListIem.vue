<script setup>
    
    const props = defineProps({
        userId: {
            type: Number,
            default: 0
        },
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits(['markComplete']);

    const makeComplete = (id) => {
        emit('markComplete', id);
    }
</script>

<template>        
    <span class="todo-list-item">
        <input type="checkbox" />
        <span :class="{ completed: completed }" 
            @click="makeComplete(id)" 
            :title="'Click to mark as ' + (completed ? 'todo' : 'completed')">{{ title }}
        </span>
        <button>Delete</button>
    </span>
</template>

<style scoped>
.todo-list-item {
    display: flex;
    margin-bottom: 0.2rem;
    border: 1px solid #ccc;
    padding: 0.5rem 0.5rem;
    font-weight: 500;
}
.todo-list-item:hover {
    background-color: #efefef;
    cursor: pointer;
}
.todo-list-item span {
    display: block;
    padding-left: 0.5rem;
    flex: 1;
}
.completed {
    font-weight: normal;
    text-decoration: line-through
}
</style>