import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		test: {},
		testId: '',
		testName: '',

		questions: [],
		questionId: '',
		questionText: '',

		answers: [],
		answerId: '',
		answerText: '',

		correctAnswerText: '',

		mark: '',

		createTestPanelDisplayed: false,
		editQuestionPanelDisplayed: false,
		editAnswerPanelDisplayed: false,
		testListDisplayed: true,
		passTestPanelIsDisplayed: false,
		resultPanelDisplayed: false
	},
	mutations: {
		createTest(state) {
			state.testListDisplayed = false;
			axios.post('/api/id', {})
				.then(
					res => {
						state.testId = res.data.id;
						state.testName = '';
						state.questions = [];
						state.createTestPanelDisplayed = true;
					}
				)
				.catch(
					err => {
						console.log(err);
					}
				);
		},
		saveTest(state) {
			state.test = {
				id: state.testId,
				name: state.testName,
				questions: state.questions
			};
			axios.post(`/api/save/${state.test.id}`, state.test)
				.then(
					res => {
						console.log(res.data.id);
						state.createTestPanelDisplayed = false;
						state.testListDisplayed = true;
					}
				)
				.catch(
					err => {
						console.log(err);
					}
				);
		},
		editTest(state, payload) {
			axios.post(`/api/get/${payload}`, {})
				.then(
					res => {
						console.log(res);
						state.testId = res.data.id;
						state.testName = res.data.name;
						state.questions = res.data.questions;
						for (let question of state.questions) {
							question.selectedAnswer = '';
						}
						state.testListDisplayed = false;
						state.createTestPanelDisplayed = true;
					}
				)
				.catch(
					err => {
						console.log(err);
					}
				);
		},
		passTest(state, payload) {
			state.testListDisplayed = false;
			axios.post(`/api/get/${payload}`, {})
				.then(
					res => {
						console.log(res);
						state.testId = res.data.id;
						state.testName = res.data.name;
						state.questions = res.data.questions;
						for (let question of state.questions) {
							question.selectedAnswer = '';
						}
						state.passTestPanelIsDisplayed = true;
					}
				)
				.catch(
					err => {
						console.log(err);
					}
				);
		},
		checkTest(state) {
			state.passTestPanelIsDisplayed = false;
			let correctAnswerCount = 0;
			for (let question of state.questions) {
				if (question.selectedAnswer === question.correctAnswerText) {
					correctAnswerCount++;
				}
				let mark = (correctAnswerCount / state.questions.length * 100).toFixed(0);
				state.mark = mark;
			}
			state.resultPanelDisplayed = true;
		},
		addQuestion(state) {
			axios.post('/api/id', {})
				.then(
					res => {
						state.questionId = res.data.id;
						state.questionText = '';
						state.correctAnswerText = '';
						state.answers = [];
						state.editQuestionPanelDisplayed = !state.editQuestionPanelDisplayed;
					}
				)
				.catch(
					err => {
						console.log(err);
					}
				);
		},
		saveQuestion(state) {
			let existQuestion = false;
			for (let questionNum = 0; questionNum < state.questions.length; questionNum++) {
				if (state.questions[questionNum].id === state.questionId) {
					state.questions[questionNum].text = state.questionText;
					state.questions[questionNum].correctAnswerText = state.correctAnswerText;
					state.questions[questionNum].answers = state.answers;
					existQuestion = true;
					break;
				}
			}
			if (!existQuestion) {
				state.questions.push({
					id: state.questionId,
					text: state.questionText,
					correctAnswerText: state.correctAnswerText,
					answers: state.answers
				});
			}
			state.editQuestionPanelDisplayed = false;
		},
		deleteQuestion(state, payload) {
			for (let questionNum = 0; questionNum < state.questions.length; questionNum++) {
				if (state.questions[questionNum].id === payload) {
					state.questions.splice(state, 1);
					break;
				}
			}
		},
		editQuestion(state, payload) {
			for (let questionNum = 0; questionNum < state.questions.length; questionNum++) {
				if (state.questions[questionNum].id === payload) {
					state.questionId = state.questions[questionNum].id;
					state.questionText = state.questions[questionNum].text;
					state.answers = state.questions[questionNum].answers;
					state.correctAnswerText = state.questions[questionNum].correctAnswerText;
					break;
				}
			}
			state.editQuestionPanelDisplayed = true;
		},
		addAnswer(state) {
			axios.post('/api/id', {})
				.then(
					res => {
						state.answerId = res.data.id;
						state.answerText = '';
						state.editAnswerPanelDisplayed = !state.editAnswerPanelDisplayed;
					}
				)
				.catch(
					err => {
						console.log(err);
					}
				);
		},
		saveAnswer(state) {
			let existAnswer = false;
			for (let answerNum = 0; answerNum < state.answers.length; answerNum++) {
				if (state.answers[answerNum].id === state.answerId) {
					state.answers[answerNum].text = state.answerText;
					existAnswer = true;
					break;
				}
			}
			if (!existAnswer) {
				state.answers.push({
					id: state.answerId,
					text: state.answerText,
				});
			}
			state.editAnswerPanelDisplayed = false;
		},
		editAnswer(state, payload) {
			for (let answerNum = 0; answerNum < state.answers.length; answerNum++) {
				if (state.answers[answerNum].id === payload) {
					state.answerId = state.answers[answerNum].id;
					state.answerText = state.answers[answerNum].text;
					break;
				}
			}
			state.editAnswerPanelDisplayed = true;
		},
		deleteAnswer(state, payload) {
			for (let answerNum = 0; answerNum < state.answers.length; answerNum++) {
				if (state.answers[answerNum].id === payload) {
					state.answers.splice(answerNum, 1);
					break;
				}
			}
		},
		hideResult(state) {
			state.resultPanelDisplayed = false;
			state.testListDisplayed = true;
		}
	}
});
