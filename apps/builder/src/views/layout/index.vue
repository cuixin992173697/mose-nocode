 <template>
	<div class="container">
		<left-panel-container />
		<preview-container />
		<right-panel-container />
	</div>
 </template>
 
 <script setup lang="ts">
 import leftPanelContainer from './components/left-panel-container.vue';
 import previewContainer from './components/preview-container.vue';
 import rightPanelContainer from './components/right-panel-container.vue';
 </script>
 
 <style lang="scss" scoped>
 .container {
	display: flex;
	justify-content: space-between;
	height: calc(100vh - 44px);
 }
 </style>