<template>
	<ul class="list-group mt-3">
		<li
			class="list-group-item"
			v-for="answer of $store.state.answers">
			<label>
				<input
					type="radio"
					:value="answer.text"
					v-model="$store.state.correctAnswerText"> {{answer.text}}
			</label>
			<div class="btn-group float-right">
				<button
					type="button"
					class="btn btn-success"
					:answer="answer.id"
					@click="editAnswer($event)">
					Ред.
				</button>
				<button
					type="button"
					class="btn btn-danger"
					:answer="answer.id"
					@click="deleteAnswer($event)">
					X
				</button>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		methods: {
			deleteAnswer(event) {
				let answerId = event.target.getAttribute('answer');
				this.$store.commit('deleteAnswer', answerId);
			},
			editAnswer(event) {
				let answerId = event.target.getAttribute('answer');
				this.$store.commit('editAnswer', answerId);
			}
		}
    }
</script>

<style scoped>

</style>
