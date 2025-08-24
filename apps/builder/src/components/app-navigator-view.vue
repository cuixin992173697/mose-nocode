<!-- 应用导航 -->
<template>
	<div class="navigator">
		<div class="title">
			mose无代码平台
		</div>
		<div class="menu">
			<router-link to="/app/dataSource" class="nav-link">数据源</router-link>
			<router-link to="/app/layout" class="nav-link">布局</router-link>
			<router-link to="/app/actions" class="nav-link">操作</router-link>
		</div>
		<div class="publish">
			<el-button>发布</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.navigator {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 44px;
}
.nav-link {
  color: #409eff;
  font-weight: bold;
  text-decoration: none;
  padding: 4px 12px;
  border-radius: 4px;
  &:hover {
    background: #f0f7ff;
  }
}
.router-link-active {
  color: #67c23a;
} 
.publish {
	margin-right: 20px;
}
</style>