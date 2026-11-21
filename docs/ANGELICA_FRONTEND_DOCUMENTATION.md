# STUDENT PORTAL SYSTEM
## Frontend Documentation
**Frontend Developer:** Angelica  
**Project:** StudentPortal_SIA  
**Technology:** React.js + Vite  
**Project Type:** College Management System – Student Portal Module

---

## 1. Project Overview

The Student Portal is a web-based application designed to provide students with convenient access to their academic information and school-related services.

The system allows students to view their profile, subjects, class schedule, grades, enrollment information, financial records, library records, clinic information, faculty information, and school announcements through a centralized interface.

The frontend was developed using React.js and Vite. It communicates with the backend REST API to retrieve and display student information and other system data.

---

## 2. Objectives

The frontend development aims to:

- Create a user-friendly and organized student portal interface.
- Provide centralized access to student academic and school information.
- Display data retrieved from the backend API.
- Allow students to navigate between different portal modules.
- Maintain a responsive and consistent interface.
- Integrate the frontend with the backend services.

---

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| Vite | Frontend development server and build tool |
| JavaScript | Application logic and interactivity |
| CSS | Styling and layout |
| Axios | Communicating with backend API endpoints |
| Lucide React | Icons used in the interface |
| REST API | Retrieving information from the backend |
| Git & GitHub | Version control and project collaboration |

---

## 4. Frontend Folder Structure

The frontend is located inside the `client` directory.

```text
client/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Student.jsx
│   │   ├── Subject.jsx
│   │   ├── Schedule.jsx
│   │   ├── Grades.jsx
│   │   ├── Enrollment.jsx
│   │   ├── Finance.jsx
│   │   ├── Library.jsx
│   │   ├── Clinic.jsx
│   │   ├── Faculty.jsx
│   │   └── Announcement.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env
├── package.json
└── vite.config.js
```

The frontend follows a component-based structure. Reusable interface components are placed inside the `components` folder, while individual portal modules are organized inside the `pages` folder.

---

## 5. Student Portal Modules

### 5.1 Dashboard

The Dashboard serves as the main page of the Student Portal. It provides a summary of important student information and academic activities.

Features:
- Student overview
- Academic information
- Subject summary
- Enrollment status
- Financial balance summary
- Library information
- Schedule overview
- Announcements

### 5.2 Student Profile

The Student Profile page displays the student's personal and academic information.

Features:
- Student ID
- Full name
- Course
- Year level
- Section
- Personal information

### 5.3 My Subjects

The My Subjects page displays the subjects currently associated with the student.

Features:
- Subject code
- Subject name
- Units
- Subject information

### 5.4 Class Schedule

The Class Schedule page provides information about the student's scheduled classes.

Features:
- Subject
- Day of the week
- Time
- Room
- Instructor

### 5.5 Grades

The Grades page allows students to view their recorded academic grades.

Features:
- Subject information
- Grade records
- Academic performance information

### 5.6 Enrollment

The Enrollment page displays the student's enrollment information.

Features:
- Enrollment status
- Academic year
- Semester
- Course information
- Enrollment details

### 5.7 Finance

The Finance page displays student financial information.

Features:
- Tuition and fees information
- Total assessment
- Amount paid
- Remaining balance
- Payment status

### 5.8 Library

The Library page provides access to the student's library records.

Features:
- Borrowed books
- Book information
- Borrowing records
- Due dates
- Overdue information

### 5.9 Clinic

The Clinic page displays student clinic-related information.

Features:
- Clinic records
- Visit information
- Medical record information

### 5.10 Faculty

The Faculty page displays information about faculty members.

Features:
- Faculty name
- Department
- Position
- Assigned subjects
- Contact information

### 5.11 Announcements

The Announcements page displays school updates and important notices.

Features:
- Announcement title
- Announcement content
- Date posted
- Important school updates

---

## 6. Frontend Components

The frontend uses reusable React components to maintain consistency throughout the application.

### Sidebar

The Sidebar provides navigation between the different Student Portal modules.

### Navbar

The Navbar provides the top navigation area of the portal and displays relevant page information and interface controls.

### Page Components

Each portal module is implemented as an individual React page component. This makes the system easier to maintain, modify, and expand.

