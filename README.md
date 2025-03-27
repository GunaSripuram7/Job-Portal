# Job Portal

Welcome to **Job Portal**, a revolutionary job discovery platform built during the GDG InnoHacks Hackathon by Team TWEAK. This project is a dynamic, skill-driven job portal that uses real-time filtering and ranking to display the most relevant job listings. The system is built using React.js, Tailwind CSS, Framer Motion, and Firebase for authentication and database (Firestore).

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Authentication (Sign Up & Sign In)](#authentication-sign-up--sign-in)
- [Job Search & Filtering](#job-search--filtering)
- [Additional Pages](#additional-pages)
- [Firebase Backend Setup](#firebase-backend-setup)
- [Usage](#usage)
- [License](#license)

---

## Features

- **User Authentication:** Secure signup and sign in via Firebase authentication.
- **Real-Time Job Search:** As the user types in one or more skills, job listings update automatically.
- **Dynamic Ranking:** Jobs with a match of 80% or higher are highlighted as "Top Matches" and ranked accordingly.
- **Bookmarks & Job Applications:** Users can bookmark jobs and mark them as applied. These actions are stored in Firestore and associated with the user.
- **Smooth Animations:** Page transitions and interactions are enhanced with Framer Motion for a seamless user experience.
- **Responsive Design:** Built with Tailwind CSS for a fully responsive, mobile-first design.

---

## Project Structure

```
TWEAK - Job Portal/
├── .firebaserc
├── .gitignore
├── firebase.json
├── firestore.indexes.json
├── firestore.rules
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── public/
│   └── index.html
└── src/
    ├── firebase.js
    ├── index.js
    ├── animations/
    │   └── pageVariants.js
    ├── components/
    │   ├── About.jsx
    │   ├── App.jsx
    │   ├── Bookmarks.jsx
    │   ├── Contact.jsx
    │   ├── Header.jsx
    │   ├── JobDetail.jsx
    │   ├── JobItem.jsx
    │   ├── JobList.jsx
    │   ├── JobsApplied.jsx
    │   ├── Profile.jsx
    │   ├── SignIn.jsx
    │   ├── SignUp.jsx
    │   └── SkillInput.jsx
    ├── data/
    │   └── jobApplications.js
    ├── hooks/
    │   ├── useJobFilter.js
    │   └── useJobSearch.js
    └── styles/
        └── tailwind.css
```

- **src/firebase.js:** Initializes Firebase, authentication (Firebase Auth), and Firestore.
- **src/components:** Contains all React components (pages, job listing UI, header, etc.).
- **src/hooks:** Custom hooks for filtering and searching jobs.
- **src/data:** Static job application data.
- **src/animations:** Contains animation variant configurations used by Framer Motion.
- **public/index.html:** The HTML entry point of the app.
- **tailwind.config.js & src/styles/tailwind.css:** Tailwind CSS configuration and main stylesheet.

---

## Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd TWEAK - Job Portal
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Firebase:**

   - Create a Firebase project in the Firebase console.
   - Enable **Firebase Authentication** (Email/Password) and **Cloud Firestore**.
   - Update the Firebase configuration in `src/firebase.js` (do not expose sensitive data like API keys in public repositories).

4. **Deploy Firestore Rules:**

   Your Firestore rules (in `firestore.rules`) should resemble:

   ```plaintext
   rules_version = '2';

   service cloud.firestore {
     match /databases/{database}/documents {
       // Each user document is stored under the "users" collection with the uid as ID.
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
       // Deny access to any other documents.
       match /{document=**} {
         allow read, write: if false;
       }
     }
   }
   ```

   Deploy rules using:

   ```bash
   firebase deploy --only firestore:rules
   ```

5. **Start the Application:**

   ```bash
   npm start
   ```

   Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

---

## Authentication (Sign Up & Sign In)

### Sign Up

- **Pages:** The Sign Up page (`SignUp.jsx`) includes fields for **username**, **email**, **password**, and **confirm password**.
- **Workflow:**  
  - When a new user submits the form, the app creates a new account using Firebase Authentication.
  - After account creation, the user’s profile is updated with the provided username.
  - Upon successful creation, the user is redirected to the Profile page.

### Sign In

- **Pages:** The Sign In page (`SignIn.jsx`) provides fields for email and password.
- **Workflow:**  
  - The user enters credentials.
  - On submission, Firebase Authentication validates the credentials.
  - On successful sign in, the user is redirected to the Profile page.
  - Any errors (e.g., wrong password or non-existent account) are displayed in a styled error popup.

---

## Job Search & Filtering

The core functionality of the portal is real-time job searching based on user-specified skills:

1. **Skill Input:**  
   Located in `SkillInput.jsx`, users enter one or more skills. Comma-separated input is parsed and used to filter jobs dynamically.

2. **Real-Time Filtering:**  
   The hook `useJobSearch.js` monitors the skill filters and immediately updates the job listings.  
   - If no skills are entered, the job list is cleared.
   - When skills are provided, the system compares them to each job's required skills (using substring matching).

3. **Highlighting Top Matches:**  
   Jobs that have an 80% or higher match with the user’s skills are flagged as "Top Matches" and are displayed with special styling.

### 🔍 Example Search Results

#### 1️⃣ Single Skill Search

**📌 User Input:** `JavaScript`

**🔹 Results Displayed:**

| Job Title             | Company  | Match Percentage | Location         | Type      |
|-----------------------|----------|------------------|------------------|-----------|
| Frontend Developer    | Google   | 92% (Top Match)  | Remote           | Full-Time |
| JavaScript Engineer   | Amazon   | 87% (Top Match)  | New York         | Full-Time |
| Web Developer         | Facebook | 75%              | Remote           | Part-Time |
| UI/UX Developer       | Microsoft| 68%              | San Francisco    | Full-Time |

**📌 Key Features:**
- Results update dynamically without the need for a search button.

---

#### 2️⃣ Multiple Skills Search

**📌 User Input:** `JavaScript, React.js, Node.js`

**🔹 Results Displayed:**

| Job Title             | Company      | Match Percentage | Location         | Type       |
|-----------------------|--------------|------------------|------------------|------------|
| Full Stack Developer  | Google       | 96% (Top Match)  | Remote           | Full-Time  |
| React.js Developer    | Netflix      | 91% (Top Match)  | San Francisco    | Full-Time  |
| Software Engineer     | Twitter      | 88% (Top Match)  | Remote           | Contract   |
| Backend Engineer      | Microsoft    | 77%              | New York         | Full-Time  |
| Web Developer         | Amazon       | 72%              | Remote           | Part-Time  |

**📌 Key Features:**
- Real-time filtering automatically refines results as users type.
- Dynamic ranking ensures the best-matching jobs appear first.

---

### 🔑 How Search Works:

1. **Skill Input:**  
   Users input one or more skills separated by commas.

2. **Dynamic Filtering:**  
   As input is provided, the system immediately filters and displays job listings matching at least one of the input skills.

3. **Highlight Top Matches:**  
   Jobs with a match percentage of 80% or more are highlighted as "Top Matches."

4. **Auto Update:**  
   Results reorder in real-time based on user input – there’s no search button needed.

5. **User Experience:**  
   Smooth animations, courtesy of Framer Motion, provide a seamless visual transition when jobs are updated.

---

## Additional Pages

- **About:** Details about Team TWEAK, our mission, the tech stack, and what makes our portal unique. (See `About.jsx`)
- **Contact:** Lists team members along with their email addresses for support or inquiries. (See `Contact.jsx`)
- **Profile:** Displays a free-form user profile with the username and email details. Sign out functionality is provided here. (See `Profile.jsx`)
- **Bookmarks & Jobs Applied:**  
  Users can bookmark jobs or mark them as applied. These actions are stored in Firestore under the user's document. (See `Bookmarks.jsx`, `JobsApplied.jsx`, and `JobDetail.jsx`)

---

## Firebase Backend Setup

- **Firebase Authentication:**  
  Used for sign up and sign in using email/password.
  
- **Firestore Database:**  
  The app uses a single **"users"** collection. Each document ID is the authenticated user’s UID. Inside each document, arrays such as `bookmarks` and `appliedJobs` are stored.

- **Security Rules:**  
  The Firestore rules ensure that only authenticated users can read or write to their own document:

  ```plaintext
  rules_version = '2';

  service cloud.firestore {
    match /databases/{database}/documents {
      match /users/{userId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
      match /{document=**} {
        allow read, write: if false;
      }
    }
  }
  ```

- **No LocalStorage for Data:**  
  All bookmarks and applied jobs are now stored in Firestore; localStorage usage has been removed from the code.

---

## Usage

1. **Sign Up / Sign In:**  
   - Create an account or sign in using your email and password.
   - Upon successful authentication, you'll be redirected to your profile page.

2. **Job Search:**  
   - Enter one or more skills in the search input (e.g., "JavaScript, React.js").
   - The job listings are displayed dynamically with top matches highlighted.

3. **Job Details:**  
   - Click on a job to view its detailed description.
   - From the job detail page, you can bookmark the job or mark it as applied. These actions update your user document in Firestore.

4. **Bookmarks & Applications:**  
   - Use the menu links to view all bookmarked jobs or all jobs you’ve applied for.
   - Each listing is clickable and will navigate to the job’s full details.

5. **About & Contact:**  
   - Learn more about the project and get in touch with our team via the About and Contact pages linked in the menu.

---

## License

This project is licensed under the MIT License.

---

> **Note:** Ensure that you do not expose sensitive configuration details like your Firebase API keys. Use environment variables or a secure method to manage such data in production.

---

Happy Job Hunting with **TWEAK - Job Portal**!