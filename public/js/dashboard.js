// const newPostButton = (event) => {
//     event.preventDefault()

//     document.querySelector('#new-post-form').classList.remove('invisible')
// }

// const editPostButton = async (event) => {
//     event.preventDefault()

//     const id = event.target.getAttribute('data-id')
//     document.location.replace('/editpost')
// }

const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();

    if (title && body) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);
document
    .querySelector('.delete-post-btn')
    .addEventListener('click', delButtonHandler);
document
    .querySelector('.edit-post-btn')
    .addEventListener('click', editPostButton);
document
    .querySelector('#new-post-btn')
    .addEventListener('click', newPostButton);