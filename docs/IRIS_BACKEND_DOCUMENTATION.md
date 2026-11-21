# STUDENT PORTAL SYSTEM
## Backend Documentation

**Backend Developer:** Iris Atanante  
**Project:** StudentPortal_SIA  
**Technology:** Node.js, Express.js, MongoDB, Mongoose  
**Project Type:** College Management System – Student Portal Module

---

## 1. Project Overview

The Student Portal backend is a REST API developed to support the Student Portal web application. It handles requests from the frontend, retrieves student-related information from the MongoDB database, and returns structured JSON responses.

The backend provides API endpoints for student profiles, dashboard information, subjects, grades, schedules, enrollment, finance, library, clinic, faculty, and announcements.

It was developed using Node.js and Express.js and connected to MongoDB Atlas using Mongoose.

---

## 2. Objectives

The backend development aims to:

- Develop REST API endpoints for the Student Portal.
- Connect the application to MongoDB Atlas.
- Organize the backend using routes, models, and seed scripts.
- Retrieve and serve student-related information.
- Provide structured JSON responses to the frontend.
- Support integration with the React frontend.
- Maintain organized and scalable backend code.

---

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime for backend development |
| Express.js | Backend framework for creating REST API endpoints |
| MongoDB Atlas | Cloud database for storing application data |
| Mongoose | MongoDB object modeling and database interaction |
| JavaScript | Backend application logic |
| Nodemon | Automatically restarts the server during development |
| dotenv | Manages environment variables |
| REST API | Communication between frontend and backend |
| Git & GitHub | Version control and source code management |

---

## 4. Backend Architecture

The backend follows a modular structure to organize the application's routes, database models, data, and seed scripts.

The frontend communicates with the backend through HTTP requests. The backend processes these requests and retrieves the required information from MongoDB.

### Request Flow

1. The frontend sends an HTTP request to the backend.
2. Express receives the request through the appropriate route.
3. The backend processes the request.
4. Mongoose communicates with MongoDB.
5. MongoDB returns the requested records.
6. The backend sends a JSON response.
7. The frontend displays the data.

---

## 5. Backend Folder Structure

The backend is located inside the `server` directory.

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

The backend is separated into different files and folders to make the code easier to manage, maintain, and expand.

---

## 6. Database Configuration

The Student Portal uses MongoDB Atlas as its cloud database.

The database name is:

`studentportal_sia`

MongoDB is used to store student information and the records required by the different Student Portal modules.

### Database Connection

The backend uses Mongoose to establish a connection to MongoDB Atlas.

The database connection is configured through environment variables to avoid exposing connection credentials directly in the source code.

The MongoDB connection string is stored inside the backend `.env` file.

Example configuration:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

The actual database credentials and connection string must remain private and must not be committed to GitHub.

---

## 7. Database Models

The backend uses Mongoose models to organize and manage MongoDB records.

| Model | Description |
|---|---|
| Student | Stores student personal and academic information |
| Subject | Stores subject information and units |
| Grade | Stores student academic grade records |
| Schedule | Stores class schedules |
| Enrollment | Stores student enrollment information |
| Finance | Stores student financial records |
| Announcement | Stores school announcements |
| Library | Stores library borrowing records |
| Clinic | Stores clinic-related student records |
| Faculty | Stores faculty member information |

Each model represents a specific collection of records in the MongoDB database.

---

## 8. Database Seeding

Database seeding is used to insert initial sample data into MongoDB.

The seed scripts populate the database with records required to test the Student Portal without manually inserting every record.

### Seed Scripts

| Seed Script | Purpose |
|---|---|
| seed.js | Seeds initial student data |
| seedSubjects.js | Inserts subject records |
| seedGrades.js | Inserts grade records |
| seedSchedule.js | Inserts class schedule records |
| seedEnrollment.js | Inserts enrollment information |
| seedFinance.js | Inserts financial records |
| seedAnnouncements.js | Inserts announcement records |
| seedLibrary.js | Inserts library records |
| seedClinic.js | Inserts clinic records |
| seedFaculty.js | Inserts faculty records |

### Running the Seed Scripts

The seed scripts can be executed from the `server` directory using Node.js.

Example:

```bash
node src/seeds/seed.js
```

Other seed scripts can be executed individually to populate their corresponding collections.

Database seeding allows the developer to verify the API functionality using sample records.

---

## 9. API Configuration

The backend API is hosted locally during development.

### Local Server

```text
http://localhost:8000
```

### API Base URL

```text
http://localhost:8000/api/v1
```

The API uses the `/api/v1` prefix to organize and version its endpoints.

---

## 10. API Endpoints

