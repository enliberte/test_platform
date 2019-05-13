<template>
	<div class="card mt-3">
		<div class="card-header">
			{{$store.state.testName}}
			<div class="btn btn-danger float-right" @click="hideResult">X</div>
		</div>
		<div class="card-body">
			<div>
				<span>Результат теста: {{$store.state.mark}}%</span>
				<table class="table mt-3">
					<thead class="thead-dark">
					<tr>
						<th scope="col">№ п.п</th>
						<th scope="col">Вопрос</th>
						<th scope="col">Верный ответ</th>
						<th scope="col">Выбранный ответ</th>
						<th scope="col">Результат</th>
					</tr>
					</thead>
					<tbody>
					<tr v-for="(question, index) of $store.state.questions">
						<th scope="row">{{index + 1}}</th>
						<td>{{question.text}}</td>
						<td>{{question.correctAnswerText}}</td>
						<td>{{question.selectedAnswer}}</td>
						<td>{{question.correctAnswerText === question.selectedAnswer ? 'Верно' : 'Неверно'}}</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        methods: {
        	hideResult() {
        		this.$store.commit('hideResult');
			}
		}
    }
</script>

<style scoped>

</style>
