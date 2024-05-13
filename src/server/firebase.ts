import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAkrBizEH95RFWOKw27q0ldFbUX_xf2Pgc",
  authDomain: "fir-4b50e.firebaseapp.com",
  databaseURL:
    "https://fir-4b50e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-4b50e",
  storageBucket: "fir-4b50e.appspot.com",
  messagingSenderId: "855224309608",
  appId: "1:855224309608:web:e1e936afa34b9fad3e68dd",
  measurementId: "G-WBT3DT6SB5",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

let dbRef = ref(db);
export let connectedRef = ref(db, ".info/connected");

const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("id");

export const userName = prompt("What's your name?"); //指示頁面彈出輸入框取得使用者名稱

if (roomId) {
  dbRef = child(dbRef, roomId);
} else {
  dbRef = push(ref(db));
  window.history.replaceState(null, "Meet", `?id=${dbRef.key}`);
}

export default dbRef;
