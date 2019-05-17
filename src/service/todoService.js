import axios from 'axios';

class TodoService {
  constructor(){
    this.api = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true
    })
  }

  getTodos = async () => {
    try {
      await this.api.get('/')
    } catch(err) {
      console.log(err)
    }
  }
}

const todoService = new TodoService();
export default todoService;