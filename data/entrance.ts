import type { Question, Locale } from "@/types/quiz"

export const applicantEntranceQuestions: Record<Locale, Question[]> = {
	en: [
		{
			questionText: "Which of the following is NOT a function of the liver?",
			options: ["Producing insulin", "Detoxification", "Bile production", "Protein synthesis"],
			correctAnswer: "Producing insulin",
		},
		{
			questionText: "The process of cell division that produces gametes is called:",
			options: ["Meiosis", "Mitosis", "Binary fission", "Budding"],
			correctAnswer: "Meiosis",
		},
		{
			questionText: "Which vitamin deficiency causes scurvy?",
			options: ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin A"],
			correctAnswer: "Vitamin C",
		},
		{
			questionText: "The normal pH range of human blood is:",
			options: ["7.35-7.45", "7.0-7.2", "6.8-7.0", "7.5-7.8"],
			correctAnswer: "7.35-7.45",
		},
		{
			questionText: "Which hormone regulates blood sugar levels?",
			options: ["Insulin", "Thyroxine", "Adrenaline", "Growth hormone"],
			correctAnswer: "Insulin",
		},
	],
	ru: [
		{
			questionText: "Что из следующего НЕ является функцией печени?",
			options: ["Производство инсулина", "Детоксикация", "Производство желчи", "Синтез белков"],
			correctAnswer: "Производство инсулина",
		},
		{
			questionText: "Процесс деления клеток, который производит гаметы, называется:",
			options: ["Мейоз", "Митоз", "Бинарное деление", "Почкование"],
			correctAnswer: "Мейоз",
		},
		{
			questionText: "Дефицит какого витамина вызывает цингу?",
			options: ["Витамин C", "Витамин D", "Витамин B12", "Витамин A"],
			correctAnswer: "Витамин C",
		},
	],
	uz: [
		{
			questionText: "Quyidagilardan qaysi biri jigarning vazifasi EMAS?",
			options: ["Insulin ishlab chiqarish", "Zaharlanishdan tozalash", "O't ishlab chiqarish", "Oqsil sintezi"],
			correctAnswer: "Insulin ishlab chiqarish",
		},
		{
			questionText: "Gametalarni hosil qiluvchi hujayra bo'linish jarayoni nima deb ataladi:",
			options: ["Meyoz", "Mitoz", "Ikkilik bo'linish", "Kurtaklanish"],
			correctAnswer: "Meyoz",
		},
		{
			questionText: "Qaysi vitamin yetishmasligi skorbut kasalligini keltirib chiqaradi?",
			options: ["C vitamini", "D vitamini", "B12 vitamini", "A vitamini"],
			correctAnswer: "C vitamini",
		},
	],
}
