<template>
	<div class="button-group mt-3">
		<button
			v-if="this.$store.state.editAnswerPanelDisplayed"
			type="button"
			class="btn btn-success"
			@click="saveAnswer">
			Сохранить вариант ответа
		</button>
		<button
			type="button"
			class="btn"
			:class="buttonClass"
			@click="toggleAnswer">
			{{buttonText}}
		</button>
	</div>
</template>

<script>
	export default {
        computed: {
			buttonText() {
				return this.$store.state.editAnswerPanelDisplayed ? 'Отменить добавление варианта ответа' : 'Добавить вариант ответа';
			},
			buttonClass() {
				return {
					'btn-success': !this.$store.state.editAnswerPanelDisplayed,
					'btn-danger': this.$store.state.editAnswerPanelDisplayed
				};
			}
		},
		methods: {
			toggleAnswer() {
				this.$store.commit('addAnswer');
			},
			saveAnswer() {
				this.$store.commit('saveAnswer');
			}
		}
    }
</script>

<style scoped>

</style>
