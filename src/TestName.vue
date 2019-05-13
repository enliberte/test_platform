<template>
	<div>
		<textarea
			class="form-control mt-3"
			cols="30"
			rows="1"
			v-model="$store.state.testName" placeholder="Введите название теста">
		</textarea>
		<button
			class="btn btn-success mt-3 float-right"
			@click="saveTest">
			Сохранить тест
		</button>
	</div>
</template>

<script>
    export default {
		methods: {
			saveTest() {
				this.$store.commit('saveTest');
			}
		}
    }
</script>

<style scoped>

</style>
