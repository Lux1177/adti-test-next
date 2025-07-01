"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Quiz, QuizResult, Locale, Role, Category } from "@/types/quiz"

interface QuizStore {
	selectedLocale: Locale
	selectedRole: Role | null
	selectedCategory: Category | null
	currentQuiz: Quiz | null
	currentQuestionIndex: number
	answers: string[]
	quizResults: QuizResult[]
	startTime: number | null

	setLocale: (locale: Locale) => void
	setRole: (role: Role) => void
	setCategory: (category: Category) => void
	setCurrentQuiz: (quiz: Quiz) => void
	setCurrentQuestionIndex: (index: number) => void
	setAnswer: (questionIndex: number, answer: string) => void
	addQuizResult: (result: QuizResult) => void
	startQuiz: () => void
	resetCurrentQuiz: () => void
	resetAll: () => void
}

export const useQuizStore = create<QuizStore>()(
		persist(
				(set, get) => ({
					selectedLocale: "en",
					selectedRole: null,
					selectedCategory: null,
					currentQuiz: null,
					currentQuestionIndex: 0,
					answers: [],
					quizResults: [],
					startTime: null,

					setLocale: (locale) => set({ selectedLocale: locale }),
					setRole: (role) => set({ selectedRole: role }),
					setCategory: (category) => set({ selectedCategory: category }),
					setCurrentQuiz: (quiz) =>
							set({
								currentQuiz: quiz,
								answers: new Array(quiz.questions.length).fill(""),
								currentQuestionIndex: 0,
							}),
					setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),

					setAnswer: (questionIndex, answer) => {
						const { answers } = get()
						const newAnswers = [...answers]
						newAnswers[questionIndex] = answer
						set({ answers: newAnswers })
					},

					addQuizResult: (result) => {
						const { quizResults } = get()
						set({ quizResults: [...quizResults, result] })
					},

					startQuiz: () => set({ startTime: Date.now() }),

					resetCurrentQuiz: () =>
							set({
								currentQuiz: null,
								currentQuestionIndex: 0,
								answers: [],
								startTime: null,
							}),

					resetAll: () =>
							set({
								selectedRole: null,
								selectedCategory: null,
								currentQuiz: null,
								currentQuestionIndex: 0,
								answers: [],
								startTime: null,
							}),
				}),
				{
					name: "quiz-storage",
				},
		),
)
