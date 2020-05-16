const vowelList = {
  а: true,
  е: true,
  ё: true,
  и: true,
  о: true,
  у: true,
  ы: true,
  э: true,
  ю: true,
  я: true,
  А: true,
  Е: true,
  Ё: true,
  И: true,
  О: true,
  У: true,
  Ы: true,
  Э: true,
  Ю: true,
  Я: true
}
const voicedList = {
  м: true,
  р: true,
  л: true,
  н: true,
  М: true,
  Р: true,
  Л: true,
  Н: true
}
const consonantList = {
  б: true,
  в: true,
  г: true,
  д: true,
  ж: true,
  з: true,
  к: true,
  п: true,
  с: true,
  т: true,
  ф: true,
  х: true,
  ц: true,
  ч: true,
  ш: true,
  щ: true,
  Б: true,
  В: true,
  Г: true,
  Д: true,
  Ж: true,
  З: true,
  К: true,
  П: true,
  С: true,
  Т: true,
  Ф: true,
  Х: true,
  Ц: true,
  Ч: true,
  Ш: true,
  Щ: true
}

function isVowel (letter) { return vowelList[letter] }
function isVoiced (letter) { return voicedList[letter] }
function isNonLetter (letter) { return !isVowel(letter) && !isVoiced(letter) && !consonantList[letter] }

function syllabify (word) {
  let syllable = ''
  let voweled = false
  let prevLetter = ''
  const syllables = []

  const totalSyllables = word.match(/[аеёиоуыэюя]/gi).length

  for (let i = word.length - 1; i >= 0; i--) {
    const letter = word[i]
    if (voweled && (isNonLetter(letter))) {
      syllables.push(syllable)
      syllable = letter
      voweled = false
    } else if (voweled && letter === prevLetter && !isVowel(letter)) {
      syllables.push(letter + syllable)
      syllable = ''
      voweled = false
    } else if (voweled && isVoiced(letter) && !isVowel(prevLetter)) {
      syllables.push(syllable)
      syllable = letter
      voweled = false
    } else if (voweled && isVowel(letter)) {
      syllables.push(syllable)
      syllable = letter
      voweled = (syllables.length < totalSyllables - 1)
    } else {
      voweled = voweled || isVowel(letter)
      syllable = letter + syllable
    }
    prevLetter = letter
  }
  syllables.push(syllable)

  return syllables.reverse()
}

module.exports = syllabify
