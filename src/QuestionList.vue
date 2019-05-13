<template>
	<div>
		<div class="card mt-3" v-for="question of $store.state.questions">
			<div class="card-header">
				{{question.text}}
				<div class="btn-group float-right">
					<button
						type="button"
						class="btn btn-success float-right"
						:questionid="question.id"
						@click="editQuestion($event)">
						Ред.
					</button>
					<button
						type="button"
						class="btn btn-danger float-right"
						:questionid="question.id"
						@click="deleteQuestion($event)">
						X
					</button>
				</div>
			</div>
			<ul class="list-group">
				<li class="list-group-item" v-for="answer of question.answers">
					<label>
						<input
							type="radio"
							:value="answer.text"
							v-model="question.correctAnswerText"> {{answer.text}}
					</label>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
    export default {
		methods: {
			deleteQuestion(event) {
				let questionId = event.target.getAttribute('questionid');
				this.$store.commit('deleteQuestion', questionId);
			},
			editQuestion(event) {
				let questionId = event.target.getAttribute('questionid');
				this.$store.commit('editQuestion', questionId);
			}
		}
    }
</script>

<style scoped>

</style>
