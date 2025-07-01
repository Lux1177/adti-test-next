export type Locale = "en" | "ru" | "uz"

export interface Question {
	questionText: string
	options: string[]
	correctAnswer: string
}

export interface Quiz {
	id: string
	title: string
	description: string
	category: string
	role: string
	locale: Locale
	questions: Question[]
}

export interface QuizResult {
	quizId: string
	score: number
	totalQuestions: number
	percentage: number
	answers: { questionIndex: number; selectedAnswer: string; correct: boolean }[]
	timeSpent: number
	completedAt: Date
}

export type Role = "applicant" | "medical" | "professor" | "student"
export type Category = "entrance" | "terminology" | "english" | "anatomy" | "management"
export type Language = "en" | "es" | "fr"
