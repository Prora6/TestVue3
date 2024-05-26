<template>
  <div class="px-2">
    <div class="mb-3">
      <h3>Создать пост</h3>
      <div class="flex-column">
        <label for="exampleTitleInput" class="form-label">Название поста</label>
        <input type="text" v-model="newPostTitle" class="form-control" id="exampleTitleInput" placeholder="Введи назвнание">
      </div>

      <div class="flex-column">
        <label for="exampleTextarea" class="form-label">Текст поста</label>
        <textarea class="form-control" id="exampleTextarea" v-model="newPostBody" placeholder="Введи текст"></textarea>
      </div>
      <button type="button" class="btn btn-primary mt-3" @click="handleCreatePost">Добавить пост</button>
    </div>

    <h3>Созданные посты</h3>
    <ul class="posts-list">
      <li v-for="post in posts" :key="post.id" class="mb-3 p-2 border rounded-4 border-primary">
        <div class="flex-column mb-3">
          <label :for="`postTitleInput-${post.id}`" class="form-label w-100 text-start">Название поста</label>
          <div class="d-flex">
            <input type="text" v-model="post.editedTitle" class="form-control input" :id="`postTitleInput-${post.id}`" :disabled="!post.editingTitle" placeholder="Введи название">
            <button type="button" class="btn btn-primary btn-edit" @click="handleEdit(post, 'title')">
              {{ post.editingTitle ? 'Сохранить название' : 'Редактировать название' }}
            </button>
          </div>

        </div>
        <div class="flex-column mb-3">
          <label :for="`postTextarea-${post.id}`" class="form-label w-100 text-start">Текст поста</label>
          <div class="d-flex">
            <textarea class="form-control textarea" :id="`postTextarea-${post.id}`" v-model="post.editedBody" :disabled="!post.editingBody" placeholder="Введи текст"></textarea>
            <button class="btn btn-primary btn-edit" @click="handleEdit(post, 'body')">
              {{ post.editingBody ? 'Сохранить текст' : 'Редактировать текст' }}
            </button>
          </div>
        </div>
        <div class="w-100 d-flex justify-content-end">
          <button type="button" class="btn btn-danger" @click="deletePost(post.id)">Удалить пост</button>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PostsList',
  data() {
    return {
      newPostTitle: '',
      newPostBody: ''
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    ...mapActions(['fetchPosts', 'createPost', 'deletePost', 'saveEdit']),
    handleCreatePost() {
      if (this.newPostTitle.trim() && this.newPostBody.trim()) {
        this.createPost({ title: this.newPostTitle, body: this.newPostBody });
        this.newPostTitle = '';
        this.newPostBody = '';
      }
    },
    handleEdit(post, field) {
      if (field === 'title') {
        if (!post.editingTitle) {
          post.editedTitle = post.title;
        } else {
          post.title = post.editedTitle;
          this.saveEdit({ id: post.id, title: post.editedTitle });
        }
        post.editingTitle = !post.editingTitle;
      } else if (field === 'body') {
        if (!post.editingBody) {
          post.editedBody = post.body;
        } else {
          post.body = post.editedBody;
          this.saveEdit({ id: post.id, body: post.editedBody });
        }
        post.editingBody = !post.editingBody;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>
<style>
.posts-list {
  margin: 0;
  padding: 0;
}
.form-control.input {
  width:75% ;
}
.form-control.textarea {
  width:75% ;
}
.btn-edit {
  height: 38px;
}
</style>