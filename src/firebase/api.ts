import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBpuSZcHXw1BW6Imzl3iVcAUT8isXArJ2M",
    authDomain: "bluffing-chefs.firebaseapp.com",
    databaseURL: "https://bluffing-chefs.firebaseio.com",
    projectId: "bluffing-chefs",
    storageBucket: "bluffing-chefs.appspot.com",
    messagingSenderId: "626050853897",
    appId: "1:626050853897:web:d409228d50b6cd73e51cd8",
    measurementId: "G-76VHNQLNX0"
}

firebase.initializeApp(firebaseConfig);

export function saveSomething() {
    firebase
        .firestore()
        .collection('tests')
        .doc('bbb')
        .set({ name: "xd" })
}
