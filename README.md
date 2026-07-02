# 🏡 Wanderly

Wanderly is an Airbnb-inspired property listings web application built as a major project to practice full-stack web development. Users can browse listings, view details, add reviews with ratings, and (soon) manage their own property listings through authenticated accounts.

## 🚀 Features

- **Listings CRUD** — Create, view, update, and delete property listings
- **Image Handling** — Nested image schema (`{ url, filename }`) for listing photos
- **Reviews & Ratings** — Users can leave comments and star ratings on listings
- **Server-side Validation** — Joi schema validation for listings and reviews
- **Error Handling** — Centralized error handling with `wrapAsync` for async routes
- **RESTful Routes** — Clean route structure using Express Router
- **Responsive UI** — Built with Bootstrap 5 and EJS templating (via `ejs-mate` layouts)

## 🛠️ Tech Stack

| Layer          | Technology                     |
|----------------|---------------------------------|
| Backend        | Node.js, Express.js            |
| Database       | MongoDB, Mongoose               |
| Templating     | EJS, EJS-Mate                   |
| Styling        | Bootstrap 5                     |
| Validation     | Joi                              |
| Utilities      | method-override, wrapAsync      |

## 📂 Project Structure

```
MAJOR_PROJ/
├── classroom/
│   ├── routes/
│   ├── views/
│   └── server.js
├── init/
│   ├── data.js
│   └── index.js
├── models/
├── node_modules/
├── public/
├── routes/
│   ├── listing.js
│   └── review.js
├── utils/
├── views/
├── app.js
├── schema.js
├── package.json
└── .gitignore
```

## ⚙️ Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/wanderly.git
   cd wanderly
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up your environment variables (create a `.env` file)
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=8080
   ```

4. Start the server
   ```bash
   node app.js
   ```
   or with nodemon (auto-restart on changes):
   ```bash
   nodemon app.js
   ```

5. Visit the app in your browser
   ```
   http://localhost:8080/listings
   ```

## 🚧 Project Status

This project is actively under development. Current focus areas include debugging the reviews/comments system and building out user authentication.

## 📌 Upcoming Features

- User authentication & authorization
- Search and filter listings
- User dashboard for managing own listings
- Image upload via Cloudinary

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are welcome via issues or pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
