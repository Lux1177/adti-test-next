import type { Quiz } from "@/types/quiz"
import { applicantEntranceQuestions } from "./entrance"
import { medicalTerminologyQuestions } from "./terminology"
import { medicalAnatomyQuestions } from "./anatomy"
import { medicalEnglishQuestions } from "./english"
import { professorManagementQuestions } from "./management"
import { studentEnglishQuestions } from "./student-english"

export const quizzes: Quiz[] = [
	{
		id: "applicant-entrance",
		title: "Medical Entrance Exam",
		description: "Test your knowledge for medical school entrance",
		category: "entrance",
		role: "applicant",
		locale: "en",
		questions: applicantEntranceQuestions.en,
	},
	{
		id: "applicant-entrance-ru",
		title: "Медицинский вступительный экзамен",
		description: "Проверьте свои знания для поступления в медицинский вуз",
		category: "entrance",
		role: "applicant",
		locale: "ru",
		questions: applicantEntranceQuestions.ru,
	},
	{
		id: "applicant-entrance-uz",
		title: "Tibbiyot kirish imtihoni",
		description: "Tibbiyot universitetiga kirish uchun bilimingizni sinab ko'ring",
		category: "entrance",
		role: "applicant",
		locale: "uz",
		questions: applicantEntranceQuestions.uz,
	},
	{
		id: "medical-terminology",
		title: "Medical Terminology",
		description: "Master essential medical terms and definitions",
		category: "terminology",
		role: "medical",
		locale: "en",
		questions: medicalTerminologyQuestions.en,
	},
	{
		id: "medical-terminology-ru",
		title: "Медицинская терминология",
		description: "Изучите основные медицинские термины и определения",
		category: "terminology",
		role: "medical",
		locale: "ru",
		questions: medicalTerminologyQuestions.ru,
	},
	{
		id: "medical-terminology-uz",
		title: "Tibbiy terminologiya",
		description: "Asosiy tibbiy atamalar va ta'riflarni o'rganing",
		category: "terminology",
		role: "medical",
		locale: "uz",
		questions: medicalTerminologyQuestions.uz,
	},
	{
		id: "medical-anatomy",
		title: "Human Anatomy",
		description: "Test your knowledge of human anatomy",
		category: "anatomy",
		role: "medical",
		locale: "en",
		questions: medicalAnatomyQuestions.en,
	},
	{
		id: "medical-anatomy-ru",
		title: "Анатомия человека",
		description: "Проверьте свои знания анатомии человека",
		category: "anatomy",
		role: "medical",
		locale: "ru",
		questions: medicalAnatomyQuestions.ru,
	},
	{
		id: "medical-anatomy-uz",
		title: "Inson anatomiyasi",
		description: "Inson anatomiyasi bo'yicha bilimingizni sinab ko'ring",
		category: "anatomy",
		role: "medical",
		locale: "uz",
		questions: medicalAnatomyQuestions.uz,
	},
	{
		id: "medical-english",
		title: "Medical English",
		description: "Improve your English skills for medical contexts",
		category: "english",
		role: "medical",
		locale: "en",
		questions: medicalEnglishQuestions.en,
	},
	{
		id: "medical-english-ru",
		title: "Медицинский английский",
		description: "Улучшите свои навыки английского языка в медицинском контексте",
		category: "english",
		role: "medical",
		locale: "ru",
		questions: medicalEnglishQuestions.ru,
	},
	{
		id: "medical-english-uz",
		title: "Tibbiy ingliz tili",
		description: "Tibbiy kontekstda ingliz tili ko'nikmalaringizni yaxshilang",
		category: "english",
		role: "medical",
		locale: "uz",
		questions: medicalEnglishQuestions.uz,
	},
	{
		id: "professor-management",
		title: "Healthcare Management",
		description: "Advanced healthcare management principles",
		category: "management",
		role: "professor",
		locale: "en",
		questions: professorManagementQuestions.en,
	},
	{
		id: "professor-management-ru",
		title: "Управление здравоохранением",
		description: "Продвинутые принципы управления здравоохранением",
		category: "management",
		role: "professor",
		locale: "ru",
		questions: professorManagementQuestions.ru,
	},
	{
		id: "professor-management-uz",
		title: "Sog'liqni saqlashni boshqarish",
		description: "Sog'liqni saqlashni boshqarishning ilg'or tamoyillari",
		category: "management",
		role: "professor",
		locale: "uz",
		questions: professorManagementQuestions.uz,
	},
	{
		id: "student-english",
		title: "English for Students",
		description: "Basic English skills for medical students",
		category: "english",
		role: "student",
		locale: "en",
		questions: studentEnglishQuestions.en,
	},
	{
		id: "student-english-ru",
		title: "Английский для студентов",
		description: "Базовые навыки английского языка для студентов-медиков",
		category: "english",
		role: "student",
		locale: "ru",
		questions: studentEnglishQuestions.ru,
	},
	{
		id: "student-english-uz",
		title: "Talabalar uchun ingliz tili",
		description: "Tibbiyot talabalari uchun ingliz tilining asosiy ko'nikmalari",
		category: "english",
		role: "student",
		locale: "uz",
		questions: studentEnglishQuestions.uz,
	},
]

export function getQuizById(id: string): Quiz | undefined {
	return quizzes.find((quiz) => quiz.id === id)
}

export function getQuizzesByRole(role: string): Quiz[] {
	return quizzes.filter((quiz) => quiz.role === role)
}

export function getQuizzesByCategory(category: string): Quiz[] {
	return quizzes.filter((quiz) => quiz.category === category)
}

export function getQuizzesByLocale(locale: string): Quiz[] {
	return quizzes.filter((quiz) => quiz.locale === locale)
}
