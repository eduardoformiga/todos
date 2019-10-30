import { fireDb } from '~/plugins/firebase.js'

export const getTasks = async () => {
  try {
    const collection = await fireDb.collection('tasks').get()
    const documents = collection.docs.map((doc) => doc.data())
    return documents
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
    return []
  }
}

export const saveTask = async (task) => {
  const ref = fireDb.collection('tasks').doc(String(task.id))
  try {
    await ref.set(task)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
}

export const removeTask = async (task) => {
  const ref = fireDb.collection('tasks').doc(String(task.id))
  try {
    await ref.delete()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
}

export const updateTask = async (task) => {
  const ref = fireDb.collection('tasks').doc(String(task.id))
  try {
    await ref.set(task)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
}
