<template>
	<div class="container">
		<app-nav></app-nav>
		<app-test-list v-if="$store.state.testListDisplayed"></app-test-list>
		<app-create-test-panel v-if="$store.state.createTestPanelDisplayed"></app-create-test-panel>
		<app-test-panel v-if="$store.state.passTestPanelIsDisplayed"></app-test-panel>
		<app-result v-if="$store.state.resultPanelDisplayed"></app-result>
	</div>
</template>

<script>
	import CreateTestPanel from './CreateTestPanel.vue'
	import TestList from './TestList.vue'
	import Navbar from './NavBar.vue'
	import TestPanel from './TestPanel.vue'
	import Result from './Result.vue'

    export default {
		components: {
			appTestList: TestList,
			appCreateTestPanel: CreateTestPanel,
			appNav: Navbar,
			appTestPanel: TestPanel,
			appResult: Result
		}
    }
</script>

<style>
	body {
		padding-top: 60px;
	}
</style>
