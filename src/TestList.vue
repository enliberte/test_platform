<template>
	<div>
		<div class="card mt-3" v-for="test of tests">
			<div
				class="card-header">
				{{test.name}}
				<div class="btn-group float-right">
					<button
						type="button"
						class="btn btn-info float-right"
						:test="test.id"
						@click="passTest($event)">
						Пройти
					</button>
					<button
						type="button"
						class="btn btn-success float-right"
						:test="test.id"
						@click="editTest($event)">
						Ред.
					</button>
					<button
						type="button"
						class="btn btn-danger float-right"
						:test="test.id"
						@click="deleteTest($event)">
						X
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

    export default {
		data() {
			return {
				tests: []
			}
		},
		methods: {
			getTests() {
				axios.post('/api/tests', {})
					.then(
						res => {
							console.log(res.data);
							this.tests = res.data;
						}
					)
					.catch(
						err => {
							console.log(err);
						}
					);
			},
			deleteTest(event) {
				let testId = event.target.getAttribute('test');
				axios.post(`/api/delete/${testId}`, {})
					.then(
						res => {
							console.log(res);
							this.getTests();
						}
					)
					.catch(
						err => {
							console.log(err);
						}
					)
			},
			editTest(event) {
				let testName = event.target.getAttribute('test');
				this.$store.commit('editTest', testName);
			},
			passTest(event) {
				let testId = event.target.getAttribute('test');
				this.$store.commit('passTest', testId);
			}
		},
		mounted() {
			this.getTests();
		}
    }
</script>

<style scoped>

</style>
