"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useQuizStore } from "@/hooks/useQuizStore"
import { getQuizById } from "@/data/quizzes"
import { Trophy, BookOpen, RotateCcw, CheckCircle, XCircle, ArrowLeft } from "lucide-react"
import { getScoreBadgeUz, formatTimeUz } from "@/lib/translations"

export default function TestResultPage() {
	const params = useParams()
	const testId = params.testId as string
	const { quizResults } = useQuizStore()

	const quiz = getQuizById(testId)
	const result = quizResults.find((r) => r.quizId === testId)

	if (!quiz || !result) {
		return (
				<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
					<Card>
						<CardContent className="p-8 text-center">
							<h2 className="text-2xl font-bold mb-4">Натижа топилмади</h2>
							<Link href="/results">
								<Button>Натижаларга қайтиш</Button>
							</Link>
						</CardContent>
					</Card>
				</div>
		)
	}

	const getScoreColor = (percentage: number) => {
		if (percentage >= 80) return "text-green-600"
		if (percentage >= 60) return "text-yellow-600"
		return "text-red-600"
	}

	const scoreBadge = getScoreBadgeUz(result.percentage)

	return (
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				{/* Header */}
				<header className="bg-white shadow-sm border-b">
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
						<div className="flex justify-between items-center">
							<div>
								<h1 className="text-2xl font-bold text-gray-900">{quiz.title}</h1>
								<p className="text-sm text-gray-600">Тест натижалари</p>
							</div>
							<Link href="/results">
								<Button variant="outline" className="gap-2 bg-transparent">
									<ArrowLeft className="w-4 h-4" />
									Натижаларга қайтиш
								</Button>
							</Link>
						</div>
					</div>
				</header>

				<main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					{/* Results Header */}
					<div className="text-center mb-8">
						<Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
						<h2 className="text-3xl font-bold text-gray-900 mb-2">Тест тугалланди!</h2>
						<p className="text-lg text-gray-600">Тугалланган сана: {new Date(result.completedAt).toLocaleDateString()}</p>
					</div>

					{/* Score Overview */}
					<Card className="mb-6">
						<CardHeader>
							<CardTitle className="flex items-center justify-between">
								Сизнинг баллингиз
								<Badge variant={scoreBadge.variant}>{scoreBadge.label}</Badge>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="text-center">
									<div className={`text-4xl font-bold mb-2 ${getScoreColor(result.percentage)}`}>
										{result.percentage}%
									</div>
									<p className="text-gray-600">Умумий балл</p>
								</div>

								<div className="text-center">
									<div className="text-4xl font-bold mb-2 text-blue-600">
										{result.score}/{result.totalQuestions}
									</div>
									<p className="text-gray-600">Тўғри жавоблар</p>
								</div>

								<div className="text-center">
									<div className="text-4xl font-bold mb-2 text-purple-600">{formatTimeUz(result.timeSpent)}</div>
									<p className="text-gray-600">Сарфланган вақт</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Detailed Results */}
					<Card className="mb-6">
						<CardHeader>
							<CardTitle>Саволларни кўриб чиқиш</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								{quiz.questions.map((question, index) => {
									const userAnswer = result.answers.find((a) => a.questionIndex === index)
									const isCorrect = userAnswer?.correct ?? false

									return (
											<div key={index} className="border rounded-lg p-4">
												<div className="flex items-start justify-between mb-3">
													<h4 className="font-medium text-lg">
														{index + 1}. {question.questionText}
													</h4>
													<div className="flex items-center gap-2">
														{isCorrect ? (
																<CheckCircle className="w-5 h-5 text-green-500" />
														) : (
																<XCircle className="w-5 h-5 text-red-500" />
														)}
														<Badge variant={isCorrect ? "default" : "destructive"}>{isCorrect ? "Тўғри" : "Нотўғри"}</Badge>
													</div>
												</div>

												<div className="space-y-2 text-sm">
													<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
														<div>
															<p className="font-medium text-gray-700 mb-1">Сизнинг жавобингиз:</p>
															<p
																	className={`p-2 rounded ${
																			isCorrect
																					? "bg-green-50 text-green-800 border border-green-200"
																					: "bg-red-50 text-red-800 border border-red-200"
																	}`}
															>
																{userAnswer?.selectedAnswer || "Жавоб танланмаган"}
															</p>
														</div>

														<div>
															<p className="font-medium text-gray-700 mb-1">Тўғри жавоб:</p>
															<p className="p-2 rounded bg-green-50 text-green-800 border border-green-200">
																{question.correctAnswer}
															</p>
														</div>
													</div>

													<div className="mt-3">
														<p className="font-medium text-gray-700 mb-1">Барча вариантлар:</p>
														<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
															{question.options.map((option, optionIndex) => (
																	<div
																			key={optionIndex}
																			className={`p-2 rounded text-sm ${
																					option === question.correctAnswer
																							? "bg-green-50 text-green-800 border border-green-200"
																							: option === userAnswer?.selectedAnswer && !isCorrect
																									? "bg-red-50 text-red-800 border border-red-200"
																									: "bg-gray-50 text-gray-700 border border-gray-200"
																			}`}
																	>
																		<span className="font-medium mr-2">{String.fromCharCode(65 + optionIndex)}.</span>
																		{option}
																	</div>
															))}
														</div>
													</div>
												</div>
											</div>
									)
								})}
							</div>
						</CardContent>
					</Card>

					{/* Actions */}
					<div className="flex justify-center gap-4">
						<Link href={`/tests/${quiz.id}`}>
							<Button size="lg" className="gap-2">
								<RotateCcw className="w-5 h-5" />
								Тестни қайта олиш
							</Button>
						</Link>
						<Link href="/tests">
							<Button variant="outline" size="lg" className="gap-2 bg-transparent">
								<BookOpen className="w-5 h-5" />
								Кўпроқ тестларни кўриш
							</Button>
						</Link>
					</div>
				</main>
			</div>
	)
}
