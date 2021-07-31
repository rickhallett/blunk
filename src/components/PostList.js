import { connect } from "react-redux";
import Post from "./Post";

function PostList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(PostList);