---

## 7. Frontend and Backend Integration

The frontend communicates with the backend using Axios.

The API configuration is located at:

```text
client/src/services/api.js
```

The API base URL is configured using the frontend environment variable:

```env
VITE_API_URL=http://localhost:8000/api/v1
```

The frontend sends HTTP requests to the backend API to retrieve information from MongoDB.

### API Integration Process

1. The student opens a page in the Student Portal.
2. The frontend sends a request through Axios.
3. The backend receives the request.
4. The backend processes the request and retrieves the appropriate data from MongoDB.
5. The backend returns a JSON response.
6. The frontend displays the returned information.

---

## 8. API Services

The frontend uses the following API services:

| Service | Description |
|---|---|
| Dashboard | Retrieves the student's dashboard information |
| Profile | Retrieves the student's personal and academic profile |
| Subjects | Retrieves enrolled subjects |
| Grades | Retrieves academic grade records |
| Schedule | Retrieves class schedules |
| Enrollment | Retrieves enrollment information |
| Finance | Retrieves financial records |
| Library | Retrieves library borrowing records |
| Clinic | Retrieves clinic records |
| Faculty | Retrieves faculty information |
| Announcements | Retrieves school announcements |

---

## 9. Environment Configuration

The frontend uses an environment variable to configure its backend connection.

### Environment File

```text
client/.env
```

### Configuration

```env
VITE_API_URL=http://localhost:8000/api/v1
```

The environment variable allows the frontend API address to be changed without modifying the application's source code.

For deployment, this URL must be updated to the deployed backend API URL.

---

## 10. Running the Frontend

### Prerequisites

- Node.js and npm installed
- Backend server configured
- MongoDB connection configured on the backend

### Installation

Open a terminal inside the `client` folder and run:

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The frontend will be available at the local URL provided by Vite, usually:

```text
http://localhost:5173
```

---

## 11. Backend Requirements

The frontend requires the backend API to be running to retrieve student information.

The backend is developed using:

- Node.js
- Express.js
- MongoDB
- Mongoose

The backend API is responsible for retrieving and managing data, while the frontend is responsible for displaying information and handling student interactions.

---

## 12. Development and Collaboration

The frontend is developed independently from the backend but integrates with the backend through REST API endpoints.

Git and GitHub are used to manage project changes, track development progress, and maintain the project's source code.

The frontend development process includes:

1. Designing the user interface.
2. Developing reusable React components.
3. Creating individual portal pages.
4. Integrating Axios with the backend API.
5. Testing frontend functionality.
6. Fixing interface and integration errors.
7. Preparing the frontend for deployment.

---

## 13. Testing

The frontend was tested by running the application locally and checking the functionality of the different Student Portal modules.

Testing includes:

- Checking page navigation.
- Verifying page content.
- Checking API connectivity.
- Confirming that backend data is displayed.
- Testing the Dashboard.
- Testing Student Profile.
- Testing My Subjects.
- Testing Class Schedule.
- Testing Grades.
- Testing Enrollment.
- Testing Finance.
- Testing Library.
- Testing Clinic.
- Testing Faculty.
- Testing Announcements.

---

## 14. Limitations

The current system is a student portal prototype and project implementation.

Some features may require further development, including:

- Secure authentication and authorization.
- Improved account management.
- Data validation.
- Additional security measures.
- More comprehensive error handling.
- Production deployment configuration.
- Responsive improvements for different devices.
- Protection of sensitive student information.

---

## 15. Future Improvements

Possible future enhancements include:

- Secure student login and authentication.
- Password reset functionality.
- Profile editing.
- Online enrollment.
- Online payment integration.
- Improved mobile responsiveness.
- Notifications for announcements and deadlines.
- More advanced academic analytics.
- Additional security and access control.

---

## 16. Conclusion

The Student Portal frontend provides a centralized interface for students to access their academic and school-related information.

Using React.js, Vite, Axios, and reusable components, the frontend connects to the backend REST API and displays information from the MongoDB database.

The development of the frontend contributes to the overall College Management System by making student services more accessible, organized, and convenient through a web-based platform.

---

**Frontend Documentation**  
**StudentPortal_SIA**  
**Frontend Developer: Angelica**
