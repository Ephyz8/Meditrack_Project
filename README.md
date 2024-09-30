# MediTrack Pro - Web Application

## Project Overview

**MediTrack Pro** is a web-based application designed to manage medical equipment and streamline hospital maintenance workflows. Developed primarily for biomedical engineers and medical equipment users, the system provides a comprehensive solution for tracking equipment status, fault reporting, job card management, preventive maintenance scheduling (PPM), and daily logs.

## Features

- **Role-based Access Control (RBAC)**: Different user roles (biomedical engineers and medical equipment users) with distinct permissions and dashboards.
- **Fault Reporting**: Medical staff can report equipment faults, which are then managed by biomedical engineers.
- **Job Card Management**: Engineers can create, update, and track job cards for each task, assigning due dates, materials used, and task descriptions.
- **Preventive Maintenance Scheduling (PPM)**: Keep track of scheduled maintenance tasks for medical devices.
- **Daily Logs**: Manage daily work logs to keep track of tasks completed and maintenance performed.
- **OTP Email Verification**: Secure user registration with email verification using One-Time Password (OTP).

## Technology Stack

### Backend:
- **Django**: Backend framework for managing the web application and database.
- **PostgreSQL**: Database for storing users, job cards, equipment details, and fault reports.
- **Celery**: Task queue for handling background tasks such as sending OTP emails.
- **JWT Authentication**: Secure user authentication with JSON Web Tokens.

### Frontend:
- **React.js**: JavaScript library for building the user interface.
- **React Router**: For handling navigation within the app.
- **Axios**: For making HTTP requests to the backend API.
- **CSS Modules**: Modular and scoped CSS styling.

### DevOps & Hosting:
- **Docker**: Containerization for seamless development and deployment.
- **NGINX**: Web server to serve the application.
- **Gunicorn**: WSGI HTTP Server for running the Django application.

## Setup and Installation

### Prerequisites

- **Node.js** (for running the frontend)
- **Python 3.8+** (for running the backend)
- **PostgreSQL** (for the database)
- **Docker** (optional, for containerized setup)

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/MediTrackPro.git
    cd MediTrackPro/backend
    ```

2. Create and activate a virtual environment:

    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Create a `.env` file in the `backend` folder with the following variables:

    ```bash
    SECRET_KEY=your_secret_key
    DEBUG=True
    DATABASE_URL=postgres://username:password@localhost:5432/meditrackpro
    EMAIL_HOST=smtp.your-email.com
    EMAIL_PORT=587
    EMAIL_HOST_USER=your-email@example.com
    EMAIL_HOST_PASSWORD=your-email-password
    ```

5. Run migrations and start the backend server:

    ```bash
    python manage.py migrate
    python manage.py runserver
    ```

### Frontend Setup

1. Navigate to the `frontend` folder:

    ```bash
    cd ../frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

### Running with Docker

1. Make sure you have Docker installed.
2. Build and run the containers:

    ```bash
    docker-compose up --build
    ```

3. The app should be running on `http://localhost:8000`.

## API Endpoints

### Authentication:

- **POST** `/api/v1/auth/login/`: Login user and generate JWT token.
- **POST** `/api/v1/auth/register/`: Register new user and send OTP for verification.
- **POST** `/api/v1/auth/verify-otp/`: Verify OTP sent via email.
- **GET** `/api/v1/auth/user-role/`: Get the role of the logged-in user.

### Job Cards:

- **GET** `/api/v1/job-cards/`: List all job cards (Engineer only).
- **POST** `/api/v1/job-cards/`: Create a new job card (Engineer only).

### Fault Reporting:

- **POST** `/api/v1/faults/`: Submit a fault report (User only).

For more detailed documentation on the API, refer to the [API Documentation](./docs/api.md).

## Deployment

1. Configure environment variables in your server using a tool like **Docker Secrets** or set them in the `.env` file.
2. Make sure PostgreSQL is running on your server.
3. Set up NGINX to reverse-proxy the frontend and backend.

## Lessons Learned

- **Role-based access management**: Implementing role-based dashboards for both biomedical engineers and equipment users presented unique challenges but added significant value to the system.
- **OTP Verification**: Utilizing Celery for background tasks allowed seamless OTP email verification without slowing down the main application.
- **End-to-end integration**: Balancing frontend and backend integration taught me the importance of clear API contracts and handling asynchronous operations.

## Future Enhancements

- **Real-time Notifications**: Incorporating WebSockets for real-time fault updates and maintenance reminders.
- **Multi-hospital Support**: Expanding the system to support multiple hospitals and larger user bases.
- **Analytics and Reporting**: Adding detailed reporting features for equipment usage, performance metrics, and maintenance logs.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

**Ephraim Ziwoya**  
Biomedical Engineer & Backend Developer  


