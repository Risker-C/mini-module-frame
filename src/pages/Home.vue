<template>
  <div class="home">
    <div class="frame">
    <header>
      <img src="../assets/VML.svg" />
      <h1>vue-module-loader</h1>
      <h2>微前端架构</h2>
      <button @click="$router.push('/')">本地模块</button> |
      <button @click="$router.push('/module-page')">远程模块</button>
    </header>
  </div>

    <p>这里是主框架模板工程页面</p>
  </div>
</template>

<style>
  body {
    margin: 0;
  }
  .frame {
    text-align: center;
  }
  .frame img {
    width: 300px;
  }
  .frame a {
    color: #49b883;
  }
  header {
    padding: 100px 0;
    background: #fff;
  }
  </style>