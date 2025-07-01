export const uzbekCyrillicTranslations = {
	// Score badges
	excellent: "Аъло",
	good: "Яхши",
	fair: "Қониқарли",
	needsImprovement: "Яхшилаш керак",

	// Common terms
	correct: "Тўғри",
	incorrect: "Нотўғри",

	// Time formatting
	minutes: "дақиқа",
	seconds: "сония",

	// Question navigation
	question: "Савол",
	of: "дан",
	complete: "Тугалланди",

	// Buttons
	previous: "Олдинги",
	next: "Кейинги",
	finish: "Тугатиш",
	start: "Бошлаш",
	view: "Кўриш",
	retake: "Қайта олиш",

	// Stats
	testsCompleted: "Тугалланган тестлар",
	averageScore: "Ўртача балл",
	totalStudyTime: "Жами ўрганиш вақти",
	overallScore: "Умумий балл",
	correctAnswers: "Тўғри жавоблар",
	timeTaken: "Сарфланган вақт",

	// Navigation
	backToResults: "Натижаларга қайтиш",
	backToTests: "Тестларга қайтиш",
	browseMoreTests: "Кўпроқ тестларни кўриш",

	// Search and filters
	searchTests: "Тестларни қидириш...",
	filterByRole: "Лавозим бўйича филтрлаш",
	filterByCategory: "Категория бўйича филтрлаш",
	allRoles: "Барча лавозимлар",
	allCategories: "Барча категориялар",
	testsFound: "тест топилди",

	// Empty states
	noTestsFound: "Тест топилмади",
	noResultsYet: "Ҳали натижалар йўқ",
	testNotFound: "Тест топилмади",
	resultNotFound: "Натижа топилмади",

	// Roles
	medical: "тиббиёт мутахассиси",
	student: "талаба",
	professor: "профессор",
	applicant: "абитуриент",

	// Categories
	entrance: "кириш",
	terminology: "терминология",
	anatomy: "анатомия",
	english: "инглиз тили",
	management: "бошқарув",
}

export function getScoreBadgeUz(percentage: number) {
	if (percentage >= 90) return { label: "Аъло", variant: "default" as const }
	if (percentage >= 80) return { label: "Яхши", variant: "secondary" as const }
	if (percentage >= 60) return { label: "Қониқарли", variant: "outline" as const }
	return { label: "Яхшилаш керак", variant: "destructive" as const }
}

export function formatTimeUz(seconds: number): string {
	const mins = Math.floor(seconds / 60)
	const secs = seconds % 60
	return `${mins}д ${secs}с`
}
