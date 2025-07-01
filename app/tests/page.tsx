"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useQuizStore } from "@/hooks/useQuizStore"
import { quizzes } from "@/data/quizzes"
import { BookOpen, Clock, Users, Search, Filter } from "lucide-react"

export default function TestsPage() {
	const { selectedLocale } = useQuizStore()
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedRole, setSelectedRole] = useState<string>("all")
	const [selectedCategory, setSelectedCategory] = useState<string>("all")

	// Filter quizzes based on current locale and filters
	const filteredQuizzes = quizzes.filter((quiz) => {
		const matchesLocale = quiz.locale === selectedLocale
		const matchesSearch =
				quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				quiz.description.toLowerCase().includes(searchTerm.toLowerCase())
		const matchesRole = selectedRole === "all" || quiz.role === selectedRole
		const matchesCategory = selectedCategory === "all" || quiz.category === selectedCategory

		return matchesLocale && matchesSearch && matchesRole && matchesCategory
	})

	const roles = Array.from(new Set(quizzes.map((q) => q.role)))
	const categories = Array.from(new Set(quizzes.map((q) => q.category)))

	const getRoleIcon = (role: string) => {
		switch (role) {
			case "medical":
				return "🩺"
			case "student":
				return "👨‍🎓"
			case "professor":
				return "👨‍🏫"
			case "applicant":
				return "📚"
			default:
				return "📝"
		}
	}

	const getCategoryColor = (category: string) => {
		switch (category) {
			case "entrance":
				return "bg-blue-100 text-blue-800"
			case "terminology":
				return "bg-green-100 text-green-800"
			case "anatomy":
				return "bg-red-100 text-red-800"
			case "english":
				return "bg-purple-100 text-purple-800"
			case "management":
				return "bg-yellow-100 text-yellow-800"
			default:
				return "bg-gray-100 text-gray-800"
		}
	}

	return (
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				{/* Header */}
				<header className="bg-white shadow-sm border-b">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
						<div className="flex justify-between items-center">
							<Link href="/" className="flex items-center gap-3">
								<div className="bg-blue-600 p-2 rounded-lg">
									<BookOpen className="w-6 h-6 text-white" />
								</div>
								<div>
									<h1 className="text-2xl font-bold text-gray-900">Тест Устаси</h1>
									<p className="text-sm text-gray-600">Тестингизни танланг</p>
								</div>
							</Link>
						</div>
					</div>
				</header>

				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					{/* Page Header */}
					<div className="text-center mb-8">
						<h2 className="text-3xl font-bold text-gray-900 mb-4">Мавжуд тестлар</h2>
						<p className="text-lg text-gray-600">Тиббий билимлар тестлари тўпламидан танланг</p>
					</div>

					{/* Filters */}
					<Card className="mb-8">
						<CardContent className="p-6">
							<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
								<div className="relative">
									<Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
									<Input
											placeholder="Тестларни қидириш..."
											value={searchTerm}
											onChange={(e) => setSearchTerm(e.target.value)}
											className="pl-10"
									/>
								</div>

								<Select value={selectedRole} onValueChange={setSelectedRole}>
									<SelectTrigger>
										<SelectValue placeholder="Лавозим бўйича филтрлаш" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">Барча лавозимлар</SelectItem>
										{roles.map((role) => (
												<SelectItem key={role} value={role}>
													{getRoleIcon(role)} {role.charAt(0).toUpperCase() + role.slice(1)}
												</SelectItem>
										))}
									</SelectContent>
								</Select>

								<Select value={selectedCategory} onValueChange={setSelectedCategory}>
									<SelectTrigger>
										<SelectValue placeholder="Категория бўйича филтрлаш" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">Барча категориялар</SelectItem>
										{categories.map((category) => (
												<SelectItem key={category} value={category}>
													{category.charAt(0).toUpperCase() + category.slice(1)}
												</SelectItem>
										))}
									</SelectContent>
								</Select>

								<div className="flex items-center gap-2 text-sm text-gray-600">
									<Filter className="w-4 h-4" />
									{filteredQuizzes.length} тест топилди
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Quiz Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredQuizzes.map((quiz) => (
								<Card key={quiz.id} className="hover:shadow-lg transition-shadow">
									<CardHeader>
										<div className="flex justify-between items-start mb-2">
											<Badge className={getCategoryColor(quiz.category)}>{quiz.category}</Badge>
											<span className="text-2xl">{getRoleIcon(quiz.role)}</span>
										</div>
										<CardTitle className="text-lg">{quiz.title}</CardTitle>
										<CardDescription>{quiz.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex justify-between items-center mb-4">
											<div className="flex items-center gap-4 text-sm text-gray-600">
												<div className="flex items-center gap-1">
													<Users className="w-4 h-4" />
													{quiz.role}
												</div>
												<div className="flex items-center gap-1">
													<Clock className="w-4 h-4" />
													{quiz.questions.length} савол
												</div>
											</div>
										</div>

										<Link href={`/tests/${quiz.id}`}>
											<Button className="w-full">Тестни бошлаш</Button>
										</Link>
									</CardContent>
								</Card>
						))}
					</div>

					{filteredQuizzes.length === 0 && (
							<div className="text-center py-12">
								<div className="text-gray-400 mb-4">
									<BookOpen className="w-16 h-16 mx-auto" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">Тест топилмади</h3>
								<p className="text-gray-600">Қидирув ёки филтр мезонларини ўзгартириб кўринг</p>
							</div>
					)}
				</main>
			</div>
	)
}
