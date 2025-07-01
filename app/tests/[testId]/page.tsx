"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useQuizStore } from "@/hooks/useQuizStore"
import { getQuizById } from "@/data/quizzes"
import { Clock, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { formatTimeUz } from "@/lib/translations"

export default function TestPage() {
	const params = useParams()
	const router = useRouter()
	const testId = params.testId as string

	const {
		currentQuiz,
		currentQuestionIndex,
		answers,
		startTime,
		setCurrentQuiz,
		setCurrentQuestionIndex,
		setAnswer,
		addQuizResult,
		startQuiz,
		resetCurrentQuiz,
	} = useQuizStore()

	const [timeElapsed, setTimeElapsed] = useState(0)
	const [selectedAnswer, setSelectedAnswer] = useState("")

	useEffect(() => {
		const quiz = getQuizById(testId)
		if (quiz) {
			setCurrentQuiz(quiz)
			if (!startTime) {
				startQuiz()
			}
		}
	}, [testId, setCurrentQuiz, startTime, startQuiz])

	useEffect(() => {
		const timer = setInterval(() => {
			if (startTime) {
				setTimeElapsed(Math.floor((Date.now() - startTime) / 1000))
			}
		}, 1000)

		return () => clearInterval(timer)
	}, [startTime])

	useEffect(() => {
		if (currentQuiz && answers[currentQuestionIndex]) {
			setSelectedAnswer(answers[currentQuestionIndex])
		} else {
			setSelectedAnswer("")
		}
	}, [currentQuestionIndex, answers, currentQuiz])

	if (!currentQuiz) {
		return (
				<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
					<Card>
						<CardContent className="p-8 text-center">
							<h2 className="text-2xl font-bold mb-4">Тест топилмади</h2>
							<Link href="/tests">
								<Button>Тестларга қайтиш</Button>
							</Link>
						</CardContent>
					</Card>
				</div>
		)
	}

	const currentQuestion = currentQuiz.questions[currentQuestionIndex]
	const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100
	const answeredQuestions = answers.filter((answer) => answer !== "").length

	const handleAnswerSelect = (answer: string) => {
		setSelectedAnswer(answer)
		setAnswer(currentQuestionIndex, answer)
	}

	const handleNext = () => {
		if (currentQuestionIndex < currentQuiz.questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1)
		} else {
			// Calculate results
			const correctAnswers = answers.filter((answer, index) => {
				return answer === currentQuiz.questions[index].correctAnswer
			}).length

			const result = {
				quizId: currentQuiz.id,
				score: correctAnswers,
				totalQuestions: currentQuiz.questions.length,
				percentage: Math.round((correctAnswers / currentQuiz.questions.length) * 100),
				answers: answers.map((answer, index) => ({
					questionIndex: index,
					selectedAnswer: answer,
					correct: answer === currentQuiz.questions[index].correctAnswer,
				})),
				timeSpent: timeElapsed,
				completedAt: new Date(),
			}

			addQuizResult(result)
			router.push(`/results/${currentQuiz.id}`)
		}
	}

	const handlePrevious = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1)
		}
	}

	return (
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				{/* Header */}
				<header className="bg-white shadow-sm border-b">
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
						<div className="flex justify-between items-center">
							<div>
								<h1 className="text-xl font-bold text-gray-900">{currentQuiz.title}</h1>
								<p className="text-sm text-gray-600">{currentQuiz.description}</p>
							</div>
							<div className="flex items-center gap-4 text-sm text-gray-600">
								<div className="flex items-center gap-1">
									<Clock className="w-4 h-4" />
									{formatTimeUz(timeElapsed)}
								</div>
								<div className="flex items-center gap-1">
									<CheckCircle className="w-4 h-4" />
									{answeredQuestions}/{currentQuiz.questions.length}
								</div>
							</div>
						</div>
					</div>
				</header>

				<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					{/* Progress */}
					<div className="mb-6">
						<div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>
              Савол {currentQuestionIndex + 1} дан {currentQuiz.questions.length}
            </span>
							<span>{Math.round(progress)}% Тугалланди</span>
						</div>
						<Progress value={progress} className="h-2" />
					</div>

					{/* Question Card */}
					<Card className="mb-6">
						<CardHeader>
							<div className="flex justify-between items-start mb-4">
								<Badge variant="outline">Савол {currentQuestionIndex + 1}</Badge>
							</div>
							<CardTitle className="text-xl leading-relaxed">{currentQuestion.questionText}</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								{currentQuestion.options.map((option, index) => (
										<Button
												key={index}
												variant={selectedAnswer === option ? "default" : "outline"}
												className="w-full justify-start h-auto p-4 text-left whitespace-normal"
												onClick={() => handleAnswerSelect(option)}
										>
											<span className="font-medium mr-3 flex-shrink-0">{String.fromCharCode(65 + index)}.</span>
											<span className="flex-1">{option}</span>
										</Button>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Navigation */}
					<div className="flex justify-between">
						<Button
								variant="outline"
								onClick={handlePrevious}
								disabled={currentQuestionIndex === 0}
								className="gap-2 bg-transparent"
						>
							<ArrowLeft className="w-4 h-4" />
							Олдинги
						</Button>

						<Button onClick={handleNext} disabled={selectedAnswer === ""} className="gap-2">
							{currentQuestionIndex === currentQuiz.questions.length - 1 ? "Тестни тугатиш" : "Кейинги"}
							<ArrowRight className="w-4 h-4" />
						</Button>
					</div>

					{/* Question Navigation */}
					<Card className="mt-6">
						<CardHeader>
							<CardTitle className="text-lg">Савол навигацияси</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
								{currentQuiz.questions.map((_, index) => (
										<Button
												key={index}
												variant={index === currentQuestionIndex ? "default" : answers[index] ? "secondary" : "outline"}
												size="sm"
												onClick={() => setCurrentQuestionIndex(index)}
												className="aspect-square p-0"
										>
											{index + 1}
										</Button>
								))}
							</div>
						</CardContent>
					</Card>
				</main>
			</div>
	)
}
