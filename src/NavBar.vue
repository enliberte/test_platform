<template>
    <nav class="navbar navbar-dark bg-dark fixed-top">
		<span class="navbar-brand">Платформа для тестирования</span>
		<div class="btn-group float-right">
			<button
				type="button"
				class="btn btn-light"
				@click="passTest">
				Пройти тест
			</button>
			<button
				type="button"
				class="btn btn-light"
				@click="createTest">
				Создать тест
			</button>
		</div>
	</nav>
</template>

<script>
    export default {
		methods: {
			createTest() {
				this.$store.state.resultPanelDisplayed = false;
				this.$store.commit('createTest');
			},
			passTest() {
				this.$store.state.resultPanelDisplayed = false;
				this.$store.state.testListDisplayed = true;
				this.$store.state.createTestPanelDisplayed = false;
			}
		}
    }
</script>

<style scoped>

</style>
