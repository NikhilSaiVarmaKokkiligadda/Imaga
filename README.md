# Imaga - Full-Stack Media Management Application

Imaga is a full-stack MERN application that allows users to upload, view, and manage media files (images & videos).
The backend supports both AWS S3 storage and local storage using Multer.
This project demonstrates backend API handling, authentication, file storage, and AWS integration.

---

## **Features**
- User authentication with JWT (Login & Registration)
- Secure password hashing using bcrypt
- Media upload functionality (Images & Videos)
- AWS S3 or Multer for file storage
- Media gallery with filtering options
- Delete uploaded media securely
- Pagination support for media retrieval
- Responsive UI with Material-UI
- Protected routes with JWT authentication
- State management using Redux Toolkit
- Error handling and validation
- Fully deployed on Vercel (frontend & backend) and MongoDB Atlas

---

## **Tech Stack**

### **Frontend** ([Imaga_frontend](https://github.com/NikhilSaiVarmaKokkiligadda/Imaga_frontend))
- React.js
- Redux Toolkit
- Material-UI
- Axios
- React Router
- React Dropzone

### **Backend** ([Imaga_backend](https://github.com/NikhilSaiVarmaKokkiligadda/Imaga))
- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (for local storage)
- AWS SDK (for S3 storage)
- JWT for authentication
- bcrypt for password hashing
- dotenv for environment variables
- CORS for cross-origin requests

---

## **Setup Instructions**

### **1. Clone the repositories**
```sh
# Clone the frontend
git clone https://github.com/NikhilSaiVarmaKokkiligadda/Imaga_frontend.git
cd Imaga_frontend

# Clone the backend
git clone https://github.com/NikhilSaiVarmaKokkiligadda/Imaga.git
cd Imaga
```

### **2. Backend Setup**
#### **Install dependencies**
```sh
cd Imaga  # Navigate to the backend folder
npm install
```

#### **Environment Variables (.env file)**
Create a `.env` file in the root of the **backend** folder and configure the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
S3_BUCKET_NAME=your_s3_bucket_name
UPLOAD_PATH=uploads # If using local storage
```

#### **Run the backend server**
```sh
npm run dev
```
The backend will run on `http://localhost:5000`

---

### **3. Frontend Setup**
#### **Install dependencies**
```sh
cd ../Imaga_frontend  # Navigate to the frontend folder
npm install
```

#### **Environment Variables (.env file)**
Create a `.env` file in the root of the **frontend** folder and configure the API URL:
```env
REACT_APP_API_URL=http://localhost:5000
```

#### **Run the frontend application**
```sh
npm start
```
The frontend will run on `http://localhost:3000`

---

## **Deployment**

### **1. Backend Deployment (Vercel)**
- Install Vercel CLI:
  ```sh
  npm install -g vercel
  ```
- Deploy the backend:
  ```sh
  vercel --prod
  ```

### **2. Frontend Deployment (Vercel)**
- Navigate to the frontend folder:
  ```sh
  cd Imaga_frontend
  ```
- Deploy the frontend:
  ```sh
  vercel --prod
  ```

### **3. Database Deployment**
- Used **MongoDB Atlas** for cloud database storage.
- Configure the **MONGO_URI** in the backend `.env` file.

---

## **API Endpoints**
### **Authentication Routes**
| Method | Endpoint          | Description |
|--------|------------------|-------------|
| POST   | /api/register | User registration |
| POST   | /api/login    | User login |

### **Media Routes**
| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| POST   | /api/media/upload  | Upload media file |
| GET    | /api/media/:id      | Fetch all media (pagination supported) |
| DELETE | /api/media/:id     | Delete a media file |

---

## **Usage**
1. Register a new user and log in.
2. Upload images and videos.
3. View uploaded media in the gallery.
4. Delete media if needed.

---

## **Contributing**
1. Fork the repositories.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your branch and create a pull request.

---

## **Contact**
For any queries, reach out to **Nikhil Sai Varma Kokkiligadda**:
- LinkedIn: [linkedin.com/in/nikhilsaivarmakokkiligadda](http://linkedin.com/in/nikhilsaivarmakokkiligadda)
- GitHub: [github.com/NikhilSaiVarmaKokkiligadda](http://github.com/NikhilSaiVarmaKokkiligadda)

---

## **License**
This project is licensed under the MIT License.

