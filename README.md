
# Student-Teacher Booking Appointment System

This is a MERN stack project designed to facilitate the booking of appointments between students and teachers. The system includes functionalities for admins to manage teachers, for teachers to manage their appointments, and for students to book appointments with teachers.

## Features
- Admin management for adding, updating, and deleting teachers and approving student registrations.
- Teacher functionalities for managing their appointment schedules, approving/cancelling appointments, sending email alerts to students, viewing messages, and viewing all appointments.
- Student functionalities for registering, booking appointments with teachers, sending email alerts to teachers, and sending messages.

## System Modules

### Admin
- Add Teacher (Name, Department, Subject, etc.)
- Update/Delete Teacher
- Approve Registration Student

### Teacher
- Login
- Schedule Appointment
- Approve/Cancel Appointment
- Send Email Alerts to Students
- View Messages
- View All Appointments

### Student
- Register
- Login
- Book Appointment
- Send Email Alert to Teacher
- Send Message

## Tech-Stack-Used

**Frontend**
```bash
vite (bundler-react)
tailwindcss (styling)
react-icons (icons)
react-router-dom (routing)
react-toastify (notify)
axios (API)
```
**Backend**
```bash
express (API)
jwt-token (token)
nodemail (MAIL)
bcrypt (encryption)
```

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
       https://github.com/Tisha-garg12/student-teacher.git
    ```

2. **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**
    ```bash
    cd frontend
    npm install
    ```

4. **Set up environment variables for the backend:**

    Create a `.env` file in the `backend` directory with the following content:
    ```env
    DB_URL=''
    JWT_KEY = ''
    PORT = 5000

    # mail integration 

    MAIL_HOST = 
    MAIL_USER = 'your_mail'
    MAIL_PASS = 
    ```

5. **Run the backend server:**
    ```bash
    cd backend
    npm run dev
    ```

6. **Run the frontend server:**
    ```bash
    cd frontend
    npm run dev
    ```
7. **Set up environment variables for frontend:**

    Create a `.env.local` file in the `frontend` directory with the following content:
    ```env
    VITE_BACKEND_URL='http://localhost:5000'
    ``` 

The application should now be running on `http://localhost:5173/`.

## Usage

1. **Admin:**
    - Log in to the admin dashboard.
    - Add, update, or delete teachers.
    - Approve student registrations.

2. **Teacher:**
    - Log in to the teacher portal.
    - Schedule, approve, or cancel appointments.
    - Send email alerts to students.
    - View messages and all appointments.

3. **Student:**
    - Register and log in to the student portal.
    - Book appointments with teachers.
    - Send email alerts and messages to teachers.

## Screenshots

 Student Dashboard
![Screenshot (235)](https://github.com/user-attachments/assets/fc2c4b75-3039-4110-a5d1-5b9bc64e7434)

Teacher Dashboard

![Screenshot (236)](https://github.com/user-attachments/assets/b930ed44-5d46-4655-9da7-07c1ba58d203)

Admin Dashboard
![Screenshot (237)](https://github.com/user-attachments/assets/f90e2d1c-41e3-4ea5-ad5f-e4485df4ca69)


## Login

**Student**
 ```bash
email:diksha@gmail.com
Password: diksha
 ```
**Teacher**
 ```bash
email: tish@gmail.com
Password: ashu
 ```
**Admin**
 ```bash
email: ashu123@gmail.com
Password: tisha
 ```



