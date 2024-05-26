import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            posts: []
        };
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        addPost(state, post) {
            state.posts.push(post);
        },
        deletePost(state, postId) {
            state.posts = state.posts.filter(post => post.id !== postId);
        },
        updatePostTitle(state, payload) {
            const post = state.posts.find(post => post.id === payload.id);
            if (post) {
                post.title = payload.title;
            }
        },
        updatePostBody(state, payload) {
            const post = state.posts.find(post => post.id === payload.id);
            if (post) {
                post.body = payload.body;
            }
        }
    },
    actions: {
        async fetchPosts({ commit }) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const posts = response.data.map(post => ({
                ...post,
                editingTitle: false,
                editingBody: false,
                editedTitle: post.title,
                editedBody: post.body
            }));
            commit('setPosts', posts);
        },
        createPost({ commit }, { title, body }) {
            const lastPostId = this.state.posts.length > 0 ? this.state.posts[this.state.posts.length - 1].id : 0;
            const newPost = {
                id: lastPostId + 1,
                title,
                body,
                userId: 11,
                editingTitle: false,
                editingBody: false,
                editedTitle: title,
                editedBody: body
            };
            commit('addPost', newPost);
        },
        deletePost({ commit }, postId) {
            commit('deletePost', postId);
        },
        saveEdit({ commit }, { post, field }) {
            if (field === 'title') {
                commit('updatePostTitle', { id: post.id, title: post.editedTitle });
            } else if (field === 'body') {
                commit('updatePostBody', { id: post.id, body: post.editedBody });
            }
        }
    }
});