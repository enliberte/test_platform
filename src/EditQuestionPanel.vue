<template>
	<div class="card mt-3">
		<div class="card-body">
			<form>
				<div class="form-group mt-3">
					<app-question-text></app-question-text>
					<app-answer-management-buttons></app-answer-management-buttons>
					<app-edit-answer-panel v-if="$store.state.editAnswerPanelDisplayed"></app-edit-answer-panel>
					<app-answer-list></app-answer-list>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import EditAnswerPanel from './EditAnswerPanel.vue'
	import AnswerList from './AnswerList.vue'
	import QuestionText from './QuestionText.vue'
	import AnswerManagementButtons from './AnswerManagementButtons.vue'

	export default {
		components: {
    		appQuestionText: QuestionText,
			appAnswerManagementButtons: AnswerManagementButtons,
    		appEditAnswerPanel: EditAnswerPanel,
			appAnswerList: AnswerList
		}
    }
</script>

<style scoped>

</style>
