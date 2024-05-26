<template>
  <header class="header">
    <nav class="navigation">
      <ul class="navigation-list">
        <li><router-link to="/" exact active-class="active-link">Главная</router-link></li>
        <li><router-link to="/posts" active-class="active-link">Посты</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.header {
  padding: 0;
  margin: 0;
  background-color: #B8B2FF;
}
.navigation {
  padding: 12px 0;
}
.navigation-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0;
  padding: 0;
}
.navigation-list li {
  list-style: none;
}

li a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;

}
.active-link {
  color: #6A35FF;
}
</style>