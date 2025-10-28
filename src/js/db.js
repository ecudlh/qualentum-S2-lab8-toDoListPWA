import { openDB } from 'idb';

const DB_NAME = 'todo-db';
const STORE_NAME = 'tareas';

export async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
}

export async function getAllTasks() {
  const db = await initDB();
  return db.getAll(STORE_NAME);
}

export async function addTask(task) {
  const db = await initDB();
  await db.put(STORE_NAME, task);
}

export async function deleteTask(id) {
  const db = await initDB();
  await db.delete(STORE_NAME, id);
}

export async function updateTask(task) {
  const db = await initDB();
  await db.put(STORE_NAME, task);
}
