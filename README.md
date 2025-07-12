# Netflix-GPT

- Create React App: npx create-react-app app-name
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In User API 
- Created Redux Store with userSlice
- Implemented Sign Out
- Update Profile API
- BugFix: SignUp user login displayName & photoURL updated
- BugFix: If the user is not logged in Redirect to '/browse' to Login Page '/' and vice-versa.
- Unsubscribed to onAuthStateChanged callback
- Add hardcoded values to constants file
- Register TMDB API & create an app & get access token
- Get data from TMDB 'Now Playing <- Movies List' API 
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContainer & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component  
- Build Movie List  
- build Movie Card  
- TMDB Image CDN URL  
- Made the Browse page amazing with Tailwind CSS
- Used Custom Hooks: useNowPlayingMovies, usePopularMovies, useTopRatedMovies, useUpcomingMovies
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App
- Get Open AI Api Key
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Reused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive
- Added NowWatching component to display current movie being watched.
- Refactored MovieCard and MovieList components for improved functionality and state management.
- Note: if firebase login throw error run: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Features
- Login/Sign Up
    - Sign In/Sign Up Form
    - redirect to Browse Page
- Browse (after Authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title and Description
        - Movie Suggestions
            - Movies List (vertical scrollable)
- Netflix GPT
    - Search Bar
    - Movie Suggestions

### FIREBASE URL : https://console.firebase.google.com/
### TMDB URL : https://www.themoviedb.org/
### OpenAI API : https://openai.com/index/openai-api/
###              https://www.npmjs.com/package/openai/v/4.8.0
### Alt: https://openrouter.ai/google/gemma-3n-e4b-it:free/api

