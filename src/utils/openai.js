import OpenAI from 'openai';
import { OPENAI_API_KEY } from './constants';

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // allows the OpenAI client to be used in browser environments 
});
export default openai;