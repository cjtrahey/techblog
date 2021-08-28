async function newFormHandler(event) {
    event.preventDefault();

    // Get the post title, post text from form
    const title = document.querySelector('input[name="post-title"]').value;
    const post_text = document.querySelector('textarea[name="post-text"]').value;

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // if okay, reload page, otherwise display error
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  // listens for submit button
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);