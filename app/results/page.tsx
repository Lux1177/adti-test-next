"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useQuizStore } from "@/hooks/useQuizStore"
import { getQuizById } from "@/data/quizzes"
import { Trophy, Clock, Target, BookOpen, Eye, RotateCcw } from "lucide-react"
import { getScoreBadgeUz } from "@/lib/translations"

export default function ResultsPage() {
	const { quizResults } = useQuizStore()

	const formatTime = (seconds: number) => {
		const mins = Math.floor(seconds / 60)
		const secs = seconds % 60
		return `${mins}m ${secs}s`
	}

	const getScoreColor = (percentage: number) => {
		if (percentage >= 80) return "text-green-600"
		if (percentage >= 60) return "text-yellow-600"
		return "text-red-600"
	}

	const sortedResults = [...quizResults].sort(
			(a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime(),
	)

	const totalQuizzes = quizResults.length
	const averageScore =
			totalQuizzes > 0 ? Math.round(quizResults.reduce((sum, result) => sum + result.percentage, 0) / totalQuizzes) : 0
	const totalTimeSpent = quizResults.reduce((sum, result) => sum + result.timeSpent, 0)

	return (
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				{/* Header */}
				<header className="bg-white shadow-sm border-b">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
						<div className="flex justify-between items-center">
							<Link href="/" className="flex items-center gap-3">
								<div className="bg-blue-600 p-2 rounded-lg">
									<Trophy className="w-6 h-6 text-white" />
								</div>
								<div>
									<h1 className="text-2xl font-bold text-gray-900">Тест натижалари</h1>
									<p className="text-sm text-gray-600">Сизнинг натижаларингиз кўриниши</p>
								</div>
							</Link>
							<Link href="/tests">
								<Button className="gap-2">
									<BookOpen className="w-4 h-4" />
									Кўпроқ тест олиш
								</Button>
							</Link>
						</div>
					</div>
				</header>

				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					{quizResults.length === 0 ? (
							<div className="text-center py-12">
								<Trophy className="w-16 h-16 mx-auto text-gray-400 mb-4" />
								<h2 className="text-2xl font-bold text-gray-900 mb-4">Ҳали натижалар йўқ</h2>
								<p className="text-gray-600 mb-6">Натижаларингизни кўриш учун биринчи тестингизни олинг</p>
								<Link href="/tests">
									<Button size="lg" className="gap-2">
										<BookOpen className="w-5 h-5" />
										Тестларни кўриш
									</Button>
								</Link>
							</div>
					) : (
							<>
								{/* Stats Overview */}
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
									<Card>
										<CardContent className="p-6 text-center">
											<Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
											<div className="text-3xl font-bold text-gray-900">{totalQuizzes}</div>
											<p className="text-gray-600">Тугалланган тестлар</p>
										</CardContent>
									</Card>

									<Card>
										<CardContent className="p-6 text-center">
											<Target className="w-8 h-8 mx-auto mb-2 text-green-500" />
											<div className={`text-3xl font-bold ${getScoreColor(averageScore)}`}>{averageScore}%</div>
											<p className="text-gray-600">Ўртача балл</p>
										</CardContent>
									</Card>

									<Card>
										<CardContent className="p-6 text-center">
											<Clock className="w-8 h-8 mx-auto mb-2 text-blue-500" />
											<div className="text-3xl font-bold text-gray-900">{Math.round(totalTimeSpent / 60)}m</div>
											<p className="text-gray-600">Жами ўрганиш вақти</p>
										</CardContent>
									</Card>
								</div>

								{/* Recent Results */}
								<Card className="mb-8">
									<CardHeader>
										<CardTitle>Сўнгги тест натижалари</CardTitle>
										<CardDescription>Сизнинг сўнгги тест натижаларингиз</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											{sortedResults.slice(0, 10).map((result, index) => {
												const quiz = getQuizById(result.quizId)
												const scoreBadge = getScoreBadgeUz(result.percentage)

												return (
														<div
																key={`${result.quizId}-${index}`}
																className="flex items-center justify-between p-4 border rounded-lg"
														>
															<div className="flex-1">
																<h4 className="font-medium text-gray-900">{quiz?.title || "Unknown Quiz"}</h4>
																<p className="text-sm text-gray-600">
																	Тугалланган сана {new Date(result.completedAt).toLocaleDateString()}
																</p>
															</div>

															<div className="flex items-center gap-4">
																<div className="text-right">
																	<div className={`text-lg font-bold ${getScoreColor(result.percentage)}`}>
																		{result.percentage}%
																	</div>
																	<div className="text-sm text-gray-600">
																		{result.score}/{result.totalQuestions} тўғри
																	</div>
																</div>

																<Badge variant={scoreBadge.variant}>{scoreBadge.label}</Badge>

																<div className="flex gap-2">
																	<Link href={`/results/${result.quizId}`}>
																		<Button size="sm" variant="outline" className="gap-1 bg-transparent">
																			<Eye className="w-3 h-3" />
																			Кўриш
																		</Button>
																	</Link>
																	<Link href={`/tests/${result.quizId}`}>
																		<Button size="sm" variant="outline" className="gap-1 bg-transparent">
																			<RotateCcw className="w-3 h-3" />
																			Қайта олиш
																		</Button>
																	</Link>
																</div>
															</div>
														</div>
												)
											})}
										</div>
									</CardContent>
								</Card>
							</>
					)}
				</main>
			</div>
	)
}
