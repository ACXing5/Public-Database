"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Local configuration for local development. App Hosting injects its own.
const firebaseConfig = {
  apiKey: "AIzaSyCzkjDA6XQFgLfdVtHtRMyLOjubwi0e37g",
  authDomain: "public-database-2.firebaseapp.com",
  databaseURL: "https://public-database-2-default-rtdb.firebaseio.com",
  projectId: "public-database-2",
  storageBucket: "public-database-2.firebasestorage.app",
  messagingSenderId: "1063065957137",
  appId: "1:1063065957137:web:f37150cd8e334d1a9dd2b0",
  measurementId: "G-E4JS903ZLN"
};

// Use automatic initialization if available, otherwise use fallback config
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const rtdb = getDatabase(firebaseApp);
