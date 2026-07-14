import axios from 'axios';

const APP_API_URL = import.meta.env.VITE_APP_API_URL;

export async function apiGetChats() {
  return await axios.get(APP_API_URL + '/chats');
}
export async function apiGetChatUsers() {
  return await axios.get(APP_API_URL + '/chats/users');
}
