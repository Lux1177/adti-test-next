import type { Question, Locale } from "@/types/quiz"

export const medicalTerminologyQuestions: Record<Locale, Question[]> = {
	en: [
		{
			questionText: "What does 'Hypertension' mean?",
			options: ["High blood pressure", "Low blood pressure", "Heart disease", "Diabetes"],
			correctAnswer: "High blood pressure",
		},
		{
			questionText: "The medical term for inflammation of the liver is:",
			options: ["Hepatitis", "Nephritis", "Gastritis", "Arthritis"],
			correctAnswer: "Hepatitis",
		},
		{
			questionText: "What does 'Tachycardia' refer to?",
			options: ["Fast heart rate", "Slow heart rate", "Irregular heartbeat", "Heart attack"],
			correctAnswer: "Fast heart rate",
		},
		{
			questionText: "The prefix 'Brady-' means:",
			options: ["Slow", "Fast", "Above", "Below"],
			correctAnswer: "Slow",
		},
		{
			questionText: "What is 'Dyspnea'?",
			options: ["Difficulty breathing", "Chest pain", "Headache", "Nausea"],
			correctAnswer: "Difficulty breathing",
		},
		{
			questionText: "The suffix '-ectomy' means:",
			options: ["Surgical removal", "Inflammation", "Disease", "Treatment"],
			correctAnswer: "Surgical removal",
		},
		{
			questionText: "What does 'Anemia' indicate?",
			options: [
				"Low red blood cell count",
				"High white blood cell count",
				"Blood clotting disorder",
				"High blood sugar",
			],
			correctAnswer: "Low red blood cell count",
		},
		{
			questionText: "The medical term for kidney stone is:",
			options: ["Nephrolithiasis", "Nephritis", "Nephrosis", "Nephrology"],
			correctAnswer: "Nephrolithiasis",
		},
		{
			questionText: "What does 'Edema' mean?",
			options: ["Swelling due to fluid retention", "Skin rash", "Muscle pain", "Joint stiffness"],
			correctAnswer: "Swelling due to fluid retention",
		},
		{
			questionText: "The prefix 'Hypo-' means:",
			options: ["Below/Under", "Above/Over", "Around", "Through"],
			correctAnswer: "Below/Under",
		},
	],
	ru: [
		{
			questionText: "Что означает 'Гипертония'?",
			options: ["Высокое кровяное давление", "Низкое кровяное давление", "Болезнь сердца", "Диабет"],
			correctAnswer: "Высокое кровяное давление",
		},
		{
			questionText: "Медицинский термин для воспаления печени:",
			options: ["Гепатит", "Нефрит", "Гастрит", "Артрит"],
			correctAnswer: "Гепатит",
		},
		{
			questionText: "Что означает 'Тахикардия'?",
			options: ["Учащенное сердцебиение", "Замедленное сердцебиение", "Нерегулярное сердцебиение", "Сердечный приступ"],
			correctAnswer: "Учащенное сердцебиение",
		},
		{
			questionText: "Приставка 'Бради-' означает:",
			options: ["Медленный", "Быстрый", "Выше", "Ниже"],
			correctAnswer: "Медленный",
		},
		{
			questionText: "Что такое 'Диспноэ'?",
			options: ["Затрудненное дыхание", "Боль в груди", "Головная боль", "Тошнота"],
			correctAnswer: "Затрудненное дыхание",
		},
	],
	uz: [
		{
			questionText: "'Gipertoniya' nimani anglatadi?",
			options: ["Yuqori qon bosimi", "Past qon bosimi", "Yurak kasalligi", "Diabet"],
			correctAnswer: "Yuqori qon bosimi",
		},
		{
			questionText: "Jigar yallig'lanishining tibbiy atamasi:",
			options: ["Gepatit", "Nefrit", "Gastrit", "Artrit"],
			correctAnswer: "Gepatit",
		},
		{
			questionText: "'Taxikardiya' nimani anglatadi?",
			options: ["Tez yurak urishi", "Sekin yurak urishi", "Tartibsiz yurak urishi", "Yurak xurujи"],
			correctAnswer: "Tez yurak urishi",
		},
		{
			questionText: "'Bradi-' prefiksi nimani anglatadi:",
			options: ["Sekin", "Tez", "Yuqori", "Quyi"],
			correctAnswer: "Sekin",
		},
		{
			questionText: "'Dispnoe' nima?",
			options: ["Nafas olishda qiyinchilik", "Ko'krak og'rig'i", "Bosh og'rig'i", "Ko'ngil aynishi"],
			correctAnswer: "Nafas olishda qiyinchilik",
		},
	],
}
