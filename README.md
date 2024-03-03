GIM TRAINER WEBSITE created by AJAY KUMAR SARASWAT
hackathon-vercera.onrender.com/

Welcome to the documentation for the Gym Training Website developed by Ajay. This website is designed to provide training resources for both boys and girls in gyms where trainers might not be available. The website utilizes CSS, JavaScript, and React to create an interactive and user-friendly platform for gym enthusiasts.
FEATURES-
Training Resources: The website offers a variety of training resources including workout routines, exercise demonstrations, and nutritional guidance.

User Registration and Login: Users can register for an account and log in to access personalized training plans and track their progress.

Workout Planner: Users can create customized workout plans based on their fitness goals and preferences.

Exercise Library: A comprehensive library of exercises with detailed instructions and videos for proper form and technique.

Nutritional Guidance: Information on nutrition and diet plans to complement workout routines and achieve optimal results.

Community Support: Users can interact with each other through forums and discussion boards to share tips, experiences, and motivation.

Technologies Used
CSS: Used for styling the layout and design of the website.
JavaScript: Used for implementing interactive features and functionality.
React: Used as the frontend framework for building dynamic user interfaces.

File Structure
gym-training-website/
│
├── public/
│   ├── favicon.ico
│   └── index.html,manifest.json
│
├── src/
│   ├── components/,app.css,app.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── WorkoutPlanner.js
│   │   ├── ExerciseLibrary.js
│   │   ├── NutritionGuide.js
│   │   └── assets-1.images,2-icons
│   │
│   ├── pages/
│   │   ├── exercisedetail.js
│   │   ├── home.js
│   │   ├── Register.js
│   │   └── ...
│   │
│   ├── components-bodypat.js,detail.js,exercisecard.js,exercises.js,exercisesvideo.jsfooter,js,herobanner.js,loader.js,navabr.js,searchexercises.js,home.js
│   ├── index.js
│   └── .env
│
├── package.json
└── README.md
BodyPart Component Documentation
The BodyPart component is a reusable React component designed to display a selectable body part card within the Gym Training Website. It allows users to choose a specific body part for their workout routine.

Props
item: String
Represents the name of the body part.
setBodyPart: Function
Callback function to update the selected body part.
bodyPart: String
Represents the currently selected body part.
Usage
The BodyPart component is used within the workout planner section of the Gym Training Website to enable users to select different body parts for their workout routines.
<BodyPart
  item="Chest"
  setBodyPart={handleSetBodyPart}
  bodyPart={selectedBodyPart}
/>
Features
Interactive: Users can click on the body part card to select it.
Visual Feedback: Selected body parts are highlighted with a border and color changes.
Smooth Scrolling: Upon selection, the webpage smoothly scrolls to a predefined position.
Styling
The component utilizes Material-UI's Stack and Typography components for layout and styling.
Images for body parts are fetched from the assets folder.
Inline CSS is used to define styles for the component.
Functionality
Upon selection, the setBodyPart function is called to update the selected body part state.
Smooth scrolling functionality is implemented using window.scrollTo() to navigate to the relevant section of the webpage.
Note
Ensure that the Icon imported from the assets folder points to the correct image file path for displaying the body part icon.

Detail Component Documentation
The Detail component is a React component used to display detailed information about an exercise within the Gym Training Website. It provides users with essential details including the exercise name, targeted body part, equipment required, and additional information.

Props
exerciseDetail: Object
Contains the following properties:
bodyPart: String - Represents the targeted body part for the exercise.
gifUrl: String - URL of the GIF demonstrating the exercise.
name: String - Name of the exercise.
target: String - Represents the muscle group targeted by the exercise.
equipment: String - Equipment required for performing the exercise.
Usage
The Detail component is utilized within the Gym Training Website to provide users with detailed information about specific exercises. It is typically displayed when a user clicks on a particular exercise for more details.

Features
Displays exercise name, targeted body part, equipment required, and additional information.
Utilizes Material-UI components such as Typography, Stack, and Button for layout and styling.
Dynamically renders additional details using the extraDetail array.
Functionality
Renders exercise details including name, targeted body part, and equipment.
Displays a descriptive paragraph about the exercise, emphasizing its benefits.
Renders icons representing the targeted body part and required equipment.
Styling
Utilizes responsive design to adjust layout and font sizes based on screen size.
Implements custom styling using Material-UI's sx prop for enhanced visual appeal.
Note
Ensure that the gifUrl provided for each exercise points to a valid GIF demonstrating the exercise.

Author
Developed by Ajay for the Gym Training Website.

This documentation provides an overview of the Detail component, its props, usage, features, functionality, styling, and notes for implementation. It is designed to assist developers in understanding and utilizing the component within the Gym Training Website project.

Exercises Component Documentation
The Exercises component is a React component responsible for displaying a paginated list of exercises based on the selected body part within the Gym Training Website. It retrieves exercise data from an external API and renders exercise cards with pagination functionality.

Props
exercises: Array
Represents the array of exercises to be displayed.
setExercises: Function
Callback function to update the exercises state.
bodyPart: String
Represents the selected body part for filtering exercises.
Usage
The Exercises component is used within the Gym Training Website to display exercises relevant to the selected body part. It dynamically fetches exercise data based on the selected body part and renders exercise cards with pagination.

Features
Fetches exercise data from an external API based on the selected body part.
Paginates the list of exercises to improve user experience.
Displays exercise cards with exercise details including name, description, and image.
Functionality
Retrieves exercise data using the fetchData function from the utils/fetchData module.
Paginates the list of exercises based on the current page and exercises per page.
Renders exercise cards for the current page of exercises.
Scrolls to the top of the page upon changing the page to enhance user experience.
Styling
Utilizes Material-UI components such as Typography, Pagination, Box, and Stack for layout and styling.
Implements custom styling using the sx prop for enhanced visual appeal.
Loader
Displays a loader component while exercise data is being fetched to indicate loading.
Home Component Documentation
The Home component serves as the landing page for the Gym Training Website. It consists of a hero banner, a search component for filtering exercises, and a section for displaying exercises based on the selected body part.

Features
Hero Banner: Displays an attractive banner at the top of the page to engage users and provide visual appeal.
Search Exercises: Allows users to filter exercises based on the selected body part, providing a customized experience.
Exercises Section: Displays a paginated list of exercises based on the selected body part, enabling users to explore different workout options.
Components Used
HeroBanner: Component responsible for rendering the hero banner.
SearchExercises: Component enabling users to search for exercises based on body parts.
Exercises: Component displaying exercises based on the selected body part.
State Management
exercises: State variable storing the array of exercises to be displayed.
bodyPart: State variable representing the currently selected body part for filtering exercises.
Usage
The Home component is the main landing page of the Gym Training Website. It is rendered when users visit the website's root URL.

Structure
Hero Banner: Positioned at the top of the page, providing visual appeal and introductory information.
Search Exercises: Placed below the hero banner, enabling users to search for exercises based on body parts.
Exercises Section: Positioned below the search component, displaying exercises filtered by the selected body part.
Styling
Utilizes Material-UI's Box component for structural layout and styling.
Custom styling may be applied to each subcomponent for visual coherence and consistency.
State Handling
State variables (exercises and bodyPart) are managed using React's useState hook to facilitate dynamic content rendering based on user interactions.
