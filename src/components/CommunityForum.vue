<template>
    <div>
        <h2>Community Forum</h2>
        <router-link to="/products">Back to Products</router-link>
        <div>
        <button @click="toggleCreatePostForm">Create New Post</button>
        <form v-if="showCreatePostForm" @submit.prevent="createPost">
            <label for="postContent">Post Content:</label>
            <textarea id="postContent" v-model="newPostContent" required></textarea>
            <button type="submit">Create Post</button>
        </form>
        </div>
        <div v-for="post in forumPosts" :key="post.id" class="forum-post">
        <p>{{ post.content }}</p>
        <button @click="editPost(post.id)">Edit</button>
        <button @click="deletePost(post.id)">Delete</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'CommunityForum',
  // Add necessary data, methods, and components
  data () {
    return {
      showCreatePostForm: false,
      newPostContent: '',
      editedPostId: null,
      editedPostContent: ''
    }
  },
  computed: {
    forumPosts () {
      return this.$store.getters.forumPosts
    }
  },
  methods: {
    toggleCreatePostForm () {
      this.showCreatePostForm = !this.showCreatePostForm
    },
    createPost () {
      const newPost = {
        id: Date.now(),
        content: this.newPostContent
      }
      this.$store.dispatch('addToForum', newPost)
      this.newPostContent = ''
      this.toggleCreatePostForm()
    },
    editPost (postId) {
      const post = this.forumPosts.find(post => post.id === postId)
      if (post) {
        this.editedPostId = postId
        this.editedPostContent = post.content
      }
    },
    saveEditedPost () {
      if (this.editedPostId !== null) {
        this.$store.dispatch('editForumPost', {
          postId: this.editedPostId,
          newContent: this.editedPostContent
        })
        this.editedPostId = null
        this.editedPostContent = ''
      }
    },
    deletePost (postId) {
      this.$store.dispatch('deleteForumPost', postId)
    }
  },
  watch: {
    editedPostContent: {
      handler: 'saveEditedPost',
      immediate: false
    }
  }
}
</script>
<style scoped>
.forum-post {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}
/* Add styles for CommunityForum component */
</style>
