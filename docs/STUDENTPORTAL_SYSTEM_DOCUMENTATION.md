# STUDENT PORTAL SYSTEM
## System Documentation

**Project Name:** StudentPortal_SIA  
**System:** College Management System – Student Portal Module  
**Frontend Developer:** Angelica  
**Backend Developer:** Iris Atanante  
**Documentation Contributor:** Joan Del Valle  
**Course:** Bachelor of Science in Information Technology  
**Project Type:** Web-Based Student Information System

---

# 1. Introduction

## 1.1 Project Overview

The Student Portal System is a web-based application developed as part of the College Management System. It is designed to provide students with centralized access to academic information and school-related services through a single web interface.

The system allows students to view their profile, subjects, class schedules, grades, enrollment status, financial information, library records, clinic information, faculty details, and school announcements.

The system uses React.js for the frontend, Node.js and Express.js for the backend, and MongoDB Atlas for database storage. The frontend and backend communicate through REST API endpoints.

## 1.2 Project Objectives

The main objectives of the Student Portal System are:

- To provide students with convenient access to their academic information.
- To centralize student-related school services in one web application.
- To develop a responsive and user-friendly interface.
- To integrate a frontend application with a backend REST API.
- To store and retrieve student information using MongoDB.
- To improve the accessibility of academic and school-related information.
- To demonstrate full-stack web application development.

## 1.3 Scope of the System

The Student Portal System covers the following modules:

1. Dashboard
2. Student Profile
3. My Subjects
4. Class Schedule
5. Grades
6. Enrollment
7. Finance
8. Library
9. Clinic
10. Faculty
11. Announcements

The application is intended to serve as the student-facing module of a larger College Management System.

---

# 2. System Architecture

The Student Portal follows a client-server architecture.

The frontend handles the user interface and user interactions. The backend processes API requests and communicates with the MongoDB database.

## 2.1 Architecture Components

### Frontend

The frontend is developed using React.js and Vite. It displays the portal pages, handles navigation, and requests information from the backend.

### Backend

The backend is developed using Node.js and Express.js. It handles REST API requests, processes application logic, and retrieves records from the database.

### Database

MongoDB Atlas is used to store student and school-related records. Mongoose is used to manage database models and interactions.

## 2.2 System Data Flow

1. The student opens the Student Portal.
2. The frontend displays the selected page.
3. The frontend sends an HTTP request to the backend API.
4. Express receives and processes the request.
5. The backend retrieves the necessary information from MongoDB.
6. MongoDB returns the requested records.
7. The backend sends a JSON response.
8. React displays the information to the student.

---

# 3. Technologies Used

| Technology | Description | Usage |
|---|---|---|
| React.js | JavaScript frontend library | Building the user interface |
| Vite | Frontend build tool | Development server and build process |
| JavaScript | Programming language | Frontend and backend logic |
| CSS | Styling language | Layout and interface design |
| Node.js | JavaScript runtime | Running the backend |
| Express.js | Backend web framework | Creating API endpoints |
| MongoDB Atlas | Cloud database | Storing system records |
| Mongoose | MongoDB object modeling library | Database models and queries |
| Axios | HTTP client | Frontend API communication |
| Lucide React | Icon library | Interface icons |
| Nodemon | Development utility | Restarting the backend during development |
| dotenv | Environment configuration | Managing environment variables |
| Git | Version control | Tracking project changes |
| GitHub | Repository hosting | Source code management and collaboration |

---

# 4. System Modules

## 4.1 Dashboard

The Dashboard serves as the main page of the Student Portal.

It displays summarized student information, academic details, schedules, enrollment status, financial balance, library records, and announcements.

## 4.2 Student Profile

The Student Profile module displays personal and academic information.

Information includes:

- Student ID
- Full name
- Course
- Year level
- Section
- Personal details

## 4.3 My Subjects

The My Subjects module provides information about the student's subjects.

Information includes:

- Subject code
- Subject name
- Units
- Subject details

## 4.4 Class Schedule

The Class Schedule module allows students to view their scheduled classes.

Information includes:

- Subject
- Instructor
- Day
- Class time
- Room

## 4.5 Grades

The Grades module provides access to recorded academic grades.

Information includes:

- Subject
- Grade
- Academic performance records

## 4.6 Enrollment

The Enrollment module displays enrollment-related information.

Information includes:

- Enrollment status
- Academic year
- Semester
- Course
- Enrollment records

## 4.7 Finance

The Finance module displays student financial information.

Information includes:

- Total assessment
- Amount paid
- Remaining balance
- Payment status

## 4.8 Library

The Library module provides information about library borrowing records.

Information includes:

- Borrowed books
- Book details
- Borrowing records
- Due dates
- Overdue status

## 4.9 Clinic

The Clinic module provides access to clinic-related student records.

Information includes:

- Clinic visits
- Student clinic records
- Medical-related information

## 4.10 Faculty

The Faculty module displays faculty information.

Information includes:

