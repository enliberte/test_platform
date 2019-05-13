<template>
	<div class="button-group mt-3">
		<button
			v-if="$store.state.editQuestionPanelDisplayed"
			type="button"
			class="btn btn-success"
			@click="saveQuestion">
			Сохранить вопрос
		</button>
		<button
			type="button"
			class="btn"
			:class="buttonClass"
			@click="toggleQuestion">
			{{buttonText}}
		</button>
	</div>
</template>

<script>
	export default {
		computed: {
			buttonText() {
				return this.$store.state.editQuestionPanelDisplayed ? 'Отменить добавление вопроса' : 'Добавить вопрос';
			},
			buttonClass() {
				return {
					'btn-success': !this.$store.state.editQuestionPanelDisplayed,
					'btn-danger': this.$store.state.editQuestionPanelDisplayed
				};
			},
		},
		methods: {
			toggleQuestion() {
				this.$store.commit('addQuestion');
			},
			saveQuestion() {
				this.$store.commit('saveQuestion');
			}
		}
    }
</script>

<style scoped>

</style>
