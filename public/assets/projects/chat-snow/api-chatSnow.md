# API REST ChatSnow

## General Description
This API provides a plateform for real-time communication between users. It allows users to engage in one-on-one or group conversations with instant messaging features. The application aims to facilitate seamless, real-time chat interactions, prividing a smooth and responsive environment for users to communicate.

## Main Features:
### Authentication system
- Secure user authentication using modern practises, such as JWT tokens (accessToken with refreshToken) for session managment.

### User profile management
- Users can manage their profile including setting or updating their avatar, name, and password.
- password reset functionality in case of forgotten credentials.

### Conversation creation
- Users can create both private or and group conversations.
- group conversations allow mulitple users to participate in a whared chat.

### Real-time communication
- instant, real-time messaging using webSocket
- notification for a new message and updates to conversations.
- Synchronization of message history in real-time for all participants.

### Upload image file storage (using cloud file storage service)
- Users can upload avatar or image file in conversations.

## Project objectives
### Ecploration of api development
- gain hands-on experience in developin RESTful APIs within a NodeJs environment
- explore efficient and scalable backend architecture and clean code, including real-time communication features.

### Exploration of real-time chat system
- Learn the intricacies of implementing real-time communication using websocket and other technologies
- Understand challenges such as message synchronization, concurrency handling, and maintaining performance while scaling.
  
This project aims to provide a solid foundation for building scalable communication platforms with real-time interaction capabilities.