import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
      url: "",
      title: "",
      posts:[
        {
          id: 1,
          url: "https://wpassets.trainingpeaks.com/wp-content/uploads/2018/04/02142228/04078-hal-higdon-top-10-running-tips-blog-700x394.jpg",
          title: "running"
        }
      ]
  }

  /*
  Handle input change to onSubmit
  @param event
  */
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  
  /*
  Add a new post to state
  @param event
  */
  onSubmit = (e) => {
    e.preventDefault();
    const { url, title} = this.state;
    const postsInState = this.state.posts;
    const postsArrayLength = postsInState.length; 
    const id = postsArrayLength ? ( postsInState[postsArrayLength -1].id + 1) : 1;

    this.setState({
      posts:[
        ...postsInState,
        Object.assign({}, {
          id,
          url, 
          title
        })
      ],
      url: "",
      title: ""
    })
  };

  /*
  update new posts 
  @param event
  */
  handlePostsUpdate = (e) =>{
    return this.posts;
  }

  render() {
    return (
      <div class="container">
        <div class="user">
            <input name="url"
                 value={this.state.url}
                 placeholder="Enter a url"
                 onChange = { e => this.handleChange(e)}/>
            <input name="title"
                 type="text"
                 value={this.state.title}
                 placeholder="Title"
                 onChange = { e => this.handleChange(e)}/>
            <input type="submit" 
                   value="New Post"
                   onClick={ (e) => this.onSubmit(e)}/> 
          </div>

          <div className="row">
          {
          this.state.posts.map((item)=>  <div class="post" key={item.id} onChange = {this.handlePostsUpdate}>
                                            <p> {item.title} </p>
                                            <img src={item.url} alt={item.title}></img>
                                          </div>)
          }
          </div>
      </div>
    );
  }
}

export default App;