- Faculty name
- Department
- Position
- Assigned subjects
- Contact information

## 4.11 Announcements

The Announcements module displays school announcements and updates.

Information includes:

- Announcement title
- Announcement content
- Date published
- Important notices

---

# 5. Frontend Architecture

## 5.1 Frontend Overview

The frontend is developed using React.js and Vite. It follows a component-based approach, separating reusable interface components from individual portal pages.

This structure makes the frontend easier to maintain, organize, and expand.

## 5.2 Frontend Folder Structure

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

## 5.3 Frontend Responsibilities

The frontend is responsible for:

- Displaying the Student Portal interface.
- Providing navigation between modules.
- Retrieving information from the backend.
- Displaying student records.
- Handling user interface interactions.
- Managing page layouts and styling.

---

# 6. Backend Architecture

## 6.1 Backend Overview

The backend is developed using Node.js and Express.js. It provides REST API endpoints that allow the frontend to retrieve information from the MongoDB database.

Mongoose is used for defining database models and interacting with MongoDB.

## 6.2 Backend Folder Structure

```text
server/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── Announcement.js
│   │   ├── Clinic.js
│   │   ├── Enrollment.js
│   │   ├── Faculty.js
│   │   ├── Finance.js
│   │   ├── Grade.js
│   │   ├── Library.js
│   │   ├── Schedule.js
│   │   ├── Student.js
│   │   └── Subject.js
│   ├── routes/
│   ├── seeds/
│   │   ├── seed.js
│   │   ├── seedAnnouncements.js
│   │   ├── seedClinic.js
│   │   ├── seedEnrollment.js
│   │   ├── seedFaculty.js
│   │   ├── seedFinance.js
│   │   ├── seedGrades.js
│   │   ├── seedLibrary.js
│   │   ├── seedSchedule.js
│   │   └── seedSubjects.js
│   └── ...
├── .env
├── package.json
└── server.js
```

## 6.3 Backend Responsibilities

The backend is responsible for:

- Receiving frontend HTTP requests.
- Processing API requests.
- Retrieving records from MongoDB.
- Managing database connections.
- Returning JSON responses.
- Organizing data through database models.
- Providing API endpoints for Student Portal modules.

---

# 7. Database Design

## 7.1 Database Overview

The system uses MongoDB Atlas as its cloud database.

**Database Name:** `studentportal_sia`

MongoDB stores the information required by the Student Portal modules.

## 7.2 Database Collections

| Collection / Model | Purpose |
|---|---|
| Students | Student personal and academic records |
| Subjects | Subject information |
| Grades | Student grade records |
| Schedules | Class schedules |
| Enrollments | Student enrollment records |
| Finances | Financial records |
| Announcements | School announcements |
| Libraries | Library borrowing records |
| Clinics | Clinic-related records |
| Faculties | Faculty information |

## 7.3 Database Relationship Overview

The system organizes student information into separate collections. Records are associated with students using identifiers such as student ID and other model references where applicable.

The Student record serves as the primary source of student identity and academic information, while other collections contain module-specific information.

---

# 8. API Documentation

## 8.1 API Overview

The backend provides a REST API that allows the frontend to retrieve data.

**Local Base URL:**

```text
http://localhost:8000/api/v1
```

## 8.2 API Endpoints

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/health` | Checks server status |

### Student Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/students/:studentId/profile` | Retrieves student profile |
| GET | `/api/v1/dashboard/:studentId` | Retrieves dashboard information |
| GET | `/api/v1/students/:studentId/subjects` | Retrieves student subjects |
| GET | `/api/v1/students/:studentId/grades` | Retrieves grades |
| GET | `/api/v1/students/:studentId/schedule` | Retrieves class schedules |
| GET | `/api/v1/students/:studentId/enrollment` | Retrieves enrollment information |
| GET | `/api/v1/students/:studentId/finance` | Retrieves finance information |
| GET | `/api/v1/students/:studentId/library` | Retrieves library records |
| GET | `/api/v1/students/:studentId/clinic` | Retrieves clinic records |

### Faculty Endpoint

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/faculty` | Retrieves faculty information |

### Announcement Endpoint

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/announcements` | Retrieves announcements |

---

# 9. Frontend and Backend Integration

## 9.1 Integration Overview

The frontend and backend are separate parts of the application that communicate through REST API requests.

The frontend uses Axios to send requests to the backend. The backend retrieves the required information from MongoDB and returns it as JSON.

## 9.2 Axios Configuration

The API service configuration is located at:

```text
client/src/services/api.js
```

The frontend uses an environment variable to define the backend API base URL.

```env
VITE_API_URL=http://localhost:8000/api/v1
```

## 9.3 Integration Process

1. The student navigates to a portal module.
2. React loads the selected page.
3. The frontend calls the appropriate API service.
4. Axios sends an HTTP request to Express.
5. Express processes the request.
6. Mongoose retrieves the required database records.
7. MongoDB returns the data.
8. Express sends a JSON response.
9. React displays the information.

---

# 10. Installation and Setup

