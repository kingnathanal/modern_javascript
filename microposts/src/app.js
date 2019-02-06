import { http } from './http';
import { ui } from './ui';

// get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// delete post
document.querySelector('#posts').addEventListener('click', deletePost);

// listen for edit state
document.querySelector('#posts').addEventListener('click',enableEdit);

// list for cancel button
document.querySelector('.card-form').addEventListener('click',cancelEdit);

// get posts
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

// add post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  // validate input
  if(title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
  } else {

    const data = {
      title,
      body
    }

    // check for id
    if(id === '') {
      // create post
      http.post('http://localhost:3000/posts', data)
      .then(data => {
        ui.showAlert('Post added', 'alert alert-success');
        ui.clearFields();
        getPosts();
      })
      .catch(err => console.log(err));
    } else {
      // update the post
      http.put(`http://localhost:3000/posts/${id}`, data)
      .then(data => {
        ui.showAlert('Post updated', 'alert alert-success');
        ui.changeFormState('add');
        getPosts();
      })
      .catch(err => console.log(err));
    }

    
  
    
  }  
}

// delete post
function deletePost(e) {

    e.preventDefault();

    if(e.target.parentElement.classList.contains('delete')) {
      const id = e.target.parentElement.dataset.id;
      if(confirm('Are you sure?')) {
        http.delete(`http://localhost:3000/posts/${id}`)
          .then(data => {
            ui.showAlert('Post Removed','alert alert-success');
            getPosts();
          })
          .catch(err => console.log(err));
      }
    }
}

// enable edit state
function enableEdit(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains('edit')) {
    //onsole.log(e.target.parentElement.dataset.id);
    const id = e.target.parentElement.dataset.id;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

    //console.log(id, body, title);

    const data = {
      id,
      title,
      body
    }

    // fill form with current post
    ui.fillForm(data);
  }
}

// cancel edit state
function cancelEdit(e) {
  if(e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
  e.preventDefault();
}