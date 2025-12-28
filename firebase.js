<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCxnbO3nl9IzEOnkJnUYvBcjICAMaXWhHg",
    authDomain: "restaurant-realtime-b9a42.firebaseapp.com",
    projectId: "restaurant-realtime-b9a42",
    storageBucket: "restaurant-realtime-b9a42.firebasestorage.app",
    messagingSenderId: "357031222500",
    appId: "1:357031222500:web:54a63cc693f3f1325720f1""
  };

  const app = initializeApp(firebaseConfig);
  window.db = getFirestore(app);
</script>
