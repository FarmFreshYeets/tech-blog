const submitFormHandler = async (event) => {
    event.preventDefault()

    const body = document.querySelector('#comment-body').value.trim();
    const post_id = event.target.getAttribute('data-id');

    if (body) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ body, post_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/posts/${post_id}`);
        } else {
            alert('Failed to create comment');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const post_id = event.target.getAttribute('post-id')
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace(`/posts/${post_id}`);
      } else {
        alert('Failed to delete comment');
      }
    }
  };

  document.querySelector('#add-comment-form').addEventListener('submit', submitFormHandler)
  document.querySelector('.del-btn').addEventListener('click', delButtonHandler)