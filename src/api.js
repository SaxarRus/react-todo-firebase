import { db } from './firebase'

export function getLists() {
  return db.collection('lists')
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return items
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

export function getListTodos(listId) {
  return db.collection('todos')
    .where('listId', '==', listId)
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return items
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

export function addTask(data) {
  return db.collection('todos').add({
    ...data,
    completed: false
  }).then(docRef => {
    return docRef.get()
  }).then(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

export function updateTask(todoId, data) {
  return db.collection('todos').doc(todoId).update(data)
}

export function deleteTask(todoId) {
  return db.collection('todos').doc(todoId).delete()
    .then(() => todoId)
}

// export function get(collectionName) {

//   const collection = db.collection(collectionName)

//   return (query = () => collection) => {
//     return query(collection)
//       .get()
//       .then((snapshot) => {
//         const items = snapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         return items
//       })
//       .catch((error) => {
//         console.log("Error getting documents: ", error);
//       });
//   }
// }