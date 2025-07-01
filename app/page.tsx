"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useQuizStore } from "@/hooks/useQuizStore"
import { BookOpen, Users, GraduationCap, Stethoscope, Globe, Trophy, Clock, Target } from "lucide-react"

const localeLabels = {
  en: "English",
  ru: "Русский",
  uz: "O'zbek",
}

const localeFlags = {
  en: "🇺🇸",
  ru: "🇷🇺",
  uz: "🇺🇿",
}

export default function HomePage() {
  const { selectedLocale, setLocale, quizResults } = useQuizStore()

  const totalQuizzesTaken = quizResults.length
  const averageScore =
      quizResults.length > 0
          ? Math.round(quizResults.reduce((sum, result) => sum + result.percentage, 0) / quizResults.length)
          : 0

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Тест Устаси</h1>
                  <p className="text-sm text-gray-600">Тиббий билим синов платформаси</p>
                </div>
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gray-600" />
                <div className="flex gap-1">
                  {Object.entries(localeLabels).map(([locale, label]) => (
                      <Button
                          key={locale}
                          variant={selectedLocale === locale ? "default" : "outline"}
                          size="sm"
                          onClick={() => setLocale(locale as any)}
                          className="gap-1"
                      >
                        <span>{localeFlags[locale as keyof typeof localeFlags]}</span>
                        {label}
                      </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Тиббий билимларингизни мустаҳкамланг</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Тиббиёт талабалари, мутахассислари ва абитуриентлар учун мўлжалланган кенг қамровли тест платформаси. Турли
              тиббий фанлар бўйича билимларингизни синаб кўринг ва тараққиётингизни кузатиб боринг.
            </p>

            <div className="flex justify-center gap-4">
              <Link href="/tests">
                <Button size="lg" className="gap-2">
                  <Target className="w-5 h-5" />
                  Тестни бошлаш
                </Button>
              </Link>
              {quizResults.length > 0 && (
                  <Link href="/results">
                    <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                      <Trophy className="w-5 h-5" />
                      Натижаларни кўриш
                    </Button>
                  </Link>
              )}
            </div>
          </div>

          {/* Stats Section */}
          {quizResults.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                    <div className="text-2xl font-bold text-gray-900">{totalQuizzesTaken}</div>
                    <p className="text-gray-600">Тугалланган тестлар</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Target className="w-8 h-8 mx-auto mb-2 text-green-500" />
                    <div className="text-2xl font-bold text-gray-900">{averageScore}%</div>
                    <p className="text-gray-600">Ўртача балл</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <div className="text-2xl font-bold text-gray-900">
                      {Math.round(quizResults.reduce((sum, result) => sum + result.timeSpent, 0) / 60)}
                    </div>
                    <p className="text-gray-600">Ўрганилган дақиқалар</p>
                  </CardContent>
                </Card>
              </div>
          )}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Stethoscope className="w-12 h-12 mx-auto mb-4 text-red-500" />
                <CardTitle>Тиббиёт мутахассислари</CardTitle>
                <CardDescription>Амалиётчи тиббиёт мутахассислари учун илғор тестлар</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <CardTitle>Тиббиёт талабалари</CardTitle>
                <CardDescription>Тиббиёт талабалари учун кенг қамровли ўқув материаллари</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <CardTitle>Профессорлар</CardTitle>
                <CardDescription>Педагоглар учун бошқарув ва раҳбарлик тестлари</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <CardTitle>Абитуриентлар</CardTitle>
                <CardDescription>Тиббиёт мактабига кириш имтиҳонига тайёргарлик</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Categories Section */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Тест категориялари</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Тиббий терминология
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Инсон анатомияси
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Инглиз тили
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Кириш имтиҳонлари
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                Соғлиқни сақлашни бошқариш
              </Badge>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Билимларингизни синашга тайёрмисиз?</h3>
              <p className="text-blue-100 mb-6">
                Тиббий тестларнинг кенг тўпламидан танланг ва бугуноқ билимларингизни яхшилашни бошланг.
              </p>
              <Link href="/tests">
                <Button size="lg" variant="secondary" className="gap-2">
                  <BookOpen className="w-5 h-5" />
                  Барча тестларни кўриш
                </Button>
              </Link>
            </CardContent>
          </Card>
        </main>
      </div>
  )
}
