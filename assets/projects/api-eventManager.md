# EventManager API (mobile version)

This EventManager API project serves as a framework for advancing development skills, while integrating third-party components to optimize functionality and user interface.

## General Description
- EventManager API is a robust backend service for mobile applications, designed for seamless event management. It enables users to easily create and manage personal and professional events through a dynamic API. The project also aims to explore best practices in API development while integrating third-party libraries to enhance functionality and user experience.

## Main Features:
### Event Creation
- Users can create and update events by specifying details such as date, category, location, and description.
- Each event can be classified by category for easier organization and retrieval.

### Authentication and Authorization System
- Provides secure authentication and authorization using JWT tokens.
- Ensures users have appropriate access based on their roles.

### Role-Based Access Control
- Implements a role-based access control system to manage user permissions.
- Allows administrators to assign roles to users and manage access to different resources.

### Real-Time Notifications
- Utilizes WebSocket (Socket.io) for real-time notifications.
- Sends instant notifications to users about event updates, reminders, and more.

### Data Persistence System
- Utilizes a robust database system to ensure events are saved permanently.
- Supports data synchronization to ensure events are available even after the application or server is restarted.

## Project Objectives:
### Exploring API Development
- Design an API with a scalable, best-practice architecture for optimal maintenance and scalability.
- Implement RESTful principles to ensure a standardized approach to API development.

### Swagger Integration
- Leverage Swagger for API documentation and testing, enabling easy use and understanding of the API endpoints and methods.

### Third-Party Library Integration
- Incorporate libraries such as JWT for authentication and authorization, ensuring secure access to the API.
- Utilize Express.js for efficient routing and handling of API requests.
- Employ Socket.io for real-time communication and notifications.
- Integrate Moment.js for advanced date and time manipulation, enhancing the user experience.
