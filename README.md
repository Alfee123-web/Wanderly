# 🌊 Wanderly

**Wanderly** is a full-stack Airbnb-style rental listing platform where users can browse, list, and review property rentals. Built as a hands-on major project to learn full-stack web development with Node.js and Express.

🔗 **Live Demo:** [wanderly-three-opal.vercel.app](https://wanderly-three-opal.vercel.app)

---

## 📸 Features

- 🏠 Browse and search property listings with images, pricing, and location
- 📝 Create, edit, and delete your own listings
- 🖼️ Image uploads powered by Cloudinary
- 🗺️ Interactive maps with Mapbox GL JS showing listing locations
- ⭐ Leave and manage star-rated reviews on listings
- 🔐 User authentication (sign up, log in, log out) with Passport.js
- 🎯 Category filters for browsing listings
- 📱 Fully responsive design with a custom "Ocean Slate" theme

---

## 🛠️ Tech Stack

**Backend**
- Node.js & Express.js
- MongoDB & Mongoose (MongoDB Atlas)
- Passport.js (`passport-local-mongoose`) for authentication
- express-session + connect-mongo for session persistence
- connect-flash for flash messages
- Joi for server-side validation

**Frontend**
- EJS templating with `ejs-mate` for layouts
- Bootstrap 5
- Font Awesome icons
- Starability for star ratings
- Custom CSS ("Ocean Slate" design system)

**Services & Integrations**
- MongoDB Atlas — database
- Cloudinary — image storage & hosting
- Mapbox GL JS — geocoding & interactive maps

**Deployment**
- Vercel (serverless deployment)

---

## 📂 Project Structure

```
MAJOR_PROJ/
├── controllers/       # Route logic (listings, reviews, users)
├── models/            # Mongoose schemas (Listing, Review, User)
├── routes/            # Express routers
├── views/
│   ├── listings/      # Listing pages (index, show, new, edit)
│   ├── users/         # Login/signup pages
│   ├── includes/      # Navbar, footer, flash partials
│   └── layouts/       # Boilerplate layout
├── public/
│   ├── css/           # Stylesheets
│   └── js/            # Client-side scripts (map.js, script.js)
├── utils/              # wrapAsync, ExpressError helpers
├── middleware.js       # Auth & validation middleware
├── app.js               # App entry point
├── schema.js            # Joi validation schemas
├── cloudConfig.js       # Cloudinary configuration
└── .env                 # Environment variables (not committed)
```

---

## ⚙️ Getting Started (Local Setup)

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account
- A [Cloudinary](https://cloudinary.com/) account
- A [Mapbox](https://www.mapbox.com/) account

### 1. Clone the repository
```bash
git clone https://github.com/Alfee123-web/Wanderly.git
cd Wanderly
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
```

### 4. Run the app
```bash
node app.js
```

The app will run at:
```
http://localhost:8080/listings
```

---

## 🚀 Deployment

This project is deployed on **Vercel**. Environment variables are configured in the Vercel dashboard under **Project Settings → Environment Variables**.

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🧠 Key Learnings

- Managing dependency version compatibility (`passport-local-mongoose`, `mongoose`, `multer-storage-cloudinary`)
- Correct middleware ordering (session → flash → passport → routes)
- Debugging cascading errors from database/session failures
- Handling stale seed data after schema changes
- Validating Mapbox geometry data before map initialization
- Deploying an Express app to a serverless platform and managing environment variables securely

---

## 📄 License

This project was built for educational purposes as part of a college major project.

---

## 🙏 Acknowledgements

- [Bootstrap](https://getbootstrap.com/)
- [Cloudinary](https://cloudinary.com/)
- [Mapbox](https://www.mapbox.com/)
- [Starability](https://github.com/LiamMartens/starability)
