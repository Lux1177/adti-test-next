import type { Question, Locale } from "@/types/quiz"

export const professorManagementQuestions: Record<Locale, Question[]> = {
	en: [
		{
			questionText: "What is the primary goal of healthcare quality management?",
			options: ["Improve patient outcomes", "Reduce costs only", "Increase staff numbers", "Expand facilities"],
			correctAnswer: "Improve patient outcomes",
		},
		{
			questionText: "Which leadership style is most effective in healthcare crisis management?",
			options: ["Transformational", "Autocratic", "Laissez-faire", "Bureaucratic"],
			correctAnswer: "Transformational",
		},
		{
			questionText: "Patient safety initiatives should focus on:",
			options: ["System improvements", "Individual blame", "Cost reduction", "Speed of service"],
			correctAnswer: "System improvements",
		},
		{
			questionText: "Effective healthcare communication requires:",
			options: ["Clear, empathetic dialogue", "Medical jargon", "Brief interactions", "Written notes only"],
			correctAnswer: "Clear, empathetic dialogue",
		},
		{
			questionText: "Healthcare resource allocation should be based on:",
			options: ["Evidence-based priorities", "Personal preferences", "Political pressure", "Historical patterns"],
			correctAnswer: "Evidence-based priorities",
		},
	],
	ru: [
		{
			questionText: "Какова основная цель управления качеством здравоохранения?",
			options: [
				"Улучшить результаты лечения пациентов",
				"Только снизить затраты",
				"Увеличить штат",
				"Расширить помещения",
			],
			correctAnswer: "Улучшить результаты лечения пациентов",
		},
		{
			questionText: "Какой стиль руководства наиболее эффективен в кризисном управлении здравоохранением?",
			options: ["Трансформационный", "Автократический", "Либеральный", "Бюрократический"],
			correctAnswer: "Трансформационный",
		},
		{
			questionText: "Инициативы по безопасности пациентов должны сосредоточиться на:",
			options: ["Улучшении системы", "Индивидуальном обвинении", "Снижении затрат", "Скорости обслуживания"],
			correctAnswer: "Улучшении системы",
		},
	],
	uz: [
		{
			questionText: "Sog'liqni saqlash sifatini boshqarishning asosiy maqsadi nima?",
			options: [
				"Bemor natijalarini yaxshilash",
				"Faqat xarajatlarni kamaytirish",
				"Xodimlar sonini ko'paytirish",
				"Binolarni kengaytirish",
			],
			correctAnswer: "Bemor natijalarini yaxshilash",
		},
		{
			questionText: "Sog'liqni saqlash inqiroz boshqaruvida qaysi rahbarlik uslubi eng samarali?",
			options: ["Transformatsion", "Avtokratik", "Liberal", "Byurokratik"],
			correctAnswer: "Transformatsion",
		},
		{
			questionText: "Bemor xavfsizligi tashabbuslari nimaga e'tibor qaratishi kerak:",
			options: ["Tizimni yaxshilash", "Shaxsiy ayblov", "Xarajatlarni kamaytirish", "Xizmat tezligi"],
			correctAnswer: "Tizimni yaxshilash",
		},
	],
}
