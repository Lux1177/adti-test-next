import type { Question, Locale } from "@/types/quiz"

export const medicalAnatomyQuestions: Record<Locale, Question[]> = {
	en: [
		{
			questionText: "How many chambers does the human heart have?",
			options: ["4", "3", "2", "5"],
			correctAnswer: "4",
		},
		{
			questionText: "Which organ produces insulin?",
			options: ["Pancreas", "Liver", "Kidney", "Stomach"],
			correctAnswer: "Pancreas",
		},
		{
			questionText: "The largest bone in the human body is:",
			options: ["Femur", "Tibia", "Humerus", "Radius"],
			correctAnswer: "Femur",
		},
		{
			questionText: "How many pairs of ribs do humans have?",
			options: ["12", "11", "13", "10"],
			correctAnswer: "12",
		},
		{
			questionText: "Which part of the brain controls balance?",
			options: ["Cerebellum", "Cerebrum", "Medulla", "Pons"],
			correctAnswer: "Cerebellum",
		},
		{
			questionText: "The smallest bone in the human body is located in the:",
			options: ["Ear", "Nose", "Finger", "Toe"],
			correctAnswer: "Ear",
		},
		{
			questionText: "How many vertebrae are in the human spine?",
			options: ["33", "32", "34", "31"],
			correctAnswer: "33",
		},
		{
			questionText: "Which blood vessel carries oxygenated blood from the heart?",
			options: ["Aorta", "Vena cava", "Pulmonary vein", "Coronary artery"],
			correctAnswer: "Aorta",
		},
		{
			questionText: "The functional unit of the kidney is called:",
			options: ["Nephron", "Neuron", "Alveoli", "Hepatocyte"],
			correctAnswer: "Nephron",
		},
		{
			questionText: "Which muscle is responsible for breathing?",
			options: ["Diaphragm", "Intercostal", "Pectoralis", "Latissimus"],
			correctAnswer: "Diaphragm",
		},
	],
	ru: [
		{
			questionText: "Сколько камер имеет человеческое сердце?",
			options: ["4", "3", "2", "5"],
			correctAnswer: "4",
		},
		{
			questionText: "Какой орган вырабатывает инсулин?",
			options: ["Поджелудочная железа", "Печень", "Почка", "Желудок"],
			correctAnswer: "Поджелудочная железа",
		},
		{
			questionText: "Самая большая кость в человеческом теле:",
			options: ["Бедренная", "Большеберцовая", "Плечевая", "Лучевая"],
			correctAnswer: "Бедренная",
		},
		{
			questionText: "Сколько пар ребер у человека?",
			options: ["12", "11", "13", "10"],
			correctAnswer: "12",
		},
		{
			questionText: "Какая часть мозга контролирует равновесие?",
			options: ["Мозжечок", "Большой мозг", "Продолговатый мозг", "Мост"],
			correctAnswer: "Мозжечок",
		},
	],
	uz: [
		{
			questionText: "Inson yuragida nechta kamera bor?",
			options: ["4", "3", "2", "5"],
			correctAnswer: "4",
		},
		{
			questionText: "Qaysi organ insulin ishlab chiqaradi?",
			options: ["Oshqozon osti bezi", "Jigar", "Buyrak", "Oshqozon"],
			correctAnswer: "Oshqozon osti bezi",
		},
		{
			questionText: "Inson tanasidagi eng katta suyak:",
			options: ["Son suyagi", "Boldir suyagi", "Yelka suyagi", "Bilek suyagi"],
			correctAnswer: "Son suyagi",
		},
		{
			questionText: "Insonda necha juft qovurg'a bor?",
			options: ["12", "11", "13", "10"],
			correctAnswer: "12",
		},
		{
			questionText: "Miyaning qaysi qismi muvozanatni nazorat qiladi?",
			options: ["Kichik miya", "Katta miya", "Cho'zilgan miya", "Ko'prik"],
			correctAnswer: "Kichik miya",
		},
	],
}
