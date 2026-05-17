const API_URL = 'http://localhost:8080/tasks';

// DOM Elements
const taskForm = document.getElementById('task-form');
const tasksBody = document.getElementById('tasks-body');

// Event Listeners
document.addEventListener('DOMContentLoaded', fetchTasks);
taskForm.addEventListener('submit', addTask);

/**
 * Fetch all tasks from the backend and render them in the table
 */
async function fetchTasks() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        const tasks = await response.json();
        renderTasks(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        tasksBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: red;">Failed to load tasks. Ensure backend is running.</td></tr>`;
    }
}

/**
 * Render tasks to the HTML table
 */
function renderTasks(tasks) {
    tasksBody.innerHTML = '';
    
    if (tasks.length === 0) {
        tasksBody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">No tasks found. Add one!</td></tr>`;
        return;
    }

    tasks.forEach(task => {
        const tr = document.createElement('tr');
        
        let statusClass = '';
        if (task.status === 'Pending') statusClass = 'status-pending';
        else if (task.status === 'In Progress') statusClass = 'status-progress';
        else if (task.status === 'Completed') statusClass = 'status-completed';

        tr.innerHTML = `
            <td>${task.id}</td>
            <td><strong>${task.employee}</strong></td>
            <td>${task.task}</td>
            <td><span class="status-badge ${statusClass}">${task.status}</span></td>
            <td>
                <button class="btn-delete" onclick="deleteTask(${task.id})">Delete</button>
            </td>
        `;
        tasksBody.appendChild(tr);
    });
}

/**
 * Add a new task via POST request
 */
async function addTask(e) {
    e.preventDefault();
    
    const employee = document.getElementById('employee').value.trim();
    const taskDesc = document.getElementById('task').value.trim();
    const status = document.getElementById('status').value;

    const newTask = {
        employee: employee,
        task: taskDesc,
        status: status
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        });

        if (response.ok) {
            taskForm.reset();
            fetchTasks(); // Refresh list
        } else {
            alert('Failed to add task.');
        }
    } catch (error) {
        console.error('Error adding task:', error);
        alert('Could not connect to backend.');
    }
}

/**
 * Delete a task via DELETE request
 */
async function deleteTask(id) {
    if (!confirm('Are you sure you want to delete this task?')) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            fetchTasks(); // Refresh list
        } else {
            alert('Failed to delete task.');
        }
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}
