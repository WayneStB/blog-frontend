let APIUrl = "http://localhost:3001";

// handles if we are running heroku
if (window.location.host.indexOf(".herokuapp.com") !== -1) {
    APIUrl = "https://waynestb-blog-backend.herokuapp.com";
}

export default APIUrl;
