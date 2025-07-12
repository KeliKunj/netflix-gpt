export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY,
  }
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg";
export const SUGGESTED_LANGUAGES = [
  { identifier: 'en', label: 'English' },
  { identifier: 'hi', label: 'Hindi' },
  { identifier: 'es', label: 'Spanish' },
  { identifier: 'ta', label: 'Tamil' },
  { identifier: 'te', label: 'Telugu' },
  { identifier: 'kn', label: 'Kannada' },
  { identifier: 'ml', label: 'Malayalam' },
  { identifier: 'bn', label: 'Bengali' },
  { identifier: 'gu', label: 'Gujarati' },
  { identifier: 'mr', label: 'Marathi' },
  { identifier: 'pa', label: 'Punjabi' }
];
export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
