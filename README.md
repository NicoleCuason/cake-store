1. Brief Description
The project title is called "Cake Store".
This is a simple web application that allows users to browse a variety of cakes in an online store. Each cake has its own image, description, and price. Users can be able to select favorite cakes by clicking the heart icon. The JSON file contains the data for the cakes, and due to its Tailwind CSS, the store layout is responsive. The component-based structure in React together with a parent component passes to child components. 

2. Instructions on How to Run the Project
a. Clone the repository: 
"git clone https://github.com/NicoleCuason/cake-store.git"
"cd cake-store"

b. Install Node.js 
- npm install

c. Start the development server
- npm start
*For the default web browser, you need to copy and paste this on your Google Chrome 
which is "http://localhost:3000"

d. View the project to ensure that it really works. 

3. Challenges Faced and How I Overcame Them
First, I struggled with passing data through several layers of components (from parent to child to grandchild). I needed to make sure that the data for each cake was displayed correctly. I broke the project down into smaller, reusable components; like the parent component is "App.jsx", followed by the child component "Cake.jsx".

Also, I needed to ensure the app displayed correctly in different screen sizes while using the Tailwind CSS which took me some time to test the best combinations for creating a responsive layout. I used Tailwind's responsive grid classes to see if it fits well through different sizes of screens. 




