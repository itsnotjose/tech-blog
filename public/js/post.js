const post = async (event) => {
  event.preventDefault();
  const postTitle = document.getElementById('title').value;
  const postText = document.getElementById('text').value;
  const user_id = document.getElementById("text").getAttribute("user_id");

  if (postTitle && postText) {
  const response = await fetch('/api/dashboard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: postTitle, 
      text: postText, 
      user_id: user_id}),
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}
}
document.getElementById('postForm').addEventListener('submit', post);

//delete post





