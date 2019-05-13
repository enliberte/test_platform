<template>
	<div class="card mt-3">
		<div class="card-header">
			{{$store.state.testName}}
			<button
				class="btn btn-success float-right"
				:test="$store.state.testId"
				@click="checkTest">
				Проверить
			</button>
		</div>
		<div class="card-body">
			<div class="card mt-3" v-for="question of $store.state.questions">
				<div class="card-header">
					{{question.text}}
				</div>
				<ul class="list-group">
					<li class="list-group-item" v-for="answer of question.answers">
						<label>
							<input type="radio" :value="answer.text" v-model="question.selectedAnswer">{{answer.text}}
						</label>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        methods: {
        	checkTest() {
        		this.$store.commit('checkTest');
			}
		}
    }
</script>

<style scoped>

</style>
