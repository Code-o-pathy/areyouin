# setup vite + tailwindcss
-npm create vite@latest .
-npm install
-npm install -D tailwindcss postcss autoprefixer                                                                                      
-npx tailwindcss init -p
    --content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    --@tailwind base;
    --@tailwind components;
    --@tailwind utilities;
-npm run dev

#firebase setup
--npm install firebase
--add web template into firebase.js(create this file export getAuth() from here)
--npm install -g firebase-tools(to host the app)




