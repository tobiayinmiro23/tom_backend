
this project was built with postgres, nanoid, bcryptjs and cors, postgres for database, nanoid for generating unique ids, 
bcryptjs for generating hash for password and 
cors for resource sharing, 
it is hosted on render with the free platform which makes the server sleep if there's inactivity, as such the speed can be a bit slow
# GsTechHub Website 2.0

A modern, full-stack website for GsTechHub built with Next.js, Prisma, and PostgreSQL.

## 🚀 Features

- Next.js 13+ with App Router
- Prisma ORM with PostgreSQL
- RESTful API endpoints
- Authentication and Authorization
- Project Onboarding System
- Blog Management
- Portfolio Showcase
- Service and Pricing Management
- Contact Form System
- Fun Facts Display

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Gs-Tech-Hub/gstechweb2.0.git
   cd gstechweb2.0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/gstechweb"
   JWT_SECRET="your-secret-key"
   ```

4. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
├── prisma/
│   └── schema.prisma       # Database schema
├── src/
│   ├── app/               # Next.js 13+ App Router
│   │   ├── api/          # API routes
│   │   └── ...           # Page routes
│   ├── components/        # React components
│   ├── lib/              # Utility functions
│   │   ├── prisma.ts     # Prisma client
│   │   └── utils/        # Helper functions
│   └── middleware/        # Authentication middleware
└── public/               # Static files
```

## 📚 API Documentation

### Project Onboarding
- `GET /api/project-onboarding` - List all projects
- `POST /api/project-onboarding` - Create new project
- `GET /api/project-onboarding/[id]` - Get project details
- `PUT /api/project-onboarding/[id]` - Update project
- `DELETE /api/project-onboarding/[id]` - Delete project

### Blog Posts
- `GET /api/posts` - List all posts
- `POST /api/posts` - Create new post
- `GET /api/posts/[id]` - Get post details
- `PUT /api/posts/[id]` - Update post
- `DELETE /api/posts/[id]` - Delete post

### Services
- `GET /api/services` - List all services
- `POST /api/services` - Create new service
- `GET /api/services/[id]` - Get service details
- `PUT /api/services/[id]` - Update service
- `DELETE /api/services/[id]` - Delete service

## 🔒 Authentication

All API routes are protected by JWT authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-token>
```

## 🧪 Data Validation

Request data is validated using Zod schemas. Each model has its own validation schema in `src/lib/utils/validation.ts`.

## 📝 Environment Variables

- `DATABASE_URL`: PostgreSQL database connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `NODE_ENV`: Environment mode ('development' or 'production')

## 📦 Dependencies

