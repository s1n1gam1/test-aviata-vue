<template>
	<div id="app">
		<app-header></app-header>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import AppHeader from './components/layout/AppHeader'

	export default {
		name: 'App',
		components:{
			AppHeader
		}
	}
</script>

<style lang="scss">
	@import './scss/main.scss';
</style>
