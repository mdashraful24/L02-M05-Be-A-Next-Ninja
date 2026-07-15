import MyServerComponent from "../ui/MyServerComponent";

const BlogsPage = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");

  const postData = await posts.json();

  console.log(postData);

  return (
    <div>
      Blogs Page

      <MyServerComponent />
    </div>
  )
}

export default BlogsPage
