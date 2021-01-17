<template>
	<div id="app">
		<app-header></app-header>
		<router-view></router-view>
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
