import axios from 'axios';

class TodoService {
  constructor(){
    this.api = axios.create({
      baseURL: 'http://localhost:4000',
      withCredentials: true
    })
  }

  getTodo = async id => {
    try {
      const { data } = await this.api.get(`/todos/${id}`)
      return data
    } catch(err) {
      console.log(err)
    }
  }

  getTodos = async () => {
    try {
     const { data } = await this.api.get('/todos')
     return data
    } catch(err) {
      console.log(err)
    }
  }

  createTodo = async body => {
    try {
      const { data } = await this.api.post('/todos', body)
      return data
    } catch(err) {
      console.log(err)
    }
  }

  updateTodo = async (id, body) => {
    try {
      const { data } = await this.api.put(`/todos/${id}`, body)
      return data
    } catch(err) {
      console.log(err)
    }
  }

  deleteTodo = async id => {
    try {
      await this.api.delete(`/todos/${id}`)
      return
    } catch(err) {
      console.log(err)
    }
  }

}

const todoService = new TodoService();
export default todoService;