The backend provides endpoints for the different Student Portal modules.

### General

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/health` | Checks the server status |

### Student

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/students/:studentId/profile` | Retrieves the student profile |
| GET | `/api/v1/dashboard/:studentId` | Retrieves dashboard information |
| GET | `/api/v1/students/:studentId/subjects` | Retrieves student subjects |
| GET | `/api/v1/students/:studentId/grades` | Retrieves student grades |
| GET | `/api/v1/students/:studentId/schedule` | Retrieves student class schedule |
| GET | `/api/v1/students/:studentId/enrollment` | Retrieves enrollment information |
| GET | `/api/v1/students/:studentId/finance` | Retrieves financial information |
| GET | `/api/v1/students/:studentId/library` | Retrieves library records |
| GET | `/api/v1/students/:studentId/clinic` | Retrieves clinic records |

### Faculty

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/faculty` | Retrieves faculty information |

### Announcements

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/announcements` | Retrieves school announcements |

---

## 11. API Response Format

The backend returns data in JSON format.

JSON allows the frontend to easily process the information returned by the API.

Example request:

```http
GET /api/v1/dashboard/2026-00123
```

The response contains student dashboard information, such as:

- Student profile
- Academic information
- Subjects
- Grades
- Class schedules
- Enrollment status
- Financial balance
- Library information
- Announcements

The frontend uses the returned data to display the dashboard and related information.

---

## 12. Backend and Frontend Integration

The backend is integrated with the React frontend through REST API requests.

The frontend uses Axios to communicate with the backend.

The backend is responsible for:

- Processing API requests.
- Retrieving records from MongoDB.
- Handling database operations.
- Returning JSON responses.

The frontend is responsible for:

- Sending API requests.
- Displaying retrieved information.
- Handling user interface interactions.
- Navigating between portal pages.

This separation allows the frontend and backend to be developed and maintained independently.

---

## 13. Running the Backend

### Prerequisites

- Node.js installed
- npm installed
- MongoDB Atlas account
- Configured MongoDB connection string
- Backend dependencies installed

### Step 1. Navigate to the Backend Folder

```bash
cd server
```

### Step 2. Install Dependencies

```bash
npm install
```

### Step 3. Configure Environment Variables

Create or configure the `.env` file inside the `server` folder.

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Replace the placeholder with your actual MongoDB connection string.

Do not upload the `.env` file to GitHub.

### Step 4. Start the Backend Server

```bash
npm run dev
```

The backend will start on port `8000` if configured accordingly.

### Step 5. Verify the API

Open the API health endpoint in a browser:

```text
http://localhost:8000/api/v1/health
```

The endpoint should return a response indicating that the backend server is running.

---

## 14. Backend Testing

The backend was tested by running the server locally and checking the API endpoints.

Testing includes:

- MongoDB connection
- Server startup
- API health check
- Student profile retrieval
- Dashboard data retrieval
- Subject retrieval
- Grade retrieval
- Schedule retrieval
- Enrollment retrieval
- Finance retrieval
- Library retrieval
- Clinic retrieval
- Faculty retrieval
- Announcement retrieval

Database records were also verified through the MongoDB connection and seed scripts.

---

## 15. Security and Data Protection

The backend uses environment variables to protect database connection credentials.

Sensitive information, including database credentials and student information, must not be publicly exposed.

Before production deployment, the backend should be improved with:

- Authentication
- Authorization
- Secure password handling
- Input validation
- Error handling
- Request security measures
- Protected API endpoints
- Access control for sensitive student records
- Production environment configuration

Finance and clinic records require particular protection because they contain sensitive information.

---

## 16. Limitations

The current backend is a project implementation designed for the Student Portal.

The system still requires additional development before production use, including:

- Secure authentication
- User authorization
- Role-based access control
- Additional data validation
- Improved security
- Production database and server configuration
- Secure access to student financial and clinic information

---

## 17. Future Improvements

Future backend improvements may include:

- Authentication using JWT
- Role-based access control
- Password encryption and secure account management
- CRUD operations for administrators
- Enrollment management
- Online payment integration
- Improved validation and error handling
- Logging and monitoring
- API documentation improvements
- Deployment to a production server

---

## 18. Conclusion

The Student Portal backend provides the API and database integration required by the Student Portal application.

Using Node.js, Express.js, MongoDB Atlas, and Mongoose, the backend retrieves and organizes student information and provides it to the frontend through REST API endpoints.

The backend supports the major Student Portal modules and serves as the foundation for the College Management System's student services.

---

**Backend Documentation**  
**StudentPortal_SIA**  
**Backend Developer: Iris Atanante**
