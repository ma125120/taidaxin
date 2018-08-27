<template>
  <div id="app">
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body,html,div,p,ul,ol {
  margin:0;
  padding:0;
}
ul {
  list-style: none;
}
.a-center {
  align-items:center;
}
.between {
  justify-content: space-between;
}
.padding-b36 {
  padding-bottom: 36px;
}
.red-font {
  color: #c40000;
}
.gray-bg {
  background: #F0F0F0;
}
.bold {
  font-weight: 600;
}
.my-sub-text {
  font-size:18px;
  margin-bottom: 60px;
}
.margin-bottom {
  margin-bottom: 32px;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.around {
  justify-content: space-around;
}
.wrap {
  flex-wrap: wrap;
}
.column {
  flex-direction: column;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.hover:hover {
  cursor: pointer;
}
.margin-top {
  margin-top: 24px;
}
.my-card {
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  background: #fff;
  color: #000;
  border-radius: 4px;
}
.my-card:hover {
  cursor: pointer;
  box-shadow: 6px 6px 18px 0 rgba(0,0,0,.1),-6px -6px 18px 0 rgba(0,0,0,.1);
  transition: box-shadow .3s ease-out;
}
.flex {
  display: flex;
}
.my-width {
  width:100%;
  max-width: 1200px;
  margin: 0 auto;
}
.center {
  display: flex;
  justify-content: center;
}
.all-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
