import firebase from 'firebase'
import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId } from './secrets/config'

firebase.initializeApp({
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
});

const db = firebase.firestore();

export { db }