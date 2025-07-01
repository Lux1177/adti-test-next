import type { Question, Locale } from "@/types/quiz"

export const medicalEnglishQuestions: Record<Locale, Question[]> = {
	en: [
		{
			questionText: "I ___ 16 years old. My brother ___ 13.",
			options: ["am/is", "am/are", "are/are", "is/am"],
			correctAnswer: "am/is",
		},
		{
			questionText: "Your books ___ on the table. They ___ in your bag.",
			options: ["are/aren't", "are/are", "is/aren't", "aren't/is"],
			correctAnswer: "are/aren't",
		},
		{
			questionText: "There ___ 5 students in the room.",
			options: ["are", "is", "was", "were"],
			correctAnswer: "are",
		},
		{
			questionText: "She ___ to school every day.",
			options: ["goes", "go", "going", "went"],
			correctAnswer: "goes",
		},
		{
			questionText: "They ___ football on Sundays.",
			options: ["play", "plays", "playing", "is played"],
			correctAnswer: "play",
		},
		{
			questionText: "My father ___ tea in the morning.",
			options: ["drinks", "drink", "drinking", "drank"],
			correctAnswer: "drinks",
		},
		{
			questionText: "We ___ TV in the evening.",
			options: ["watch", "watched", "watches", "watching"],
			correctAnswer: "watch",
		},
		{
			questionText: "The sun ___ in the east.",
			options: ["rises", "rising", "rise", "rised"],
			correctAnswer: "rises",
		},
		{
			questionText: "She ___ English very well.",
			options: ["speaks", "speak", "speaking", "spoken"],
			correctAnswer: "speaks",
		},
		{
			questionText: "I ___ my homework after lessons.",
			options: ["do", "does", "doing", "was doing"],
			correctAnswer: "do",
		},
	],
	ru: [
		{
			questionText: "Мне ___ 16 лет. Моему брату ___ 13.",
			options: ["есть/есть", "было/было", "будет/будет", "нет/нет"],
			correctAnswer: "есть/есть",
		},
		{
			questionText: "Твои книги ___ на столе. Их ___ в твоей сумке.",
			options: ["лежат/нет", "лежат/есть", "есть/нет", "нет/есть"],
			correctAnswer: "лежат/нет",
		},
		{
			questionText: "В комнате ___ 5 студентов.",
			options: ["есть", "был", "было", "были"],
			correctAnswer: "есть",
		},
		{
			questionText: "Она ___ в школу каждый день.",
			options: ["идет", "иду", "идешь", "шла"],
			correctAnswer: "идет",
		},
		{
			questionText: "Они ___ в футбол по воскресеньям.",
			options: ["играют", "играет", "играя", "играл"],
			correctAnswer: "играют",
		},
	],
	uz: [
		{
			questionText: "Men ___ 16 yoshdaman. Akam ___ 13 yoshda.",
			options: ["man/u", "sen/men", "biz/ular", "u/men"],
			correctAnswer: "man/u",
		},
		{
			questionText: "Sizning kitoblaringiz ___ stolda. Ular ___ sumkangizda.",
			options: ["bor/yo'q", "yo'q/bor", "bor/bor", "yo'q/yo'q"],
			correctAnswer: "bor/yo'q",
		},
		{
			questionText: "Xonada ___ 5 ta talaba bor.",
			options: ["hozir", "kecha", "ertaga", "doim"],
			correctAnswer: "hozir",
		},
		{
			questionText: "U har kuni maktabga ___.",
			options: ["boradi", "boraman", "borasiz", "bordi"],
			correctAnswer: "boradi",
		},
		{
			questionText: "Ular yakshanba kunlari futbol ___.",
			options: ["o'ynaydi", "o'ynaydi", "o'ynab", "o'ynadi"],
			correctAnswer: "o'ynaydi",
		},
	],
}
