<template>
	<div class="card mt-3">
		<div class="card">
			<div class="card-body">
				<app-test-name></app-test-name>
				<app-question-management-buttons></app-question-management-buttons>
				<app-edit-question-panel v-if="$store.state.editQuestionPanelDisplayed"></app-edit-question-panel>
				<app-question-list></app-question-list>
			</div>

		</div>
	</div>
</template>

<script>
	import TestName from './TestName.vue'
	import EditQuestionPanel from './EditQuestionPanel.vue'
	import QuestionManagementButtons from './QuestionManagementButtons.vue'
	import QuestionList from './QuestionList.vue'

    export default {
		components: {
			appTestName: TestName,
			appQuestionManagementButtons: QuestionManagementButtons,
			appEditQuestionPanel: EditQuestionPanel,
			appQuestionList: QuestionList
		}
    }
</script>

<style scoped>

</style>