## 10.1 Prerequisites

Before running the system, the following must be installed or configured:

- Node.js
- npm
- Git
- MongoDB Atlas account
- Internet connection
- Visual Studio Code or another code editor

## 10.2 Clone the Repository

Clone the project repository:

```bash
git clone https://github.com/11iRIS15/StudentPortal_SIA.git
```

Navigate to the project folder:

```bash
cd StudentPortal_SIA
```

## 10.3 Backend Setup

Navigate to the server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Configure the backend environment variables in the `.env` file.

Example:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Replace the MongoDB URI with the actual connection string. Do not share or commit the database credentials.

Start the backend:

```bash
npm run dev
```

The backend should run on:

```text
http://localhost:8000
```

API base URL:

```text
http://localhost:8000/api/v1
```

## 10.4 Frontend Setup

Open another terminal and navigate to the client folder from the project root:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Configure the frontend `.env` file:

```env
VITE_API_URL=http://localhost:8000/api/v1
```

Start the frontend:

```bash
npm run dev
```

Vite will display the local development URL, usually:

```text
http://localhost:5173
```

Open the displayed URL in your browser to access the Student Portal.

---

# 11. Testing and Verification

## 11.1 Testing Overview

The system was tested locally to verify frontend navigation, backend API responses, and MongoDB integration.

## 11.2 Backend Testing

The backend testing process includes:

- Checking server startup.
- Verifying MongoDB connection.
- Checking the health endpoint.
- Retrieving student profile data.
- Retrieving dashboard data.
- Retrieving subjects.
- Retrieving grades.
- Retrieving schedules.
- Retrieving enrollment information.
- Retrieving financial records.
- Retrieving library records.
- Retrieving clinic records.
- Retrieving faculty records.
- Retrieving announcements.

## 11.3 Frontend Testing

The frontend testing process includes:

- Checking the application startup.
- Verifying the login interface.
- Testing navigation.
- Checking dashboard information.
- Testing the Student Profile page.
- Testing My Subjects.
- Testing Class Schedule.
- Testing Grades.
- Testing Enrollment.
- Testing Finance.
- Testing Library.
- Testing Clinic.
- Testing Faculty.
- Testing Announcements.
- Checking API data display.

## 11.4 Integration Testing

Integration testing was performed by checking whether the frontend could communicate with the backend and display information retrieved from MongoDB.

The frontend API services were verified against the backend endpoints.

---

# 12. Security Considerations

The system uses environment variables to store database connection settings.

The `.env` files must not be uploaded to GitHub because they may contain sensitive credentials.

Before public deployment, the system must implement additional security measures such as:

- Secure authentication.
- Password hashing.
- Authorization.
- Role-based access control.
- Protected API endpoints.
- Input validation.
- Secure database access.
- HTTPS.
- Protection of financial and clinic records.
- Proper production environment configuration.

The Student Portal contains potentially sensitive student information. Access to financial and clinic records should be restricted to authorized users.

---

# 13. System Limitations

The current implementation is a school project and is not yet a fully production-ready student information system.

Current limitations include:

- Authentication and authorization require further implementation.
- Some functions are designed primarily for data viewing.
- Administrative record management may require additional development.
- Security improvements are needed before public deployment.
- Production deployment configuration is still required.
- Additional validation and error handling may be needed.
- Sensitive information must be protected with access control.

---

# 14. Future Enhancements

Possible future enhancements include:

- Secure student authentication.
- Password reset.
- Role-based access control.
- Profile editing.
- Online enrollment.
- Online payment integration.
- Real-time notifications.
- Mobile-responsive improvements.
- Administrative dashboard.
- Student record management.
- Enhanced API documentation.
- Logging and monitoring.
- Production deployment.
- Improved privacy and security controls.

---

# 15. Deployment Overview

The system is developed locally using separate frontend and backend applications.

For deployment, the frontend and backend may be hosted on separate services.

The frontend requires a publicly accessible backend API URL, while the backend requires a configured MongoDB connection and production environment variables.

The deployment process will include:

1. Preparing the project for production.
2. Configuring environment variables.
3. Deploying the backend API.
4. Connecting the backend to MongoDB Atlas.
5. Deploying the frontend.
6. Updating the frontend API URL.
7. Testing the deployed application.
8. Verifying frontend and backend communication.
9. Checking security and access configuration.

---

# 16. Conclusion

The StudentPortal_SIA project provides a web-based student portal that centralizes access to academic and school-related information.

The project integrates React.js and Vite for the frontend, Node.js and Express.js for the backend, and MongoDB Atlas for database storage.

The system demonstrates full-stack web development, REST API integration, database modeling, modular application development, and collaborative software development.

The Student Portal serves as a foundation for a larger College Management System and can be further enhanced with additional functionality, security features, and production deployment.

---

**StudentPortal_SIA**  
College Management System – Student Portal Module

Frontend Developer: Angelica  
Backend Developer: Iris Atanante  
Documentation Contributor: Joan Del Valle
