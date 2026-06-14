export interface Question {
  id: string;
  grade: number;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  choices: string[];
  correctAnswer: string;
  hint: string;
  explanation: string;
  imageUrl?: string;
}

export type MathQuestion = Question;

const STATIC_MATH_QUESTIONS: Question[] = [
  // ==================== KINDERGARTEN (GRADE 0) ====================
  // counting (Number sense)
  {
    id: "gk-count-01",
    grade: 0,
    topic: "counting",
    difficulty: "easy",
    question: "Count the bees: 🐝 🐝 🐝 🐝 🐝. How many are there?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "5",
    hint: "Point to each bee and count: 1, 2, 3, 4, 5!",
    explanation: "There are exactly five bees buzzing around the meadow!"
  },
  {
    id: "gk-count-02",
    grade: 0,
    topic: "counting",
    difficulty: "easy",
    question: "What number comes right after 9?",
    choices: ["7", "8", "10", "11"],
    correctAnswer: "10",
    hint: "Count up from 8: 8, 9, and then...?",
    explanation: "Ten comes immediately after nine when counting up!"
  },
  {
    id: "gk-count-03",
    grade: 0,
    topic: "counting",
    difficulty: "easy",
    question: "Count the stars: ⭐ ⭐ ⭐. How many are there?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: "3",
    hint: "Count them one by one: one, two, three!",
    explanation: "There are exactly three shining stars!"
  },
  {
    id: "gk-count-04",
    grade: 0,
    topic: "counting",
    difficulty: "easy",
    question: "Which number comes right before 6?",
    choices: ["4", "5", "7", "8"],
    correctAnswer: "5",
    hint: "Count backwards from 7: 7, 6, and then...?",
    explanation: "Five comes right before six when counting!"
  },
  {
    id: "gk-count-05",
    grade: 0,
    topic: "counting",
    difficulty: "easy",
    question: "Count the ladybugs: 🐞 🐞 🐞 🐞. How many are there?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: "4",
    hint: "Point and count: one, two, three, four!",
    explanation: "There are exactly four cute ladybugs!"
  },
  {
    id: "gk-count-06",
    grade: 0,
    topic: "counting",
    difficulty: "easy",
    question: "What is the next number in the pattern: 1, 2, 3, 4, __?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "5",
    hint: "Count up by one: 1, 2, 3, 4, and...?",
    explanation: "The next number after four is five!"
  },

  // geometry (Shapes)
  {
    id: "gk-geom-01",
    grade: 0,
    topic: "geometry",
    difficulty: "easy",
    question: "Which shape has 3 sides and 3 corners?",
    choices: ["Circle 🔴", "Square 🟦", "Triangle 🔺", "Star ⭐"],
    correctAnswer: "Triangle 🔺",
    hint: "Think of a slice of pizza or a wizard's hat!",
    explanation: "A triangle is a shape with three straight sides and three corners."
  },
  {
    id: "gk-geom-02",
    grade: 0,
    topic: "geometry",
    difficulty: "easy",
    question: "How many corners does a square have?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: "4",
    hint: "Count the pointy corners around a box!",
    explanation: "A square has four straight equal sides and exactly four corners."
  },
  {
    id: "gk-geom-03",
    grade: 0,
    topic: "geometry",
    difficulty: "easy",
    question: "Which shape is perfectly round and has 0 corners?",
    choices: ["Circle 🔴", "Square 🟦", "Triangle 🔺", "Star ⭐"],
    correctAnswer: "Circle 🔴",
    hint: "Think of a round coin or a bicycle wheel!",
    explanation: "A circle is perfectly curved and has no straight sides or corners!"
  },
  {
    id: "gk-geom-04",
    grade: 0,
    topic: "geometry",
    difficulty: "easy",
    question: "How many sides does a rectangle have?",
    choices: ["2", "3", "4", "6"],
    correctAnswer: "4",
    hint: "A door is a rectangle. Let's count its outer edges!",
    explanation: "A rectangle has four sides, with opposite sides being equal in length."
  },
  {
    id: "gk-geom-05",
    grade: 0,
    topic: "geometry",
    difficulty: "easy",
    question: "Which of these shapes looks like a diamond?",
    choices: ["Circle 🔴", "Square 🟦", "Rhombus 🔶", "Triangle 🔺"],
    correctAnswer: "Rhombus 🔶",
    hint: "Think of a kite flying high in the sky!",
    explanation: "A rhombus has four equal sides and is shaped like a classic diamond."
  },
  {
    id: "gk-geom-06",
    grade: 0,
    topic: "geometry",
    difficulty: "easy",
    question: "How many corners does a triangle have?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: "3",
    hint: "Count the pointy corners of a pizza slice!",
    explanation: "A triangle always has exactly three corners!"
  },

  // comparing (Greater/Less)
  {
    id: "gk-comp-01",
    grade: 0,
    topic: "comparing",
    difficulty: "easy",
    question: "Which number is bigger: 8 or 5?",
    choices: ["5", "8", "They are the same"],
    correctAnswer: "8",
    hint: "Which group would have more yummy candies?",
    explanation: "Eight is a larger quantity than five."
  },
  {
    id: "gk-comp-02",
    grade: 0,
    topic: "comparing",
    difficulty: "easy",
    question: "Which group has FEWER items?",
    choices: ["Group A: 🍇 🍇 🍇", "Group B: 🍌 🍌 🍌 🍌 🍌"],
    correctAnswer: "Group A: 🍇 🍇 🍇",
    hint: "Fewer means the smaller amount!",
    explanation: "Group A only has 3 grapes, which is less than the 5 bananas in Group B."
  },
  {
    id: "gk-comp-03",
    grade: 0,
    topic: "comparing",
    difficulty: "easy",
    question: "Which number is smaller: 2 or 7?",
    choices: ["2", "7", "They are the same"],
    correctAnswer: "2",
    hint: "If you only have two apples, you have very few!",
    explanation: "Two is less than seven."
  },
  {
    id: "gk-comp-04",
    grade: 0,
    topic: "comparing",
    difficulty: "easy",
    question: "Are 6 and 6 the same or different?",
    choices: ["Same", "Different"],
    correctAnswer: "Same",
    hint: "Do these numbers look identical and represent the same quantity?",
    explanation: "Six and six are exactly the same number!"
  },
  {
    id: "gk-comp-05",
    grade: 0,
    topic: "comparing",
    difficulty: "easy",
    question: "Which number is greater than 4?",
    choices: ["1", "2", "3", "9"],
    correctAnswer: "9",
    hint: "Which number comes after 4 when counting up?",
    explanation: "Nine is greater than four, while one, two, and three are smaller."
  },
  {
    id: "gk-comp-06",
    grade: 0,
    topic: "comparing",
    difficulty: "easy",
    question: "Which group has MORE items?",
    choices: ["Group A: 🍎 🍎", "Group B: 🍎 🍎 🍎 🍎"],
    correctAnswer: "Group B: 🍎 🍎 🍎 🍎",
    hint: "Count them: Group A has 2, Group B has 4!",
    explanation: "Group B has four apples, which is more than Group A's two apples."
  },

  // ==================== GRADE 1 ====================
  // addition
  {
    id: "g1-add-01",
    grade: 1,
    topic: "addition",
    difficulty: "easy",
    question: "8 + 6 = ?",
    choices: ["12", "13", "14", "15"],
    correctAnswer: "14",
    hint: "Make a ten first! 8 + 2 is 10, then add 4 more.",
    explanation: "Adding 6 to 8 gives you 14. 8 + 2 + 4 = 14."
  },
  {
    id: "g1-add-02",
    grade: 1,
    topic: "addition",
    difficulty: "medium",
    question: "If 9 + 5 = 10 + ?, what is the missing number?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4",
    hint: "Since 9 + 5 equals 14, 10 plus what number also equals 14?",
    explanation: "9 + 5 = 14. To make 14 with a ten, you do 10 + 4!"
  },
  {
    id: "g1-add-03",
    grade: 1,
    topic: "addition",
    difficulty: "easy",
    question: "7 + 5 = ?",
    choices: ["10", "11", "12", "13"],
    correctAnswer: "12",
    hint: "Add 3 to 7 to make 10, then add 2 more.",
    explanation: "7 + 5 = 12. Regrouping 5 into 3 and 2 makes this simple."
  },
  {
    id: "g1-add-04",
    grade: 1,
    topic: "addition",
    difficulty: "medium",
    question: "Find the missing addend: 6 + ? = 10",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4",
    hint: "What number do you need to add to 6 to make a full ten?",
    explanation: "6 + 4 = 10. Four is the missing addend."
  },
  {
    id: "g1-add-05",
    grade: 1,
    topic: "addition",
    difficulty: "easy",
    question: "Double challenge: 7 + 7 = ?",
    choices: ["12", "13", "14", "15"],
    correctAnswer: "14",
    hint: "Think of your doubles! 7 plus 7 is one more than 6 + 7.",
    explanation: "Double seven is fourteen. 7 + 7 = 14."
  },
  {
    id: "g1-add-06",
    grade: 1,
    topic: "addition",
    difficulty: "hard",
    question: "What is 9 + 8?",
    choices: ["15", "16", "17", "18"],
    correctAnswer: "17",
    hint: "Think: 10 + 8 is 18. Since 9 is one less than 10, the answer is one less than 18!",
    explanation: "9 + 8 = 17. You can also do 9 + 1 + 7 = 10 + 7 = 17."
  },

  // subtraction
  {
    id: "g1-sub-01",
    grade: 1,
    topic: "subtraction",
    difficulty: "easy",
    question: "15 - 7 = ?",
    choices: ["6", "7", "8", "9"],
    correctAnswer: "8",
    hint: "What number plus 7 equals 15? Count up from 7 to 15.",
    explanation: "15 take away 7 leaves you with exactly 8."
  },
  {
    id: "g1-sub-02",
    grade: 1,
    topic: "subtraction",
    difficulty: "medium",
    question: "What is 20 minus 8?",
    choices: ["10", "11", "12", "13"],
    correctAnswer: "12",
    hint: "Take away 10 from 20 first (10), then add 2 back!",
    explanation: "20 - 8 = 12. If you count backwards from 20 by 8, you land on 12."
  },
  {
    id: "g1-sub-03",
    grade: 1,
    topic: "subtraction",
    difficulty: "easy",
    question: "12 - 4 = ?",
    choices: ["6", "7", "8", "9"],
    correctAnswer: "8",
    hint: "Count backwards: 12, 11, 10, 9, and...?",
    explanation: "12 - 4 = 8. Four less than twelve is eight."
  },
  {
    id: "g1-sub-04",
    grade: 1,
    topic: "subtraction",
    difficulty: "medium",
    question: "If you have 11 apples and eat 3, how many are left?",
    choices: ["7", "8", "9", "10"],
    correctAnswer: "8",
    hint: "This is a subtraction: 11 minus 3.",
    explanation: "Eating 3 apples from 11 leaves you with 8 apples."
  },
  {
    id: "g1-sub-05",
    grade: 1,
    topic: "subtraction",
    difficulty: "medium",
    question: "18 - 9 = ?",
    choices: ["8", "9", "10", "11"],
    correctAnswer: "9",
    hint: "Think: what is double 9? 9 + 9 = ?",
    explanation: "18 - 9 = 9. Since double nine is eighteen, eighteen minus nine is nine."
  },
  {
    id: "g1-sub-06",
    grade: 1,
    topic: "subtraction",
    difficulty: "hard",
    question: "Find the missing number: 14 - ? = 8",
    choices: ["4", "5", "6", "7"],
    correctAnswer: "6",
    hint: "What number do you subtract from 14 to get 8? You can also do 14 - 8.",
    explanation: "14 - 6 = 8. The missing number is six."
  },

  // place-value
  {
    id: "g1-pv-01",
    grade: 1,
    topic: "place-value",
    difficulty: "easy",
    question: "What number has 1 ten and 7 ones?",
    choices: ["10", "17", "71", "8"],
    correctAnswer: "17",
    hint: "A 'ten' goes in the tens column on the left, 'ones' on the right.",
    explanation: "1 ten (10) and 7 ones (7) makes 17."
  },
  {
    id: "g1-pv-02",
    grade: 1,
    topic: "place-value",
    difficulty: "easy",
    question: "In the number 14, how many tens are there?",
    choices: ["1", "4", "10", "14"],
    correctAnswer: "1",
    hint: "Look at the digit in the tens place (left digit).",
    explanation: "14 consists of 1 ten and 4 ones, so there is 1 ten."
  },
  {
    id: "g1-pv-03",
    grade: 1,
    topic: "place-value",
    difficulty: "medium",
    question: "What is the value of the 2 in the number 25?",
    choices: ["2", "5", "20", "50"],
    correctAnswer: "20",
    hint: "The 2 is in the tens column. 2 tens equals how much?",
    explanation: "The digit 2 represents 2 tens, which has a value of 20."
  },
  {
    id: "g1-pv-04",
    grade: 1,
    topic: "place-value",
    difficulty: "easy",
    question: "Which number represents 3 tens and 2 ones?",
    choices: ["23", "30", "32", "5"],
    correctAnswer: "32",
    hint: "Place the 3 in the tens slot and the 2 in the ones slot.",
    explanation: "3 tens (30) + 2 ones (2) = 32."
  },
  {
    id: "g1-pv-05",
    grade: 1,
    topic: "place-value",
    difficulty: "medium",
    question: "How many ones are in the number 19?",
    choices: ["1", "9", "10", "19"],
    correctAnswer: "9",
    hint: "Look at the digit in the ones column on the right.",
    explanation: "The number 19 has 1 ten and 9 ones, so there are 9 ones."
  },
  {
    id: "g1-pv-06",
    grade: 1,
    topic: "place-value",
    difficulty: "easy",
    question: "What number is 10 more than 50?",
    choices: ["40", "51", "60", "70"],
    correctAnswer: "60",
    hint: "Add 1 ten to the tens place of 50.",
    explanation: "50 + 10 = 60. One ten added to five tens gives six tens."
  },

  // ==================== GRADE 2 ====================
  // addition
  {
    id: "g2-add-01",
    grade: 2,
    topic: "addition",
    difficulty: "medium",
    question: "34 + 28 = ?",
    choices: ["52", "60", "62", "72"],
    correctAnswer: "62",
    hint: "Add the ones first: 4 + 8 = 12. Carry the 1 ten!",
    explanation: "Add the ones: 4 + 8 = 12. Add the tens: 30 + 20 = 50. 50 + 12 = 62."
  },
  {
    id: "g2-add-02",
    grade: 2,
    topic: "addition",
    difficulty: "hard",
    question: "Add 45 and 37. What is the sum?",
    choices: ["72", "82", "83", "92"],
    correctAnswer: "82",
    hint: "5 + 7 = 12. Add that to the sum of 40 + 30.",
    explanation: "45 + 37 = 82. Regrouping 12 ones gives 1 ten and 2 ones."
  },
  {
    id: "g2-add-03",
    grade: 2,
    topic: "addition",
    difficulty: "medium",
    question: "56 + 19 = ?",
    choices: ["65", "74", "75", "85"],
    correctAnswer: "75",
    hint: "19 is almost 20! Do 56 + 20 and then subtract 1.",
    explanation: "56 + 19 = 75. Regrouping 6 + 9 = 15 ones to 1 ten and 5 ones."
  },
  {
    id: "g2-add-04",
    grade: 2,
    topic: "addition",
    difficulty: "medium",
    question: "What is 27 + 38?",
    choices: ["55", "65", "66", "75"],
    correctAnswer: "65",
    hint: "Add ones: 7 + 8 = 15. Add tens: 20 + 30 = 50. Combine them!",
    explanation: "27 + 38 = 65. 50 + 15 = 65."
  },
  {
    id: "g2-add-05",
    grade: 2,
    topic: "addition",
    difficulty: "hard",
    question: "Find the sum of 64 and 29.",
    choices: ["83", "91", "93", "94"],
    correctAnswer: "93",
    hint: "Add 30 to 64 (94), then subtract 1.",
    explanation: "64 + 29 = 93. Regrouping 4 + 9 = 13 ones to 1 ten and 3 ones."
  },
  {
    id: "g2-add-06",
    grade: 2,
    topic: "addition",
    difficulty: "medium",
    question: "Solve: 48 + 15 = ?",
    choices: ["53", "62", "63", "73"],
    correctAnswer: "63",
    hint: "8 + 5 = 13 ones. Carry that ten to 40 + 10.",
    explanation: "48 + 15 = 63. 40 + 10 + 13 = 63."
  },

  // subtraction
  {
    id: "g2-sub-01",
    grade: 2,
    topic: "subtraction",
    difficulty: "medium",
    question: "62 - 38 = ?",
    choices: ["24", "26", "34", "36"],
    correctAnswer: "24",
    hint: "Borrow 1 ten from 60 to make 12 ones. Then subtract 12 - 8.",
    explanation: "Borrow from tens: 62 becomes 50 and 12. 12 - 8 = 4. 50 - 30 = 20. 20 + 4 = 24."
  },
  {
    id: "g2-sub-02",
    grade: 2,
    topic: "subtraction",
    difficulty: "hard",
    question: "Subtract 19 from 50.",
    choices: ["30", "31", "41", "49"],
    correctAnswer: "31",
    hint: "Borrow a ten to do 10 - 9 first, then subtract the tens.",
    explanation: "50 - 19 = 31. Taking away 20 from 50 gets 30, then add 1 back."
  },
  {
    id: "g2-sub-03",
    grade: 2,
    topic: "subtraction",
    difficulty: "medium",
    question: "71 - 45 = ?",
    choices: ["25", "26", "35", "36"],
    correctAnswer: "26",
    hint: "Borrow from 7 to make the ones place 11. 11 - 5 = ?",
    explanation: "71 - 45 = 26. Regrouping 71 into 60 and 11 makes subtraction simple."
  },
  {
    id: "g2-sub-04",
    grade: 2,
    topic: "subtraction",
    difficulty: "hard",
    question: "What is 80 minus 34?",
    choices: ["46", "56", "44", "54"],
    correctAnswer: "46",
    hint: "Borrow a ten from 80. Subtract 10 - 4 and 70 - 30.",
    explanation: "80 - 34 = 46. 70 - 30 = 40, and 10 - 4 = 6."
  },
  {
    id: "g2-sub-05",
    grade: 2,
    topic: "subtraction",
    difficulty: "medium",
    question: "Solve: 53 - 27 = ?",
    choices: ["25", "26", "36", "37"],
    correctAnswer: "26",
    hint: "Regroup 53 into 40 and 13. Subtract 13 - 7.",
    explanation: "53 - 27 = 26. 40 - 20 = 20, and 13 - 7 = 6."
  },
  {
    id: "g2-sub-06",
    grade: 2,
    topic: "subtraction",
    difficulty: "hard",
    question: "Find the difference: 92 - 58 = ?",
    choices: ["34", "36", "44", "46"],
    correctAnswer: "34",
    hint: "Borrow from 9 to make 12 ones. Then subtract 12 - 8.",
    explanation: "92 - 58 = 34. Regrouping 92 into 80 and 12 yields 80 - 50 = 30 and 12 - 8 = 4."
  },

  // measurement
  {
    id: "g2-meas-01",
    grade: 2,
    topic: "measurement",
    difficulty: "easy",
    question: "Minute hand is at 6. Hour hand is between 3 and 4. What time is it?",
    choices: ["3:00", "3:30", "4:30", "6:15"],
    correctAnswer: "3:30",
    hint: "When the minute hand points to 6, it means 30 minutes past the hour.",
    explanation: "Hour hand between 3 and 4 means it's past 3 but not 4 yet. Minute hand at 6 is 30. So it is 3:30."
  },
  {
    id: "g2-meas-02",
    grade: 2,
    topic: "measurement",
    difficulty: "easy",
    question: "How many quarters make a whole dollar?",
    choices: ["2", "4", "10", "100"],
    correctAnswer: "4",
    hint: "Each quarter is worth 25 cents. We need 100 cents for a dollar.",
    explanation: "25c + 25c + 25c + 25c = 100c. So 4 quarters make a dollar."
  },
  {
    id: "g2-meas-03",
    grade: 2,
    topic: "measurement",
    difficulty: "easy",
    question: "If the minute hand is at 12 and the hour hand is at 5, what time is it?",
    choices: ["12:05", "5:00", "5:12", "12:00"],
    correctAnswer: "5:00",
    hint: "A minute hand at 12 represents a brand new hour starting (00 minutes).",
    explanation: "Hour hand at 5 and minute hand at 12 represents exactly 5:00 o'clock."
  },
  {
    id: "g2-meas-04",
    grade: 2,
    topic: "measurement",
    difficulty: "medium",
    question: "How many cents are in 3 dimes and 1 nickel?",
    choices: ["25c", "31c", "35c", "40c"],
    correctAnswer: "35c",
    hint: "Dimes are 10 cents each, and nickels are 5 cents each.",
    explanation: "3 dimes = 30c. 1 nickel = 5c. 30c + 5c = 35c."
  },
  {
    id: "g2-meas-05",
    grade: 2,
    topic: "measurement",
    difficulty: "medium",
    question: "What is the time if the minute hand points to 3 and the hour hand points to 10?",
    choices: ["3:10", "10:03", "10:15", "10:30"],
    correctAnswer: "10:15",
    hint: "Each number on the clock face represents 5 minutes. 3 times 5 = ?",
    explanation: "Hour hand at 10 and minute hand at 3 (representing 15 minutes) is 10:15."
  },
  {
    id: "g2-meas-06",
    grade: 2,
    topic: "measurement",
    difficulty: "hard",
    question: "A toy costs 85 cents. Which coins equal this amount?",
    choices: ["3 quarters and 1 dime", "4 quarters", "3 quarters and 1 nickel", "8 dimes"],
    correctAnswer: "3 quarters and 1 dime",
    hint: "Quarters are 25c. 3 quarters = 75c. How much more do you need?",
    explanation: "3 quarters = 75c, plus 1 dime (10c) equals 85c."
  },

  // ==================== GRADE 3 ====================
  // multiplication
  {
    id: "g3-mult-01",
    grade: 3,
    topic: "multiplication",
    difficulty: "medium",
    question: "7 x 8 = ?",
    choices: ["48", "54", "56", "64"],
    correctAnswer: "56",
    hint: "Think: 5 times 8 is 40. Now add 2 more groups of 8!",
    explanation: "7 groups of 8 equals 56. 40 + 16 = 56."
  },
  {
    id: "g3-mult-02",
    grade: 3,
    topic: "multiplication",
    difficulty: "medium",
    question: "What is 6 times 9?",
    choices: ["45", "54", "63", "72"],
    correctAnswer: "54",
    hint: "Think: 10 times 6 is 60. Subtract 1 group of 6 to get 9 times 6!",
    explanation: "6 x 9 = 54. A quick trick for 9s is that the digits add up to 9 (5+4=9)."
  },
  {
    id: "g3-mult-03",
    grade: 3,
    topic: "multiplication",
    difficulty: "easy",
    question: "8 x 4 = ?",
    choices: ["24", "28", "32", "36"],
    correctAnswer: "32",
    hint: "Think of your doubles! Double 8 is 16, and double 16 is...?",
    explanation: "8 groups of 4 equals 32. 8 x 2 = 16, 16 x 2 = 32."
  },
  {
    id: "g3-mult-04",
    grade: 3,
    topic: "multiplication",
    difficulty: "medium",
    question: "Find the product of 9 and 3.",
    choices: ["24", "27", "28", "30"],
    correctAnswer: "27",
    hint: "Count by nines three times: 9, 18, and...?",
    explanation: "9 multiplied by 3 is 27."
  },
  {
    id: "g3-mult-05",
    grade: 3,
    topic: "multiplication",
    difficulty: "medium",
    question: "7 x 6 = ?",
    choices: ["36", "42", "48", "54"],
    correctAnswer: "42",
    hint: "Think: 5 groups of 6 is 30. Now add two more groups of 6!",
    explanation: "7 x 6 = 42. 30 + 12 = 42."
  },
  {
    id: "g3-mult-06",
    grade: 3,
    topic: "multiplication",
    difficulty: "hard",
    question: "If 8 x 8 = ?",
    choices: ["56", "60", "64", "72"],
    correctAnswer: "64",
    hint: "Think of a famous chessboard grid! It's an 8 by 8 square.",
    explanation: "8 squared or 8 x 8 is exactly 64."
  },

  // division
  {
    id: "g3-div-01",
    grade: 3,
    topic: "division",
    difficulty: "medium",
    question: "48 ÷ 6 = ?",
    choices: ["7", "8", "9", "12"],
    correctAnswer: "8",
    hint: "What number multiplied by 6 equals 48?",
    explanation: "48 divided into 6 equal groups gives 8 in each group."
  },
  {
    id: "g3-div-02",
    grade: 3,
    topic: "division",
    difficulty: "hard",
    question: "Share 35 stickers equally among 5 friends. How many does each get?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: "7",
    hint: "This is a division problem: 35 divided by 5.",
    explanation: "35 divided by 5 is 7. Each friend gets 7 stickers."
  },
  {
    id: "g3-div-03",
    grade: 3,
    topic: "division",
    difficulty: "medium",
    question: "72 ÷ 8 = ?",
    choices: ["7", "8", "9", "10"],
    correctAnswer: "9",
    hint: "Think: what number times 8 is 72? It is one group of 8 less than 80!",
    explanation: "72 divided by 8 is 9, because 9 x 8 = 72."
  },
  {
    id: "g3-div-04",
    grade: 3,
    topic: "division",
    difficulty: "medium",
    question: "Find the quotient of 54 divided by 6.",
    choices: ["7", "8", "9", "10"],
    correctAnswer: "9",
    hint: "6 times what number equals 54?",
    explanation: "54 divided by 6 is 9, because 6 x 9 = 54."
  },
  {
    id: "g3-div-05",
    grade: 3,
    topic: "division",
    difficulty: "easy",
    question: "Divide 40 by 5.",
    choices: ["6", "7", "8", "9"],
    correctAnswer: "8",
    hint: "Count by fives until you reach 40: 5, 10, 15, 20...",
    explanation: "40 ÷ 5 = 8, because 8 groups of 5 is 40."
  },
  {
    id: "g3-div-06",
    grade: 3,
    topic: "division",
    difficulty: "hard",
    question: "If 63 ÷ 9 = ?",
    choices: ["6", "7", "8", "9"],
    correctAnswer: "7",
    hint: "What number times 9 equals 63?",
    explanation: "63 ÷ 9 = 7, because 7 x 9 = 63."
  },

  // fractions
  {
    id: "g3-frac-01",
    grade: 3,
    topic: "fractions",
    difficulty: "medium",
    question: "A pizza has 4 equal slices. 3 slices are eaten. What fraction is eaten?",
    choices: ["1/4", "3/4", "4/3", "2/4"],
    correctAnswer: "3/4",
    hint: "Numerator is the slices eaten (3), denominator is the total slices (4).",
    explanation: "3 slices out of 4 total is written as three-fourths or 3/4."
  },
  {
    id: "g3-frac-02",
    grade: 3,
    topic: "fractions",
    difficulty: "medium",
    question: "Which fraction is equivalent to 1/2?",
    choices: ["2/3", "2/4", "3/5", "4/6"],
    correctAnswer: "2/4",
    hint: "Which fraction represents exactly half of its total pieces?",
    explanation: "2 out of 4 pieces is exactly half the total. 2/4 reduces to 1/2."
  },
  {
    id: "g3-frac-03",
    grade: 3,
    topic: "fractions",
    difficulty: "easy",
    question: "What is the top number of a fraction called?",
    choices: ["Numerator", "Denominator", "Whole", "Remainder"],
    correctAnswer: "Numerator",
    hint: "Think: N is for 'North' (top), D is for 'Down' (bottom).",
    explanation: "The top number is the Numerator (parts counted); the bottom is the Denominator (total parts)."
  },
  {
    id: "g3-frac-04",
    grade: 3,
    topic: "fractions",
    difficulty: "easy",
    question: "Which of these fractions is greater: 1/3 or 2/3?",
    choices: ["1/3", "2/3", "They are the same"],
    correctAnswer: "2/3",
    hint: "When denominators are the same, look at the numerators. Which is bigger?",
    explanation: "Since both have the same denominator, 2 parts out of 3 is larger than 1 part out of 3."
  },
  {
    id: "g3-frac-05",
    grade: 3,
    topic: "fractions",
    difficulty: "medium",
    question: "Find the fraction equivalent to 2/3.",
    choices: ["4/6", "3/4", "2/6", "5/6"],
    correctAnswer: "4/6",
    hint: "Multiply both the numerator and denominator by 2!",
    explanation: "2/3 is equivalent to 4/6. If you multiply top and bottom of 2/3 by 2, you get 4/6."
  },
  {
    id: "g3-frac-06",
    grade: 3,
    topic: "fractions",
    difficulty: "hard",
    question: "A cake is cut into 8 equal parts. We take 4 parts. What fraction is left?",
    choices: ["1/8", "3/8", "4/8", "6/8"],
    correctAnswer: "4/8",
    hint: "If you take 4 parts from 8, how many parts are left? 8 - 4 = ?",
    explanation: "Taking 4 parts leaves 4 parts out of 8, which is written as 4/8 (equivalent to 1/2)."
  },

  // ==================== GRADE 4 ====================
  // multiplication
  {
    id: "g4-mult-01",
    grade: 4,
    topic: "multiplication",
    difficulty: "hard",
    question: "12 x 15 = ?",
    choices: ["150", "165", "180", "200"],
    correctAnswer: "180",
    hint: "Multiply 12 x 10 first (120), then add 12 x 5 (60).",
    explanation: "12 x 15 = 180. Breaking it up makes it easy: 12 x 10 = 120, 12 x 5 = 60. 120 + 60 = 180."
  },
  {
    id: "g4-mult-02",
    grade: 4,
    topic: "multiplication",
    difficulty: "medium",
    question: "What is 24 times 6?",
    choices: ["120", "136", "144", "154"],
    correctAnswer: "144",
    hint: "Multiply 20 x 6 (120) and add 4 x 6 (24).",
    explanation: "24 x 6 = 144. 120 + 24 = 144."
  },
  {
    id: "g4-mult-03",
    grade: 4,
    topic: "multiplication",
    difficulty: "hard",
    question: "15 x 15 = ?",
    choices: ["200", "215", "225", "250"],
    correctAnswer: "225",
    hint: "Multiply 15 x 10 (150) and add 15 x 5 (75).",
    explanation: "15 x 15 = 225. (150 + 75 = 225)."
  },
  {
    id: "g4-mult-04",
    grade: 4,
    topic: "multiplication",
    difficulty: "medium",
    question: "Find the product: 35 x 4 = ?",
    choices: ["120", "135", "140", "150"],
    correctAnswer: "140",
    hint: "Think: 35 x 2 is 70, then double it again!",
    explanation: "35 multiplied by 4 is 140. 35 x 2 = 70, 70 x 2 = 140."
  },
  {
    id: "g4-mult-05",
    grade: 4,
    topic: "multiplication",
    difficulty: "medium",
    question: "Solve: 16 x 8 = ?",
    choices: ["108", "118", "128", "138"],
    correctAnswer: "128",
    hint: "Multiply 10 x 8 (80) and add 6 x 8 (48).",
    explanation: "16 x 8 = 128. 80 + 48 = 128."
  },
  {
    id: "g4-mult-06",
    grade: 4,
    topic: "multiplication",
    difficulty: "hard",
    question: "What is 13 x 12?",
    choices: ["146", "150", "156", "166"],
    correctAnswer: "156",
    hint: "Multiply 13 x 10 (130) and add 13 x 2 (26).",
    explanation: "13 x 12 = 156. 130 + 26 = 156."
  },

  // division
  {
    id: "g4-div-01",
    grade: 4,
    topic: "division",
    difficulty: "medium",
    question: "84 ÷ 4 = ?",
    choices: ["20", "21", "22", "24"],
    correctAnswer: "21",
    hint: "Divide 80 by 4, then divide 4 by 4, and add the results.",
    explanation: "80 ÷ 4 = 20. 4 ÷ 4 = 1. So 84 ÷ 4 = 21."
  },
  {
    id: "g4-div-02",
    grade: 4,
    topic: "division",
    difficulty: "hard",
    question: "Divide 95 by 5.",
    choices: ["17", "18", "19", "20"],
    correctAnswer: "19",
    hint: "Think: 100 divided by 5 is 20. 95 is one group of 5 less!",
    explanation: "95 ÷ 5 = 19. (5 x 20 = 100, so 5 x 19 = 95)."
  },
  {
    id: "g4-div-03",
    grade: 4,
    topic: "division",
    difficulty: "hard",
    question: "Find the quotient: 96 ÷ 6 = ?",
    choices: ["14", "15", "16", "18"],
    correctAnswer: "16",
    hint: "Divide 60 by 6 (10) and then 36 by 6 (6). Combine them!",
    explanation: "96 divided by 6 is 16. 10 + 6 = 16."
  },
  {
    id: "g4-div-04",
    grade: 4,
    topic: "division",
    difficulty: "medium",
    question: "What is 144 divided by 12?",
    choices: ["11", "12", "13", "14"],
    correctAnswer: "12",
    hint: "Think about your perfect squares! 12 times what number is 144?",
    explanation: "144 ÷ 12 = 12, because 12 x 12 = 144."
  },
  {
    id: "g4-div-05",
    grade: 4,
    topic: "division",
    difficulty: "medium",
    question: "Divide 125 by 5.",
    choices: ["21", "24", "25", "30"],
    correctAnswer: "25",
    hint: "Think of quarters! Five quarters is 125 cents.",
    explanation: "125 divided by 5 is 25, since 25 x 5 = 125."
  },
  {
    id: "g4-div-06",
    grade: 4,
    topic: "division",
    difficulty: "hard",
    question: "Find the remainder: 15 ÷ 4 = ?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "3",
    hint: "4 times 3 is 12. How much is left over to get to 15?",
    explanation: "15 = 4 x 3 + 3. So the remainder is 3."
  },

  // fractions
  {
    id: "g4-frac-01",
    grade: 4,
    topic: "fractions",
    difficulty: "medium",
    question: "Add: 3/8 + 2/8 = ?",
    choices: ["5/16", "5/8", "6/8", "1"],
    correctAnswer: "5/8",
    hint: "Keep the denominator (8) the same and add the numerators (3 + 2).",
    explanation: "When adding fractions with like denominators, keep the bottom and add the top. 3 + 2 = 5, so 5/8."
  },
  {
    id: "g4-frac-02",
    grade: 4,
    topic: "fractions",
    difficulty: "hard",
    question: "Write 7/3 as a mixed number.",
    choices: ["1 2/3", "2 1/3", "2 2/3", "3 1/3"],
    correctAnswer: "2 1/3",
    hint: "How many whole times does 3 go into 7? What is the remainder?",
    explanation: "3 goes into 7 exactly 2 times with a remainder of 1. So it is 2 wholes and 1/3 left over, written as 2 1/3."
  },
  {
    id: "g4-frac-03",
    grade: 4,
    topic: "fractions",
    difficulty: "medium",
    question: "Subtract: 7/10 - 3/10 = ?",
    choices: ["4/20", "4/10", "5/10", "1/2"],
    correctAnswer: "4/10",
    hint: "Keep the denominator (10) same, subtract numerator: 7 - 3.",
    explanation: "7/10 - 3/10 = 4/10. This can also reduce to 2/5."
  },
  {
    id: "g4-frac-04",
    grade: 4,
    topic: "fractions",
    difficulty: "hard",
    question: "Add: 4/5 + 3/5 = ?",
    choices: ["7/10", "1 1/5", "1 2/5", "1 3/5"],
    correctAnswer: "1 2/5",
    hint: "4/5 + 3/5 = 7/5. Convert this improper fraction to a mixed number.",
    explanation: "7/5 = 1 whole (5/5) and 2/5 leftover, which is written as 1 2/5."
  },
  {
    id: "g4-frac-05",
    grade: 4,
    topic: "fractions",
    difficulty: "hard",
    question: "Write 1 3/4 as an improper fraction.",
    choices: ["4/7", "7/4", "6/4", "5/4"],
    correctAnswer: "7/4",
    hint: "Multiply the whole (1) by bottom (4) and add the top (3). Keep bottom as 4.",
    explanation: "1 x 4 = 4. 4 + 3 = 7. So it is 7/4."
  },
  {
    id: "g4-frac-06",
    grade: 4,
    topic: "fractions",
    difficulty: "medium",
    question: "What is 5/12 + 2/12?",
    choices: ["7/24", "7/12", "6/12", "1/2"],
    correctAnswer: "7/12",
    hint: "Keep denominator as 12, add top numerators: 5 + 2.",
    explanation: "5/12 + 2/12 = 7/12."
  },

  // ==================== GRADE 5 ====================
  // decimals
  {
    id: "g5-dec-01",
    grade: 5,
    topic: "decimals",
    difficulty: "medium",
    question: "4.5 + 2.75 = ?",
    choices: ["6.25", "7.00", "7.25", "7.50"],
    correctAnswer: "7.25",
    hint: "Line up the decimal points! Add a zero to 4.5 to make it 4.50.",
    explanation: "Align decimals: 4.50 + 2.75 = 7.25. 50 hundredths + 75 hundredths is 1.25."
  },
  {
    id: "g5-dec-02",
    grade: 5,
    topic: "decimals",
    difficulty: "hard",
    question: "What is 10 minus 3.2?",
    choices: ["6.2", "6.8", "7.2", "7.8"],
    correctAnswer: "6.8",
    hint: "Line up the decimal points: 10.0 minus 3.2.",
    explanation: "10.0 - 3.2 = 6.8. Think of it as 100 tenths minus 32 tenths, leaving 68 tenths."
  },
  {
    id: "g5-dec-03",
    grade: 5,
    topic: "decimals",
    difficulty: "hard",
    question: "Multiply: 0.5 x 0.2 = ?",
    choices: ["0.01", "0.1", "1.0", "0.25"],
    correctAnswer: "0.1",
    hint: "Multiply 5 x 2 = 10, then move the decimal point two places to the left.",
    explanation: "0.5 x 0.2 = 0.10, which is written as 0.1."
  },
  {
    id: "g5-dec-04",
    grade: 5,
    topic: "decimals",
    difficulty: "hard",
    question: "Solve: 12.6 - 4.15 = ?",
    choices: ["8.45", "8.55", "9.45", "9.55"],
    correctAnswer: "8.45",
    hint: "Write 12.6 as 12.60 to line up decimal place columns.",
    explanation: "12.60 - 4.15 = 8.45. 60 hundredths minus 15 hundredths is 45 hundredths."
  },
  {
    id: "g5-dec-05",
    grade: 5,
    topic: "decimals",
    difficulty: "medium",
    question: "Add: 0.75 + 1.5 = ?",
    choices: ["1.80", "2.25", "2.50", "2.75"],
    correctAnswer: "2.25",
    hint: "Rewrite 1.5 as 1.50 and line up the decimal places.",
    explanation: "0.75 + 1.50 = 2.25."
  },
  {
    id: "g5-dec-06",
    grade: 5,
    topic: "decimals",
    difficulty: "hard",
    question: "What is 6 divided by 1.5?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4",
    hint: "Double both numbers to make it simpler: 12 divided by 3!",
    explanation: "6 ÷ 1.5 = 4. Indeed, 4 x 1.5 = 6.0."
  },

  // geometry
  {
    id: "g5-geom-01",
    grade: 5,
    topic: "geometry",
    difficulty: "hard",
    question: "A box is 3cm long, 4cm wide, and 5cm tall. What is its volume?",
    choices: ["12 cm³", "20 cm³", "60 cm³", "80 cm³"],
    correctAnswer: "60 cm³",
    hint: "Volume formula: Length x Width x Height.",
    explanation: "Volume = 3 x 4 x 5 = 60 cubic centimeters (cm³)."
  },
  {
    id: "g5-geom-02",
    grade: 5,
    topic: "geometry",
    difficulty: "medium",
    question: "Plot point (3, 4) on grid. From 0, what are the steps?",
    choices: ["Up 3, Right 4", "Right 3, Up 4", "Left 3, Down 4", "Down 3, Left 4"],
    correctAnswer: "Right 3, Up 4",
    hint: "Coordinate order is (x, y): run along the ground first, then fly up!",
    explanation: "For (3, 4), the x-coordinate (3) tells you to go right 3 steps, and y-coordinate (4) tells you to go up 4."
  },
  {
    id: "g5-geom-03",
    grade: 5,
    topic: "geometry",
    difficulty: "hard",
    question: "Find the volume of a cube with 3cm sides.",
    choices: ["9 cm³", "18 cm³", "27 cm³", "54 cm³"],
    correctAnswer: "27 cm³",
    hint: "Volume of a cube formula: Side x Side x Side.",
    explanation: "Volume = 3 x 3 x 3 = 27 cubic centimeters (cm³)."
  },
  {
    id: "g5-geom-04",
    grade: 5,
    topic: "geometry",
    difficulty: "hard",
    question: "What is the volume of a box with length=2m, width=5m, height=8m?",
    choices: ["40 m³", "60 m³", "80 m³", "100 m³"],
    correctAnswer: "80 m³",
    hint: "Multiply the dimensions: length x width x height.",
    explanation: "Volume = 2 x 5 x 8 = 80 cubic meters (m³)."
  },
  {
    id: "g5-geom-05",
    grade: 5,
    topic: "geometry",
    difficulty: "easy",
    question: "On a coordinate grid, what coordinate is the origin?",
    choices: ["(1, 1)", "(0, 1)", "(1, 0)", "(0, 0)"],
    correctAnswer: "(0, 0)",
    hint: "The origin is the absolute starting point where both grid lines cross.",
    explanation: "The origin has coordinates (0, 0) representing zero right and zero up."
  },
  {
    id: "g5-geom-06",
    grade: 5,
    topic: "geometry",
    difficulty: "medium",
    question: "A flat rug has length 5m and width 4m. What is its perimeter?",
    choices: ["9m", "18m", "20m", "40m"],
    correctAnswer: "18m",
    hint: "Perimeter is the distance around! Add all four sides: 5 + 4 + 5 + 4.",
    explanation: "Perimeter = 2 x (Length + Width) = 2 x (5 + 4) = 18 meters."
  },

  // fractions
  {
    id: "g5-frac-01",
    grade: 5,
    topic: "fractions",
    difficulty: "hard",
    question: "Add: 1/2 + 1/3 = ?",
    choices: ["2/5", "5/6", "1/6", "2/6"],
    correctAnswer: "5/6",
    hint: "Find a common denominator! For 2 and 3, it is 6. Rewrite both fractions.",
    explanation: "To add, find the common denominator (6). 1/2 = 3/6, and 1/3 = 2/6. 3/6 + 2/6 = 5/6."
  },
  {
    id: "g5-frac-02",
    grade: 5,
    topic: "fractions",
    difficulty: "hard",
    question: "What is 3/4 - 1/8?",
    choices: ["2/4", "5/8", "4/8", "7/8"],
    correctAnswer: "5/8",
    hint: "Find a common denominator of 8. Rewrite 3/4 as an eighths fraction.",
    explanation: "Common denominator is 8. Rewrite 3/4 as 6/8. Then subtract: 6/8 - 1/8 = 5/8."
  },
  {
    id: "g5-frac-03",
    grade: 5,
    topic: "fractions",
    difficulty: "medium",
    question: "Add: 2/5 + 1/10 = ?",
    choices: ["3/10", "3/5", "5/10", "1/2"],
    correctAnswer: "5/10",
    hint: "Convert 2/5 to tenths by multiplying top and bottom by 2.",
    explanation: "2/5 is equivalent to 4/10. 4/10 + 1/10 = 5/10 (which simplifies to 1/2)."
  },
  {
    id: "g5-frac-04",
    grade: 5,
    topic: "fractions",
    difficulty: "hard",
    question: "Subtract: 2/3 - 1/2 = ?",
    choices: ["1/6", "1/3", "2/6", "3/6"],
    correctAnswer: "1/6",
    hint: "Find common denominator of 6. Convert 2/3 and 1/2.",
    explanation: "2/3 = 4/6, and 1/2 = 3/6. Subtract: 4/6 - 3/6 = 1/6."
  },
  {
    id: "g5-frac-05",
    grade: 5,
    topic: "fractions",
    difficulty: "hard",
    question: "Solve: 3/4 + 1/2 = ?",
    choices: ["4/6", "5/4", "1", "1 1/2"],
    correctAnswer: "5/4",
    hint: "Find common denominator of 4. Convert 1/2 to 2/4.",
    explanation: "3/4 + 2/4 = 5/4 (which can also be written as 1 1/4)."
  },
  {
    id: "g5-frac-06",
    grade: 5,
    topic: "fractions",
    difficulty: "hard",
    question: "What is 4/5 - 1/3?",
    choices: ["3/5", "3/15", "7/15", "11/15"],
    correctAnswer: "7/15",
    hint: "Common denominator for 5 and 3 is 15. Convert both fractions.",
    explanation: "4/5 = 12/15, and 1/3 = 5/15. Subtract: 12/15 - 5/15 = 7/15."
  },

  // ==================== GRADE 6 ====================
  // ratios
  {
    id: "g6-ratio-01",
    grade: 6,
    topic: "ratios",
    difficulty: "easy",
    question: "If there are 3 red balls and 5 blue balls, what is the ratio of red balls to blue balls?",
    choices: ["3:5", "5:3", "3:8", "8:3"],
    correctAnswer: "3:5",
    hint: "Write down the count of red balls first, then colon, then count of blue balls.",
    explanation: "The ratio of red balls to blue balls is exactly 3:5."
  },
  {
    id: "g6-ratio-02",
    grade: 6,
    topic: "ratios",
    difficulty: "easy",
    question: "A pack of 3 magic cookies costs 15 coins. What is the unit rate of 1 cookie?",
    choices: ["3 coins", "4 coins", "5 coins", "6 coins"],
    correctAnswer: "5 coins",
    hint: "Divide the total coins by the number of cookies: 15 / 3.",
    explanation: "Each cookie costs 15 / 3 = 5 coins."
  },
  {
    id: "g6-ratio-03",
    grade: 6,
    topic: "ratios",
    difficulty: "medium",
    question: "Find the equivalent ratio for 2:3.",
    choices: ["4:5", "4:6", "6:8", "3:2"],
    correctAnswer: "4:6",
    hint: "Multiply both numbers of the ratio by the same value (like 2).",
    explanation: "Multiplying both 2 and 3 by 2 yields 4:6."
  },
  {
    id: "g6-ratio-04",
    grade: 6,
    topic: "ratios",
    difficulty: "medium",
    question: "A kart travels 120 miles in 2 hours. What is its speed in miles per hour?",
    choices: ["50 mph", "55 mph", "60 mph", "65 mph"],
    correctAnswer: "60 mph",
    hint: "Divide distance by time: 120 / 2.",
    explanation: "The speed is 120 miles / 2 hours = 60 miles per hour."
  },
  {
    id: "g6-ratio-05",
    grade: 6,
    topic: "ratios",
    difficulty: "hard",
    question: "In a forest of 30 trees, 18 are oak trees. What is the ratio of non-oak trees to oak trees?",
    choices: ["3:2", "2:3", "3:5", "5:3"],
    correctAnswer: "2:3",
    hint: "First find non-oak trees: 30 - 18 = 12. Then write the ratio 12:18 and simplify.",
    explanation: "Non-oak trees = 12. Ratio 12:18 simplifies to 2:3 by dividing both by 6."
  },
  {
    id: "g6-ratio-06",
    grade: 6,
    topic: "ratios",
    difficulty: "hard",
    question: "A potion uses 2 drops of nectar for every 5 drops of water. How much nectar is needed for 25 drops of water?",
    choices: ["8 drops", "10 drops", "12 drops", "15 drops"],
    correctAnswer: "10 drops",
    hint: "Set up equivalent ratios: 2/5 = x/25. Since 5 * 5 = 25, multiply 2 by 5.",
    explanation: "Multiplying both parts of the ratio 2:5 by 5 yields 10:25. Thus, 10 drops of nectar are needed."
  },
  // algebra
  {
    id: "g6-alg-01",
    grade: 6,
    topic: "algebra",
    difficulty: "easy",
    question: "Evaluate: 3x + 5 when x = 4.",
    choices: ["12", "15", "17", "20"],
    correctAnswer: "17",
    hint: "Multiply 3 by 4 first, then add 5.",
    explanation: "3(4) + 5 = 12 + 5 = 17."
  },
  {
    id: "g6-alg-02",
    grade: 6,
    topic: "algebra",
    difficulty: "easy",
    question: "Which expression represents '5 less than a number y'?",
    choices: ["5 - y", "y - 5", "5y", "y / 5"],
    correctAnswer: "y - 5",
    hint: "Think about taking 5 away from y.",
    explanation: "'5 less than y' means you start with y and subtract 5, which is y - 5."
  },
  {
    id: "g6-alg-03",
    grade: 6,
    topic: "algebra",
    difficulty: "medium",
    question: "Simplify the expression: 4a + 3b + 2a - b.",
    choices: ["6a + 2b", "7a + 2b", "6a + 4b", "5ab"],
    correctAnswer: "6a + 2b",
    hint: "Combine the 'a' terms together and 'b' terms together.",
    explanation: "(4a + 2a) + (3b - b) = 6a + 2b."
  },
  {
    id: "g6-alg-04",
    grade: 6,
    topic: "algebra",
    difficulty: "medium",
    question: "Solve for x: x + 8 = 15.",
    choices: ["6", "7", "8", "9"],
    correctAnswer: "7",
    hint: "Subtract 8 from both sides of the equation.",
    explanation: "Subtracting 8 from 15 gives x = 7."
  },
  {
    id: "g6-alg-05",
    grade: 6,
    topic: "algebra",
    difficulty: "hard",
    question: "Solve for y: 4y = 24.",
    choices: ["4", "5", "6", "8"],
    correctAnswer: "6",
    hint: "Divide both sides by 4.",
    explanation: "y = 24 / 4 = 6."
  },
  {
    id: "g6-alg-06",
    grade: 6,
    topic: "algebra",
    difficulty: "hard",
    question: "Which of the following is equivalent to 3(p + 4)?",
    choices: ["3p + 4", "3p + 12", "p + 12", "12p"],
    correctAnswer: "3p + 12",
    hint: "Distribute the 3 to both terms inside the parentheses: 3 * p and 3 * 4.",
    explanation: "Applying the distributive property: 3 * p + 3 * 4 = 3p + 12."
  },
  // statistics
  {
    id: "g6-stat-01",
    grade: 6,
    topic: "statistics",
    difficulty: "easy",
    question: "Find the mean of the numbers: 2, 4, 6, 8.",
    choices: ["4", "5", "6", "7"],
    correctAnswer: "5",
    hint: "Add the numbers together and divide by 4.",
    explanation: "(2 + 4 + 6 + 8) / 4 = 20 / 4 = 5."
  },
  {
    id: "g6-stat-02",
    grade: 6,
    topic: "statistics",
    difficulty: "easy",
    question: "Find the median of the ordered dataset: 3, 5, 7, 9, 11.",
    choices: ["5", "7", "9", "8"],
    correctAnswer: "7",
    hint: "The median is the middle number in an ordered list.",
    explanation: "7 is the middle number, so the median is 7."
  },
  {
    id: "g6-stat-03",
    grade: 6,
    topic: "statistics",
    difficulty: "medium",
    question: "Find the mode of this list of scrolls: 2, 3, 3, 4, 5, 5, 5.",
    choices: ["3", "4", "5", "2"],
    correctAnswer: "5",
    hint: "The mode is the number that appears most frequently.",
    explanation: "5 appears three times, which is more than any other number."
  },
  {
    id: "g6-stat-04",
    grade: 6,
    topic: "statistics",
    difficulty: "medium",
    question: "Find the range of this data: 10, 15, 20, 25, 30.",
    choices: ["10", "15", "20", "30"],
    correctAnswer: "20",
    hint: "Subtract the smallest number from the largest number: 30 - 10.",
    explanation: "Range = 30 - 10 = 20."
  },
  {
    id: "g6-stat-05",
    grade: 6,
    topic: "statistics",
    difficulty: "hard",
    question: "What is the average of 10, 20, and 30?",
    choices: ["15", "20", "25", "30"],
    correctAnswer: "20",
    hint: "Add them up (60) and divide by 3.",
    explanation: "(10 + 20 + 30) / 3 = 60 / 3 = 20."
  },
  {
    id: "g6-stat-06",
    grade: 6,
    topic: "statistics",
    difficulty: "hard",
    question: "If the sum of 5 numbers is 50, what is their mean?",
    choices: ["8", "9", "10", "12"],
    correctAnswer: "10",
    hint: "Mean is the sum divided by the count: 50 / 5.",
    explanation: "Mean = 50 / 5 = 10."
  },

  // ==================== GRADE 7 ====================
  // integers
  {
    id: "g7-int-01",
    grade: 7,
    topic: "integers",
    difficulty: "easy",
    question: "Solve: -5 + 8 = ?",
    choices: ["-3", "3", "-13", "13"],
    correctAnswer: "3",
    hint: "You are at -5 and move 8 steps to the right.",
    explanation: "-5 + 8 = 3."
  },
  {
    id: "g7-int-02",
    grade: 7,
    topic: "integers",
    difficulty: "easy",
    question: "Multiply: (-3) * (-4) = ?",
    choices: ["-12", "12", "-7", "7"],
    correctAnswer: "12",
    hint: "A negative number times a negative number equals a positive number.",
    explanation: "-3 * -4 = 12."
  },
  {
    id: "g7-int-03",
    grade: 7,
    topic: "integers",
    difficulty: "medium",
    question: "Solve: -12 - (-4) = ?",
    choices: ["-16", "-8", "8", "16"],
    correctAnswer: "-8",
    hint: "Subtracting a negative number is the same as adding: -12 + 4.",
    explanation: "-12 - (-4) = -12 + 4 = -8."
  },
  {
    id: "g7-int-04",
    grade: 7,
    topic: "integers",
    difficulty: "medium",
    question: "Divide: -20 / 5 = ?",
    choices: ["-4", "4", "-5", "5"],
    correctAnswer: "-4",
    hint: "A negative number divided by a positive number equals a negative number.",
    explanation: "-20 / 5 = -4."
  },
  {
    id: "g7-int-05",
    grade: 7,
    topic: "integers",
    difficulty: "hard",
    question: "Solve: (-2) * 3 * (-5) = ?",
    choices: ["-30", "30", "-10", "10"],
    correctAnswer: "30",
    hint: "First multiply (-2) * 3 = -6. Then multiply (-6) * (-5).",
    explanation: "-2 * 3 = -6, and -6 * -5 = 30."
  },
  {
    id: "g7-int-06",
    grade: 7,
    topic: "integers",
    difficulty: "hard",
    question: "Evaluate: -15 + 4 * (-2) = ?",
    choices: ["-23", "23", "-38", "38"],
    correctAnswer: "-23",
    hint: "Remember Order of Operations: multiply 4 * (-2) first, then add to -15.",
    explanation: "4 * -2 = -8. Then, -15 + (-8) = -23."
  },
  // percentages
  {
    id: "g7-pct-01",
    grade: 7,
    topic: "percentages",
    difficulty: "easy",
    question: "What is 20% of 50 coins?",
    choices: ["5 coins", "10 coins", "15 coins", "20 coins"],
    correctAnswer: "10 coins",
    hint: "Convert 20% to a fraction (1/5) or decimal (0.2) and multiply by 50.",
    explanation: "0.20 * 50 = 10 coins."
  },
  {
    id: "g7-pct-02",
    grade: 7,
    topic: "percentages",
    difficulty: "easy",
    question: "Convert 3/5 to a percentage.",
    choices: ["30%", "50%", "60%", "75%"],
    correctAnswer: "60%",
    hint: "Divide 3 by 5 to get a decimal, then multiply by 100.",
    explanation: "3 / 5 = 0.60, which equals 60%."
  },
  {
    id: "g7-pct-03",
    grade: 7,
    topic: "percentages",
    difficulty: "medium",
    question: "A sword originally costing 80 coins is on sale for 25% off. What is the discount in coins?",
    choices: ["10 coins", "15 coins", "20 coins", "25 coins"],
    correctAnswer: "20 coins",
    hint: "Find 25% (or 1/4) of 80.",
    explanation: "25% of 80 is 0.25 * 80 = 20 coins."
  },
  {
    id: "g7-pct-04",
    grade: 7,
    topic: "percentages",
    difficulty: "medium",
    question: "If a meal costs 40 coins and you leave a 15% tip, how many coins is the tip?",
    choices: ["4 coins", "5 coins", "6 coins", "8 coins"],
    correctAnswer: "6 coins",
    hint: "Calculate 15% of 40: 0.15 * 40.",
    explanation: "The tip is 0.15 * 40 = 6 coins."
  },
  {
    id: "g7-pct-05",
    grade: 7,
    topic: "percentages",
    difficulty: "hard",
    question: "A town's goblin population increased from 200 to 250. What was the percentage increase?",
    choices: ["20%", "25%", "30%", "50%"],
    correctAnswer: "25%",
    hint: "Find the increase (50) and divide by the original population (200), then multiply by 100.",
    explanation: "Increase = 50. 50 / 200 = 0.25, which is 25% increase."
  },
  {
    id: "g7-pct-06",
    grade: 7,
    topic: "percentages",
    difficulty: "hard",
    question: "A jacket costs 100 coins. A 7% sales tax is added. What is the final price?",
    choices: ["93 coins", "100 coins", "107 coins", "110 coins"],
    correctAnswer: "107 coins",
    hint: "Add 7% of 100 to the original price.",
    explanation: "Tax = 7 coins. Final price = 100 + 7 = 107 coins."
  },
  // probability
  {
    id: "g7-prob-01",
    grade: 7,
    topic: "probability",
    difficulty: "easy",
    question: "What is the probability of rolling a 4 on a standard six-sided die?",
    choices: ["1/2", "1/4", "1/6", "2/3"],
    correctAnswer: "1/6",
    hint: "There is exactly 1 four out of 6 possible outcomes.",
    explanation: "The probability is 1 out of 6, or 1/6."
  },
  {
    id: "g7-prob-02",
    grade: 7,
    topic: "probability",
    difficulty: "easy",
    question: "If you flip a fair coin, what is the probability of getting Heads?",
    choices: ["0", "0.25", "0.50", "1.0"],
    correctAnswer: "0.50",
    hint: "There are two equal outcomes: heads or tails.",
    explanation: "The probability is 1/2, which is decimal 0.50."
  },
  {
    id: "g7-prob-03",
    grade: 7,
    topic: "probability",
    difficulty: "medium",
    question: "A bag has 3 red runes and 7 blue runes. What is the probability of picking a red rune?",
    choices: ["3/7", "7/10", "3/10", "1/3"],
    correctAnswer: "3/10",
    hint: "Divide the number of red runes by the total number of runes (3 + 7 = 10).",
    explanation: "Probability = red / total = 3/10."
  },
  {
    id: "g7-prob-04",
    grade: 7,
    topic: "probability",
    difficulty: "medium",
    question: "What is the probability of rolling an even number on a standard six-sided die?",
    choices: ["1/6", "1/3", "1/2", "2/3"],
    correctAnswer: "1/2",
    hint: "Identify the even numbers on a die (2, 4, 6) and divide by 6.",
    explanation: "There are 3 even numbers (2, 4, 6) out of 6. 3/6 simplifies to 1/2."
  },
  {
    id: "g7-prob-05",
    grade: 7,
    topic: "probability",
    difficulty: "hard",
    question: "A spinner has 8 equal sections labeled 1 to 8. What is the probability of spinning a prime number?",
    choices: ["1/4", "3/8", "1/2", "5/8"],
    correctAnswer: "1/2",
    hint: "List prime numbers between 1 and 8: 2, 3, 5, 7. Count them and divide by 8.",
    explanation: "Primes are 2, 3, 5, 7 (4 numbers). 4/8 = 1/2."
  },
  {
    id: "g7-prob-06",
    grade: 7,
    topic: "probability",
    difficulty: "hard",
    question: "If the probability of rain is 0.35, what is the probability that it will NOT rain?",
    choices: ["0.35", "0.55", "0.65", "1.0"],
    correctAnswer: "0.65",
    hint: "Subtract the probability of rain from 1.",
    explanation: "1 - 0.35 = 0.65."
  },

  // ==================== GRADE 8 ====================
  // equations
  {
    id: "g8-eq-01",
    grade: 8,
    topic: "equations",
    difficulty: "easy",
    question: "Solve for x: 2x + 4 = 10.",
    choices: ["2", "3", "4", "5"],
    correctAnswer: "3",
    hint: "Subtract 4 from both sides to get 2x = 6, then divide by 2.",
    explanation: "2x = 6 => x = 3."
  },
  {
    id: "g8-eq-02",
    grade: 8,
    topic: "equations",
    difficulty: "easy",
    question: "What is the slope (m) of the linear equation y = 3x - 5?",
    choices: ["3", "-5", "5", "-3"],
    correctAnswer: "3",
    hint: "Look at the coefficient of x in the form y = mx + b.",
    explanation: "The slope m is the coefficient of x, which is 3."
  },
  {
    id: "g8-eq-03",
    grade: 8,
    topic: "equations",
    difficulty: "medium",
    question: "Solve for y: 3y - 7 = 5y + 3.",
    choices: ["-5", "5", "-2", "2"],
    correctAnswer: "-5",
    hint: "Group the y terms on one side: subtract 3y from both sides, then subtract 3.",
    explanation: "-7 = 2y + 3 => -10 = 2y => y = -5."
  },
  {
    id: "g8-eq-04",
    grade: 8,
    topic: "equations",
    difficulty: "medium",
    question: "Find the x-intercept of the equation: 2x + 3y = 12.",
    choices: ["(4, 0)", "(6, 0)", "(0, 4)", "(0, 6)"],
    correctAnswer: "(6, 0)",
    hint: "To find the x-intercept, set y = 0 and solve for x.",
    explanation: "2x + 3(0) = 12 => 2x = 12 => x = 6. So the intercept is (6, 0)."
  },
  {
    id: "g8-eq-05",
    grade: 8,
    topic: "equations",
    difficulty: "hard",
    question: "Solve for x: 3(x - 2) = 2(x + 4).",
    choices: ["6", "10", "14", "18"],
    correctAnswer: "14",
    hint: "Distribute first: 3x - 6 = 2x + 8. Then subtract 2x and add 6.",
    explanation: "3x - 6 = 2x + 8 => x - 6 = 8 => x = 14."
  },
  {
    id: "g8-eq-06",
    grade: 8,
    topic: "equations",
    difficulty: "hard",
    question: "Solve the system: y = 2x and x + y = 9. What is x?",
    choices: ["2", "3", "4", "6"],
    correctAnswer: "3",
    hint: "Substitute y = 2x into the second equation: x + 2x = 9.",
    explanation: "3x = 9 => x = 3."
  },
  // exponents
  {
    id: "g8-exp-01",
    grade: 8,
    topic: "exponents",
    difficulty: "easy",
    question: "Solve: 2^3 = ?",
    choices: ["6", "8", "16", "32"],
    correctAnswer: "8",
    hint: "Multiply 2 by itself three times: 2 * 2 * 2.",
    explanation: "2^3 = 2 * 2 * 2 = 8."
  },
  {
    id: "g8-exp-02",
    grade: 8,
    topic: "exponents",
    difficulty: "easy",
    question: "Simplify: x^3 * x^4 = ?",
    choices: ["x^7", "x^12", "x^1", "2x^7"],
    correctAnswer: "x^7",
    hint: "When multiplying like bases, add the exponents together.",
    explanation: "x^3 * x^4 = x^(3 + 4) = x^7."
  },
  {
    id: "g8-exp-03",
    grade: 8,
    topic: "exponents",
    difficulty: "medium",
    question: "Solve: 5^(-2) = ?",
    choices: ["-10", "-25", "1/25", "1/10"],
    correctAnswer: "1/25",
    hint: "A negative exponent means taking the reciprocal: 1 / (5^2).",
    explanation: "5^(-2) = 1 / 5^2 = 1/25."
  },
  {
    id: "g8-exp-04",
    grade: 8,
    topic: "exponents",
    difficulty: "medium",
    question: "Write 45,000 in scientific notation.",
    choices: ["4.5 * 10^3", "4.5 * 10^4", "45 * 10^3", "0.45 * 10^5"],
    correctAnswer: "4.5 * 10^4",
    hint: "Move the decimal point to get a number between 1 and 10, then count the places.",
    explanation: "45,000 = 4.5 * 10,000 = 4.5 * 10^4."
  },
  {
    id: "g8-exp-05",
    grade: 8,
    topic: "exponents",
    difficulty: "hard",
    question: "Simplify: (2x^3)^3 = ?",
    choices: ["6x^9", "8x^9", "8x^6", "6x^6"],
    correctAnswer: "8x^9",
    hint: "Cube both the 2 and the x^3: 2^3 and (x^3)^3.",
    explanation: "2^3 = 8. (x^3)^3 = x^(3*3) = x^9. Thus, 8x^9."
  },
  {
    id: "g8-exp-06",
    grade: 8,
    topic: "exponents",
    difficulty: "hard",
    question: "Solve: sqrt(64) + cubert(27) = ?",
    choices: ["10", "11", "12", "15"],
    correctAnswer: "11",
    hint: "Find square root of 64 (8) and cube root of 27 (3), then add.",
    explanation: "sqrt(64) = 8. cubert(27) = 3. 8 + 3 = 11."
  },
  // geometry
  {
    id: "g8-geom-01",
    grade: 8,
    topic: "geometry",
    difficulty: "easy",
    question: "In a right triangle, if the legs are a = 3 and b = 4, what is the hypotenuse c?",
    choices: ["5", "6", "7", "25"],
    correctAnswer: "5",
    hint: "Use the Pythagorean theorem: a^2 + b^2 = c^2. 3^2 + 4^2 = c^2.",
    explanation: "9 + 16 = 25. The square root of 25 is 5."
  },
  {
    id: "g8-geom-02",
    grade: 8,
    topic: "geometry",
    difficulty: "easy",
    question: "Find the volume of a cylinder with radius r = 2 and height h = 5. (Use V = pi * r^2 * h)",
    choices: ["10 pi", "20 pi", "25 pi", "50 pi"],
    correctAnswer: "20 pi",
    hint: "Square the radius (2^2 = 4), multiply by height (5), and append pi.",
    explanation: "V = pi * 4 * 5 = 20 pi."
  },
  {
    id: "g8-geom-03",
    grade: 8,
    topic: "geometry",
    difficulty: "medium",
    question: "A right triangle has a leg a = 6 and hypotenuse c = 10. Find the other leg b.",
    choices: ["5", "7", "8", "9"],
    correctAnswer: "8",
    hint: "Use Pythagorean theorem: 6^2 + b^2 = 10^2. Solve for b^2.",
    explanation: "36 + b^2 = 100 => b^2 = 64 => b = 8."
  },
  {
    id: "g8-geom-04",
    grade: 8,
    topic: "geometry",
    difficulty: "medium",
    question: "What is the distance between coordinates (1, 2) and (4, 6) in the matrix grid?",
    choices: ["4", "5", "6", "7"],
    correctAnswer: "5",
    hint: "Use distance formula: sqrt((x2 - x1)^2 + (y2 - y1)^2).",
    explanation: "sqrt((4 - 1)^2 + (6 - 2)^2) = sqrt(3^2 + 4^2) = sqrt(25) = 5."
  },
  {
    id: "g8-geom-05",
    grade: 8,
    topic: "geometry",
    difficulty: "hard",
    question: "Find the volume of a cone with radius r = 3 and height h = 4. (Use V = 1/3 * pi * r^2 * h)",
    choices: ["6 pi", "12 pi", "18 pi", "36 pi"],
    correctAnswer: "12 pi",
    hint: "Square radius (9), multiply by h (4) to get 36, then take 1/3.",
    explanation: "V = 1/3 * pi * 9 * 4 = 12 pi."
  },
  {
    id: "g8-geom-06",
    grade: 8,
    topic: "geometry",
    difficulty: "hard",
    question: "A line segment has endpoints (2, 3) and (8, 9). What is its midpoint?",
    choices: ["(5, 6)", "(6, 6)", "(5, 7)", "(4, 6)"],
    correctAnswer: "5, 6",
    hint: "Find average of x coordinates (2+8)/2 and y coordinates (3+9)/2.",
    explanation: "Midpoint is ((2+8)/2, (3+9)/2) = (5, 6)."
  },

  // ==================== GRADE 9 ====================
  // quadratics
  {
    id: "g9-quad-01",
    grade: 9,
    topic: "quadratics",
    difficulty: "easy",
    question: "Factor the quadratic expression: x^2 - 9.",
    choices: ["(x - 3)(x - 3)", "(x - 9)(x + 1)", "(x - 3)(x + 3)", "(x + 9)(x - 1)"],
    correctAnswer: "(x - 3)(x + 3)",
    hint: "This is a difference of squares: a^2 - b^2 = (a - b)(a + b).",
    explanation: "x^2 - 3^2 factorizes into (x - 3)(x + 3)."
  },
  {
    id: "g9-quad-02",
    grade: 9,
    topic: "quadratics",
    difficulty: "easy",
    question: "Find the vertex form axis of symmetry for y = (x - 4)^2 + 3.",
    choices: ["x = -4", "x = 4", "x = 3", "x = -3"],
    correctAnswer: "x = 4",
    hint: "The vertex is at (h, k) in y = (x - h)^2 + k. Axis is x = h.",
    explanation: "The vertex is (4, 3), so axis is x = 4."
  },
  {
    id: "g9-quad-03",
    grade: 9,
    topic: "quadratics",
    difficulty: "medium",
    question: "Solve the quadratic equation: x^2 - 5x + 6 = 0.",
    choices: ["x = 2, 3", "x = -2, -3", "x = 1, 6", "x = -1, -6"],
    correctAnswer: "x = 2, 3",
    hint: "Factor the quadratic into (x - 2)(x - 3) = 0 and solve.",
    explanation: "Factors are (x - 2)(x - 3) = 0, giving roots x = 2 and x = 3."
  },
  {
    id: "g9-quad-04",
    grade: 9,
    topic: "quadratics",
    difficulty: "medium",
    question: "What is the discriminant of the quadratic equation x^2 + 4x + 4 = 0?",
    choices: ["-8", "0", "8", "16"],
    correctAnswer: "0",
    hint: "Use the formula discriminant = b^2 - 4ac.",
    explanation: "a = 1, b = 4, c = 4. b^2 - 4ac = 16 - 16 = 0."
  },
  {
    id: "g9-quad-05",
    grade: 9,
    topic: "quadratics",
    difficulty: "hard",
    question: "Solve using the quadratic formula: x^2 - 3x - 4 = 0.",
    choices: ["x = -1, 4", "x = 1, -4", "x = 2, -2", "x = 0, 3"],
    correctAnswer: "x = -1, 4",
    hint: "Factor into (x - 4)(x + 1) = 0 or use x = [-b +- sqrt(b^2 - 4ac)] / 2a.",
    explanation: "(x - 4)(x + 1) = 0 leads to roots x = 4 and x = -1."
  },
  {
    id: "g9-quad-06",
    grade: 9,
    topic: "quadratics",
    difficulty: "hard",
    question: "Find the coordinates of the vertex of the parabola: y = x^2 - 4x + 5.",
    choices: ["(2, 1)", "(2, 5)", "(-2, 17)", "(0, 5)"],
    correctAnswer: "(2, 1)",
    hint: "Find x = -b / (2a) first, then plug that value back into the equation for y.",
    explanation: "x = -(-4) / 2 = 2. y = 2^2 - 4(2) + 5 = 1. So the vertex is (2, 1)."
  },
  // systems
  {
    id: "g9-sys-01",
    grade: 9,
    topic: "systems",
    difficulty: "easy",
    question: "Solve: y = x + 2 and y = 4. What is x?",
    choices: ["2", "4", "6", "8"],
    correctAnswer: "2",
    hint: "Substitute y = 4 into the first equation: 4 = x + 2.",
    explanation: "4 = x + 2 => x = 2."
  },
  {
    id: "g9-sys-02",
    grade: 9,
    topic: "systems",
    difficulty: "easy",
    question: "How many solutions does a system of parallel lines have?",
    choices: ["0", "1", "Infinite", "2"],
    correctAnswer: "0",
    hint: "Parallel lines never intersect.",
    explanation: "Since they never cross, there are exactly 0 solutions."
  },
  {
    id: "g9-sys-03",
    grade: 9,
    topic: "systems",
    difficulty: "medium",
    question: "Solve the system: x + y = 10 and x - y = 4. What is x?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: "7",
    hint: "Add the two equations together: (x+y) + (x-y) = 10 + 4.",
    explanation: "2x = 14 => x = 7."
  },
  {
    id: "g9-sys-04",
    grade: 9,
    topic: "systems",
    difficulty: "medium",
    question: "In the system 2x + y = 7 and y = x + 1, solve for x.",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "2",
    hint: "Substitute y = x + 1 into the first equation: 2x + (x + 1) = 7.",
    explanation: "3x + 1 = 7 => 3x = 6 => x = 2."
  },
  {
    id: "g9-sys-05",
    grade: 9,
    topic: "systems",
    difficulty: "hard",
    question: "Solve: 2x - 3y = 8 and 3x + 3y = 17. What is x?",
    choices: ["4", "5", "6", "7"],
    correctAnswer: "5",
    hint: "Add the two equations directly to eliminate the y terms.",
    explanation: "(2x - 3y) + (3x + 3y) = 8 + 17 => 5x = 25 => x = 5."
  },
  {
    id: "g9-sys-06",
    grade: 9,
    topic: "systems",
    difficulty: "hard",
    question: "Solve the system: 3x + 2y = 12 and x - y = 4. What is y?",
    choices: ["0", "2", "-2", "4"],
    correctAnswer: "0",
    hint: "Multiply second equation by 2: 2x - 2y = 8. Add to first: 5x = 20 => x = 4. Then find y.",
    explanation: "x = 4. Substituting in x - y = 4 gives 4 - y = 4 => y = 0."
  },
  // inequalities
  {
    id: "g9-ineq-01",
    grade: 9,
    topic: "inequalities",
    difficulty: "easy",
    question: "Solve for x: x - 3 < 5.",
    choices: ["x < 2", "x < 8", "x > 8", "x > 2"],
    correctAnswer: "x < 8",
    hint: "Add 3 to both sides of the inequality sign.",
    explanation: "x < 5 + 3 => x < 8."
  },
  {
    id: "g9-ineq-02",
    grade: 9,
    topic: "inequalities",
    difficulty: "easy",
    question: "Solve for x: 3x >= 12.",
    choices: ["x >= 4", "x <= 4", "x >= 36", "x <= 36"],
    correctAnswer: "x >= 4",
    hint: "Divide both sides by 3.",
    explanation: "x >= 12 / 3 => x >= 4."
  },
  {
    id: "g9-ineq-03",
    grade: 9,
    topic: "inequalities",
    difficulty: "medium",
    question: "Solve for x: -2x < 10.",
    choices: ["x < -5", "x > -5", "x < 5", "x > 5"],
    correctAnswer: "x > -5",
    hint: "When dividing or multiplying by a negative number, flip the inequality sign!",
    explanation: "Dividing by -2: x > 10 / -2 => x > -5."
  },
  {
    id: "g9-ineq-04",
    grade: 9,
    topic: "inequalities",
    difficulty: "medium",
    question: "Solve the inequality: 2x + 5 <= 11.",
    choices: ["x <= 3", "x <= 8", "x >= 3", "x >= 8"],
    correctAnswer: "x <= 3",
    hint: "Subtract 5 from both sides, then divide by 2.",
    explanation: "2x <= 6 => x <= 3."
  },
  {
    id: "g9-ineq-05",
    grade: 9,
    topic: "inequalities",
    difficulty: "hard",
    question: "Solve the compound inequality: -3 < 2x - 1 <= 5.",
    choices: ["-1 < x <= 3", "-2 < x <= 3", "-1 <= x < 3", "-2 < x < 2"],
    correctAnswer: "-1 < x <= 3",
    hint: "Add 1 to all three parts: -2 < 2x <= 6. Then divide all parts by 2.",
    explanation: "-2 < 2x <= 6 => -1 < x <= 3."
  },
  {
    id: "g9-ineq-06",
    grade: 9,
    topic: "inequalities",
    difficulty: "hard",
    question: "Solve: |x - 4| <= 3.",
    choices: ["1 <= x <= 7", "-1 <= x <= 7", "x <= 7", "1 < x < 7"],
    correctAnswer: "1 <= x <= 7",
    hint: "Rewrite as a compound inequality: -3 <= x - 4 <= 3. Add 4 to all parts.",
    explanation: "-3 + 4 <= x <= 3 + 4 => 1 <= x <= 7."
  },

  // ==================== GRADE 10 ====================
  // trigonometry
  {
    id: "g10-trig-01",
    grade: 10,
    topic: "trigonometry",
    difficulty: "easy",
    question: "In a right triangle, what is sin(theta) equal to?",
    choices: ["Opposite / Hypotenuse", "Adjacent / Hypotenuse", "Opposite / Adjacent", "Adjacent / Opposite"],
    correctAnswer: "Opposite / Hypotenuse",
    hint: "Remember SOH CAH TOA!",
    explanation: "SOH stands for Sin = Opposite / Hypotenuse."
  },
  {
    id: "g10-trig-02",
    grade: 10,
    topic: "trigonometry",
    difficulty: "easy",
    question: "In a right triangle, what is adjacent / hypotenuse equal to?",
    choices: ["Sine", "Cosine", "Tangent", "Secant"],
    correctAnswer: "Cosine",
    hint: "Remember SOH CAH TOA!",
    explanation: "CAH stands for Cos = Adjacent / Hypotenuse."
  },
  {
    id: "g10-trig-03",
    grade: 10,
    topic: "trigonometry",
    difficulty: "medium",
    question: "Evaluate: sin(30 degrees) = ?",
    choices: ["0.5", "0.866", "1", "0"],
    correctAnswer: "0.5",
    hint: "In a 30-60-90 triangle, the opposite leg is exactly half the hypotenuse.",
    explanation: "sin(30) is exactly 1/2, or 0.5."
  },
  {
    id: "g10-trig-04",
    grade: 10,
    topic: "trigonometry",
    difficulty: "medium",
    question: "In a right triangle, if adjacent leg = 3 and opposite leg = 3, what is tan(theta)?",
    choices: ["1", "0.5", "1.5", "3"],
    correctAnswer: "1",
    hint: "TOA stands for Tan = Opposite / Adjacent. Divide 3 by 3.",
    explanation: "tan(theta) = 3 / 3 = 1."
  },
  {
    id: "g10-trig-05",
    grade: 10,
    topic: "trigonometry",
    difficulty: "hard",
    question: "Solve for the identity: sin^2(x) + cos^2(x) = ?",
    choices: ["0", "1", "2", "tan^2(x)"],
    correctAnswer: "1",
    hint: "This is the fundamental Pythagorean trigonometric identity.",
    explanation: "For any angle x, sin^2(x) + cos^2(x) is always identically equal to 1."
  },
  {
    id: "g10-trig-06",
    grade: 10,
    topic: "trigonometry",
    difficulty: "hard",
    question: "If cos(theta) = 4/5, what is sin(theta) for an acute angle?",
    choices: ["3/5", "1/5", "4/5", "3/4"],
    correctAnswer: "3/5",
    hint: "This fits a standard 3-4-5 right triangle. opposite leg must be 3.",
    explanation: "sin^2(theta) = 1 - cos^2(theta) = 1 - 16/25 = 9/25 => sin(theta) = 3/5."
  },
  // circles
  {
    id: "g10-circ-01",
    grade: 10,
    topic: "circles",
    difficulty: "easy",
    question: "What is the formula for the circumference of a circle?",
    choices: ["pi * r^2", "2 * pi * r", "pi * d^2", "2 * pi * d"],
    correctAnswer: "2 * pi * r",
    hint: "It scales linearly with radius and includes 2 * pi.",
    explanation: "Circumference = 2 * pi * r."
  },
  {
    id: "g10-circ-02",
    grade: 10,
    topic: "circles",
    difficulty: "easy",
    question: "What is the area of a circle with radius r = 3? (Keep in terms of pi)",
    choices: ["3 pi", "6 pi", "9 pi", "12 pi"],
    correctAnswer: "9 pi",
    hint: "Use Area = pi * r^2. Square the 3.",
    explanation: "Area = pi * 3^2 = 9 pi."
  },
  {
    id: "g10-circ-03",
    grade: 10,
    topic: "circles",
    difficulty: "medium",
    question: "A circle is defined by (x - 2)^2 + (y + 3)^2 = 16. What is its radius?",
    choices: ["4", "8", "16", "2"],
    correctAnswer: "4",
    hint: "The standard form equation of a circle is (x - h)^2 + (y - k)^2 = r^2.",
    explanation: "r^2 = 16 => radius r = 4."
  },
  {
    id: "g10-circ-04",
    grade: 10,
    topic: "circles",
    difficulty: "medium",
    question: "Find the center of the circle: (x + 5)^2 + (y - 7)^2 = 25.",
    choices: ["(5, -7)", "(-5, 7)", "(-5, -7)", "(5, 7)"],
    correctAnswer: "(-5, 7)",
    hint: "Center coordinates are (h, k) in standard circle formula (x - h)^2 + (y - k)^2 = r^2.",
    explanation: "x - h = x + 5 => h = -5, and y - k = y - 7 => k = 7. Center is (-5, 7)."
  },
  {
    id: "g10-circ-05",
    grade: 10,
    topic: "circles",
    difficulty: "hard",
    question: "What is the measure of an inscribed angle that intercepts a semi-circle arc?",
    choices: ["45 degrees", "90 degrees", "180 degrees", "60 degrees"],
    correctAnswer: "90 degrees",
    hint: "Inscribed angle is half the intercepted arc (semi-circle is 180 degrees).",
    explanation: "180 / 2 = 90 degrees."
  },
  {
    id: "g10-circ-06",
    grade: 10,
    topic: "circles",
    difficulty: "hard",
    question: "Find the area of a sector with radius r = 6 and central angle = 60 degrees. (terms of pi)",
    choices: ["3 pi", "6 pi", "12 pi", "36 pi"],
    correctAnswer: "6 pi",
    hint: "Area = (angle / 360) * pi * r^2. 60 / 360 is 1/6.",
    explanation: "Area = 1/6 * pi * 36 = 6 pi."
  },
  // coordinate geometry
  {
    id: "g10-geom-01",
    grade: 10,
    topic: "geometry",
    difficulty: "easy",
    question: "Find the slope of a line passing through (1, 3) and (3, 7).",
    choices: ["2", "4", "1/2", "3"],
    correctAnswer: "2",
    hint: "Slope formula is m = (y2 - y1) / (x2 - x1).",
    explanation: "m = (7 - 3) / (3 - 1) = 4 / 2 = 2."
  },
  {
    id: "g10-geom-02",
    grade: 10,
    topic: "geometry",
    difficulty: "easy",
    question: "What is the slope of any line perpendicular to a line with slope m = 4?",
    choices: ["-4", "1/4", "-1/4", "4"],
    correctAnswer: "-1/4",
    hint: "Perpendicular slopes are negative reciprocals of each other: -1 / m.",
    explanation: "The negative reciprocal of 4 is -1/4."
  },
  {
    id: "g10-geom-03",
    grade: 10,
    topic: "geometry",
    difficulty: "medium",
    question: "What is the slope of any line parallel to the line y = -3x + 8?",
    choices: ["3", "-3", "8", "-1/3"],
    correctAnswer: "-3",
    hint: "Parallel lines always have the exact same slope.",
    explanation: "Since the original slope is -3, parallel lines must have slope -3."
  },
  {
    id: "g10-geom-04",
    grade: 10,
    topic: "geometry",
    difficulty: "medium",
    question: "Find the distance from origin (0,0) to point (-6, 8).",
    choices: ["6", "8", "10", "14"],
    correctAnswer: "10",
    hint: "Use distance formula: sqrt((-6)^2 + 8^2).",
    explanation: "sqrt(36 + 64) = sqrt(100) = 10."
  },
  {
    id: "g10-geom-05",
    grade: 10,
    topic: "geometry",
    difficulty: "hard",
    question: "Find the equation of a line with slope 2 passing through (1, 5).",
    choices: ["y = 2x + 3", "y = 2x + 5", "y = 2x + 4", "y = 2x - 3"],
    correctAnswer: "y = 2x + 3",
    hint: "Use point-slope form: y - y1 = m(x - x1). y - 5 = 2(x - 1).",
    explanation: "y - 5 = 2x - 2 => y = 2x + 3."
  },
  {
    id: "g10-geom-06",
    grade: 10,
    topic: "geometry",
    difficulty: "hard",
    question: "Find y if the distance between (2, 3) and (5, y) is 5, and y > 3.",
    choices: ["6", "7", "8", "9"],
    correctAnswer: "7",
    hint: "Set up distance equation: (5 - 2)^2 + (y - 3)^2 = 25. Solve for y.",
    explanation: "9 + (y - 3)^2 = 25 => (y - 3)^2 = 16 => y - 3 = 4 => y = 7."
  },

  // ==================== GRADE 11 ====================
  // complex numbers
  {
    id: "g11-complex-01",
    grade: 11,
    topic: "complex",
    difficulty: "easy",
    question: "What is i^2 defined as?",
    choices: ["1", "-1", "sqrt(-1)", "0"],
    correctAnswer: "-1",
    hint: "i is the imaginary unit, which represents the square root of -1.",
    explanation: "i^2 is exactly -1."
  },
  {
    id: "g11-complex-02",
    grade: 11,
    topic: "complex",
    difficulty: "easy",
    question: "Solve: (3 + 2i) + (4 - 5i) = ?",
    choices: ["7 - 3i", "7 + 3i", "12 - 10i", "7 - 7i"],
    correctAnswer: "7 - 3i",
    hint: "Add the real parts together (3 + 4) and imaginary parts together (2i - 5i).",
    explanation: "(3 + 4) + (2 - 5)i = 7 - 3i."
  },
  {
    id: "g11-complex-03",
    grade: 11,
    topic: "complex",
    difficulty: "medium",
    question: "Simplify: i^3 = ?",
    choices: ["1", "-1", "i", "-i"],
    correctAnswer: "-i",
    hint: "Rewrite as i^2 * i.",
    explanation: "i^3 = i^2 * i = -1 * i = -i."
  },
  {
    id: "g11-complex-04",
    grade: 11,
    topic: "complex",
    difficulty: "medium",
    question: "Multiply: (1 + i)(1 - i) = ?",
    choices: ["0", "2", "2i", "-2i"],
    correctAnswer: "2",
    hint: "Expand as a difference of squares: 1^2 - i^2.",
    explanation: "1 - i^2 = 1 - (-1) = 2."
  },
  {
    id: "g11-complex-05",
    grade: 11,
    topic: "complex",
    difficulty: "hard",
    question: "What is the absolute value (magnitude) of the complex number 3 + 4i?",
    choices: ["5", "7", "25", "sqrt(7)"],
    correctAnswer: "5",
    hint: "Use absolute value formula: |a + bi| = sqrt(a^2 + b^2).",
    explanation: "sqrt(3^2 + 4^2) = sqrt(25) = 5."
  },
  {
    id: "g11-complex-06",
    grade: 11,
    topic: "complex",
    difficulty: "hard",
    question: "Simplify: i^100 = ?",
    choices: ["1", "-1", "i", "-i"],
    correctAnswer: "1",
    hint: "Powers of i repeat in a cycle of 4: i^1=i, i^2=-1, i^3=-i, i^4=1. Since 100 is divisible by 4...",
    explanation: "i^100 = (i^4)^25 = 1^25 = 1."
  },
  // logarithms
  {
    id: "g11-log-01",
    grade: 11,
    topic: "logarithms",
    difficulty: "easy",
    question: "Evaluate: log_2(8) = ?",
    choices: ["3", "4", "8", "16"],
    correctAnswer: "3",
    hint: "Ask yourself: 2 to what power equals 8?",
    explanation: "2^3 = 8, so log_2(8) = 3."
  },
  {
    id: "g11-log-02",
    grade: 11,
    topic: "logarithms",
    difficulty: "easy",
    question: "What is log_10(100)?",
    choices: ["1", "2", "10", "100"],
    correctAnswer: "2",
    hint: "10 to what power equals 100?",
    explanation: "10^2 = 100, so log_10(100) = 2."
  },
  {
    id: "g11-log-03",
    grade: 11,
    topic: "logarithms",
    difficulty: "medium",
    question: "Expand: log(x * y) = ?",
    choices: ["log(x) * log(y)", "log(x) + log(y)", "log(x) - log(y)", "y * log(x)"],
    correctAnswer: "log(x) + log(y)",
    hint: "The log of a product is the sum of the logs.",
    explanation: "Product rule: log(xy) = log(x) + log(y)."
  },
  {
    id: "g11-log-04",
    grade: 11,
    topic: "logarithms",
    difficulty: "medium",
    question: "Solve for x: log_3(x) = 4.",
    choices: ["12", "64", "81", "243"],
    correctAnswer: "81",
    hint: "Convert the logarithm equation to exponential form: x = 3^4.",
    explanation: "x = 3^4 = 81."
  },
  {
    id: "g11-log-05",
    grade: 11,
    topic: "logarithms",
    difficulty: "hard",
    question: "Solve: log_5(x) + log_5(2) = log_5(10). What is x?",
    choices: ["3", "5", "8", "20"],
    correctAnswer: "5",
    hint: "Combine the LHS: log_5(2x) = log_5(10). Set 2x = 10.",
    explanation: "2x = 10 => x = 5."
  },
  {
    id: "g11-log-06",
    grade: 11,
    topic: "logarithms",
    difficulty: "hard",
    question: "Evaluate: ln(e^5) = ?",
    choices: ["1", "5", "e", "ln(5)"],
    correctAnswer: "5",
    hint: "The natural log ln is the base-e logarithm. ln(e^x) = x.",
    explanation: "ln(e^5) = 5."
  },
  // sequences
  {
    id: "g11-seq-01",
    grade: 11,
    topic: "sequences",
    difficulty: "easy",
    question: "Find the 5th term in the arithmetic sequence: 2, 5, 8, 11, ...",
    choices: ["12", "13", "14", "15"],
    correctAnswer: "14",
    hint: "Add the common difference of 3 to the 4th term.",
    explanation: "The terms are: 2, 5, 8, 11, and 11 + 3 = 14."
  },
  {
    id: "g11-seq-02",
    grade: 11,
    topic: "sequences",
    difficulty: "easy",
    question: "Find the next term in the geometric sequence: 3, 6, 12, 24, ...",
    choices: ["30", "36", "48", "60"],
    correctAnswer: "48",
    hint: "Each term is multiplied by a common ratio of 2. Multiply 24 by 2.",
    explanation: "24 * 2 = 48."
  },
  {
    id: "g11-seq-03",
    grade: 11,
    topic: "sequences",
    difficulty: "medium",
    question: "What is the common difference (d) of the arithmetic sequence: 10, 7, 4, 1, ...?",
    choices: ["3", "-3", "1/3", "-1/3"],
    correctAnswer: "-3",
    hint: "Subtract the first term from the second term: 7 - 10.",
    explanation: "7 - 10 = -3."
  },
  {
    id: "g11-seq-04",
    grade: 11,
    topic: "sequences",
    difficulty: "medium",
    question: "Find the sum of the first 4 terms of the series: 1 + 2 + 3 + 4 + ...",
    choices: ["6", "10", "15", "20"],
    correctAnswer: "10",
    hint: "Add the numbers 1, 2, 3, and 4 together.",
    explanation: "1 + 2 + 3 + 4 = 10."
  },
  {
    id: "g11-seq-05",
    grade: 11,
    topic: "sequences",
    difficulty: "hard",
    question: "What is the sum of the infinite geometric series: 1 + 1/2 + 1/4 + 1/8 + ...?",
    choices: ["1.5", "2", "3", "Infinite"],
    correctAnswer: "2",
    hint: "Use the formula S = a / (1 - r), where a = 1 and r = 1/2.",
    explanation: "S = 1 / (1 - 1/2) = 1 / (1/2) = 2."
  },
  {
    id: "g11-seq-06",
    grade: 11,
    topic: "sequences",
    difficulty: "hard",
    question: "Find the 10th term of the arithmetic sequence: a_n = 5 + 3(n - 1).",
    choices: ["30", "32", "35", "38"],
    correctAnswer: "32",
    hint: "Substitute n = 10 into the formula.",
    explanation: "a_10 = 5 + 3(9) = 5 + 27 = 32."
  },

  // ==================== GRADE 12 ====================
  // limits
  {
    id: "g12-lim-01",
    grade: 12,
    topic: "limits",
    difficulty: "easy",
    question: "Evaluate: lim (x -> 3) of (2x + 4) = ?",
    choices: ["6", "8", "10", "12"],
    correctAnswer: "10",
    hint: "Directly substitute x = 3 into the expression.",
    explanation: "2(3) + 4 = 10."
  },
  {
    id: "g12-lim-02",
    grade: 12,
    topic: "limits",
    difficulty: "easy",
    question: "Evaluate: lim (x -> 5) of (x^2) = ?",
    choices: ["10", "20", "25", "50"],
    correctAnswer: "25",
    hint: "Substitute x = 5.",
    explanation: "5^2 = 25."
  },
  {
    id: "g12-lim-03",
    grade: 12,
    topic: "limits",
    difficulty: "medium",
    question: "Evaluate: lim (x -> infinity) of (1 / x) = ?",
    choices: ["0", "1", "infinity", "undefined"],
    correctAnswer: "0",
    hint: "Think about what happens to 1 divided by an extremely large number.",
    explanation: "As x grows without bound, 1/x approaches 0."
  },
  {
    id: "g12-lim-04",
    grade: 12,
    topic: "limits",
    difficulty: "medium",
    question: "Evaluate: lim (x -> 2) of (x^2 - 4) / (x - 2) = ?",
    choices: ["0", "2", "4", "undefined"],
    correctAnswer: "4",
    hint: "Factor numerator first: (x - 2)(x + 2). Simplify by cancelling (x - 2).",
    explanation: "lim (x -> 2) of (x + 2) = 2 + 2 = 4."
  },
  {
    id: "g12-lim-05",
    grade: 12,
    topic: "limits",
    difficulty: "hard",
    question: "Evaluate: lim (x -> infinity) of (3x^2 + 5) / (2x^2 - x) = ?",
    choices: ["0", "1.5", "3", "infinity"],
    correctAnswer: "1.5",
    hint: "Compare leading coefficients of the highest degree terms (3x^2 / 2x^2).",
    explanation: "The degree is 2 on both top and bottom. Limit is 3/2 = 1.5."
  },
  {
    id: "g12-lim-06",
    grade: 12,
    topic: "limits",
    difficulty: "hard",
    question: "Evaluate: lim (x -> 0) of sin(x)/x = ?",
    choices: ["0", "1", "undefined", "pi"],
    correctAnswer: "1",
    hint: "This is a fundamental limit theorem in calculus.",
    explanation: "The limit as x approaches 0 of sin(x)/x is exactly 1."
  },
  // derivatives
  {
    id: "g12-deriv-01",
    grade: 12,
    topic: "derivatives",
    difficulty: "easy",
    question: "What is the derivative of x^2? (Find d/dx x^2)",
    choices: ["x", "2x", "2", "x^3"],
    correctAnswer: "2x",
    hint: "Use the Power Rule: d/dx (x^n) = n * x^(n - 1).",
    explanation: "d/dx (x^2) = 2x^1 = 2x."
  },
  {
    id: "g12-deriv-02",
    grade: 12,
    topic: "derivatives",
    difficulty: "easy",
    question: "What is the derivative of any constant (like 5)?",
    choices: ["0", "5", "1", "x"],
    correctAnswer: "0",
    hint: "A constant function has a slope of zero everywhere.",
    explanation: "The derivative of a constant is 0."
  },
  {
    id: "g12-deriv-03",
    grade: 12,
    topic: "derivatives",
    difficulty: "medium",
    question: "Find the derivative of f(x) = 3x^4 - 5x.",
    choices: ["12x^3 - 5", "12x^3", "7x^3 - 5", "3x^3 - 5"],
    correctAnswer: "12x^3 - 5",
    hint: "Apply the power rule to each term independently: 3 * 4x^3 and -5 * 1.",
    explanation: "f'(x) = 12x^3 - 5."
  },
  {
    id: "g12-deriv-04",
    grade: 12,
    topic: "derivatives",
    difficulty: "medium",
    question: "What is the derivative of sin(x)?",
    choices: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
    correctAnswer: "cos(x)",
    hint: "The rate of change of sine is represented by cosine.",
    explanation: "d/dx sin(x) = cos(x)."
  },
  {
    id: "g12-deriv-05",
    grade: 12,
    topic: "derivatives",
    difficulty: "hard",
    question: "Find the derivative of f(x) = ln(x).",
    choices: ["1/x", "e^x", "1", "x"],
    correctAnswer: "1/x",
    hint: "The slope of natural logarithm at x is the reciprocal of x.",
    explanation: "d/dx ln(x) = 1/x."
  },
  {
    id: "g12-deriv-06",
    grade: 12,
    topic: "derivatives",
    difficulty: "hard",
    question: "Find the derivative of f(x) = e^(3x).",
    choices: ["e^(3x)", "3 * e^(3x)", "3x * e^(3x-1)", "3"],
    correctAnswer: "3 * e^(3x)",
    hint: "Use the Chain Rule: derivative of e^u is e^u * du/dx.",
    explanation: "d/dx e^(3x) = e^(3x) * d/dx(3x) = 3 * e^(3x)."
  },
  // integrals
  {
    id: "g12-int-01",
    grade: 12,
    topic: "integrals",
    difficulty: "easy",
    question: "Find the indefinite integral: integral of 2x dx = ?",
    choices: ["x^2 + C", "2x^2 + C", "x + C", "2 + C"],
    correctAnswer: "x^2 + C",
    hint: "Think: what function has a derivative of 2x? Remember to add the constant + C.",
    explanation: "d/dx(x^2 + C) = 2x. Thus, the integral is x^2 + C."
  },
  {
    id: "g12-int-02",
    grade: 12,
    topic: "integrals",
    difficulty: "easy",
    question: "Find the integral: integral of 1 dx = ?",
    choices: ["x + C", "1 + C", "0 + C", "x^2 + C"],
    correctAnswer: "x + C",
    hint: "What function has a derivative of 1?",
    explanation: "d/dx(x + C) = 1. Thus, the integral is x + C."
  },
  {
    id: "g12-int-03",
    grade: 12,
    topic: "integrals",
    difficulty: "medium",
    question: "Evaluate the definite integral from x=0 to x=2 of: integral (3x^2) dx.",
    choices: ["4", "8", "12", "16"],
    correctAnswer: "8",
    hint: "First find antiderivative: x^3. Then evaluate at bounds: 2^3 - 0^3.",
    explanation: "[x^3] from 0 to 2 = 2^3 - 0 = 8."
  },
  {
    id: "g12-int-04",
    grade: 12,
    topic: "integrals",
    difficulty: "medium",
    question: "Find the indefinite integral: integral of cos(x) dx = ?",
    choices: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
    correctAnswer: "sin(x) + C",
    hint: "What function has a derivative of cos(x)?",
    explanation: "d/dx(sin(x)) = cos(x), so the integral is sin(x) + C."
  },
  {
    id: "g12-int-05",
    grade: 12,
    topic: "integrals",
    difficulty: "hard",
    question: "Find the indefinite integral: integral of 1/x dx (for x > 0).",
    choices: ["ln(x) + C", "e^x + C", "-1/x^2 + C", "x + C"],
    correctAnswer: "ln(x) + C",
    hint: "What function has a derivative of 1/x?",
    explanation: "d/dx(ln(x)) = 1/x, so the integral is ln(x) + C."
  },
  {
    id: "g12-int-06",
    grade: 12,
    topic: "integrals",
    difficulty: "hard",
    question: "Evaluate definite integral from x=1 to x=3 of: integral (2) dx.",
    choices: ["2", "4", "6", "8"],
    correctAnswer: "4",
    hint: "Find antiderivative (2x) and evaluate: 2(3) - 2(1).",
    explanation: "[2x] from 1 to 3 = 6 - 2 = 4."
  },

  // ==================== EXPANDED COMMON CORE SYLLABUS QUESTIONS ====================
  // KINDERGARTEN - operations (Simple addition & subtraction within 10)
  {
    id: "gk-op-01",
    grade: 0,
    topic: "operations",
    difficulty: "easy",
    question: "Count the apples: 🍎 🍎 🍎. Add 🍎 🍎 more. How many apples in total?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "5",
    hint: "Count all the apples together: 1, 2, 3, 4, 5!",
    explanation: "Three apples plus two more apples equals exactly five apples!"
  },
  {
    id: "gk-op-02",
    grade: 0,
    topic: "operations",
    difficulty: "easy",
    question: "There are 5 birds 🐦 🐦 🐦 🐦 🐦 on a tree. 1 bird flies away. How many birds are left?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4",
    hint: "Take one bird away from five and count what is left!",
    explanation: "Five birds minus one bird equals four birds remaining!"
  },
  {
    id: "gk-op-03",
    grade: 0,
    topic: "operations",
    difficulty: "easy",
    question: "Double challenge: 4 dots plus 4 dots equals how many?",
    choices: ["6", "7", "8", "9"],
    correctAnswer: "8",
    hint: "Think: 4 + 4 = ?",
    explanation: "Adding four and four gives a total sum of eight!"
  },
  {
    id: "gk-op-04",
    grade: 0,
    topic: "operations",
    difficulty: "easy",
    question: "You have 6 sweet candies 🍬. You eat 3 of them. How many candies do you have left?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: "3",
    hint: "Count backwards from 6 by three steps: 5, 4, and...?",
    explanation: "Six minus three leaves exactly three sweet candies!"
  },
  {
    id: "gk-op-05",
    grade: 0,
    topic: "operations",
    difficulty: "easy",
    question: "7 green frogs 🐸 sit in the pond. 2 more jump in. How many frogs in the pond now?",
    choices: ["7", "8", "9", "10"],
    correctAnswer: "9",
    hint: "Count up two numbers from seven: 8, 9!",
    explanation: "Seven plus two equals nine frogs splashing in the pond!"
  },

  // KINDERGARTEN - base-ten (Intro to numbers 11-19)
  {
    id: "gk-bt-01",
    grade: 0,
    topic: "base-ten",
    difficulty: "easy",
    question: "What number is made of 10 and 3 more?",
    choices: ["10", "13", "14", "15"],
    correctAnswer: "13",
    hint: "Count up from 10: 11, 12, 13!",
    explanation: "10 and 3 ones make thirteen (13)!"
  },
  {
    id: "gk-bt-02",
    grade: 0,
    topic: "base-ten",
    difficulty: "easy",
    question: "What number is made of 10 and 7 more?",
    choices: ["15", "16", "17", "18"],
    correctAnswer: "17",
    hint: "Think: 10 + 7 = ?",
    explanation: "10 and 7 ones make seventeen (17)!"
  },
  {
    id: "gk-bt-03",
    grade: 0,
    topic: "base-ten",
    difficulty: "easy",
    question: "How many tens and how many ones make the number 15?",
    choices: ["1 ten and 5 ones", "1 ten and 2 ones", "2 tens and 5 ones", "0 tens and 5 ones"],
    correctAnswer: "1 ten and 5 ones",
    hint: "The first digit '1' represents one ten, and the '5' represents ones.",
    explanation: "The number 15 is composed of exactly 1 group of ten and 5 leftover ones."
  },
  {
    id: "gk-bt-04",
    grade: 0,
    topic: "base-ten",
    difficulty: "easy",
    question: "Solve this math spell: 10 + 2 = ?",
    choices: ["10", "11", "12", "13"],
    correctAnswer: "12",
    hint: "Count two steps up from ten!",
    explanation: "10 + 2 = 12, representing one ten and two ones."
  },
  {
    id: "gk-bt-05",
    grade: 0,
    topic: "base-ten",
    difficulty: "easy",
    question: "What number is represented by 1 ten and 9 ones?",
    choices: ["10", "18", "19", "29"],
    correctAnswer: "19",
    hint: "It comes right before 20!",
    explanation: "One ten and nine ones make nineteen (19)."
  },

  // GRADE 1 - measurement (Time & basic units)
  {
    id: "g1-me-01",
    grade: 1,
    topic: "measurement",
    difficulty: "easy",
    question: "If the short hour hand points to 3 and the long minute hand points to 12, what time is it?",
    choices: ["3:00", "12:30", "3:30", "12:00"],
    correctAnswer: "3:00",
    hint: "When the long hand points to 12, it is exactly on the hour!",
    explanation: "The short hand shows the hour (3) and the long hand shows 00 minutes. It's 3:00!"
  },
  {
    id: "g1-me-02",
    grade: 1,
    topic: "measurement",
    difficulty: "easy",
    question: "The short hand is between 4 and 5. The long hand points to 6. What time is it?",
    choices: ["4:00", "4:30", "5:30", "6:00"],
    correctAnswer: "4:30",
    hint: "When the long minute hand points to 6, it means half-past the hour!",
    explanation: "Since the hour hand has passed 4 but not yet reached 5, and the minute hand is at 6, it is 4:30."
  },
  {
    id: "g1-me-03",
    grade: 1,
    topic: "measurement",
    difficulty: "easy",
    question: "A pencil measures 7 paperclips long. A crayon measures 4 paperclips long. Which is longer?",
    choices: ["Pencil", "Crayon", "They are the same", "Cannot tell"],
    correctAnswer: "Pencil",
    hint: "Which number is bigger: 7 or 4?",
    explanation: "7 paperclips is more than 4, so the pencil is longer than the crayon."
  },
  {
    id: "g1-me-04",
    grade: 1,
    topic: "measurement",
    difficulty: "easy",
    question: "The short hour hand points to 9 and the long minute hand points to 12. What time is it?",
    choices: ["9:00", "9:30", "12:00", "12:30"],
    correctAnswer: "9:00",
    hint: "On the hour of 9!",
    explanation: "Short hand at 9 and long hand at 12 represents exactly 9:00."
  },
  {
    id: "g1-me-05",
    grade: 1,
    topic: "measurement",
    difficulty: "easy",
    question: "How many half-hours are needed to make one full hour?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "2",
    hint: "Think: half + half = 1 whole!",
    explanation: "Two halves make a whole, so two 30-minute half-hours make one full 60-minute hour."
  },

  // GRADE 1 - geometry (Partitions & shapes)
  {
    id: "g1-ge-01",
    grade: 1,
    topic: "geometry",
    difficulty: "easy",
    question: "If you cut a round pizza perfectly in the middle into 2 equal parts, each part is a... ?",
    choices: ["Half", "Quarter", "Third", "Whole"],
    correctAnswer: "Half",
    hint: "Think of sharing a giant cookie equally with 1 friend.",
    explanation: "Splitting a shape into 2 equal parts creates two halves."
  },
  {
    id: "g1-ge-02",
    grade: 1,
    topic: "geometry",
    difficulty: "easy",
    question: "If you cut a square paper into 4 equal shares, what is each share called?",
    choices: ["A half", "A quarter", "A third", "A fifth"],
    correctAnswer: "A quarter",
    hint: "Dividing by four is partitioning into quarters or fourths.",
    explanation: "Four equal parts of a whole are called quarters or fourths."
  },
  {
    id: "g1-ge-03",
    grade: 1,
    topic: "geometry",
    difficulty: "easy",
    question: "How many equal halves do we need to make one whole pie?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "2",
    hint: "1/2 + 1/2 = ?",
    explanation: "Two equal halves combined make exactly one whole."
  },
  {
    id: "g1-ge-04",
    grade: 1,
    topic: "geometry",
    difficulty: "easy",
    question: "Which of these shapes has exactly 3 corners and 3 straight sides?",
    choices: ["Circle 🔴", "Square 🟦", "Triangle 🔺", "Rectangle 📁"],
    correctAnswer: "Triangle 🔺",
    hint: "Like a wizard's hat or a mountain peak!",
    explanation: "A triangle is uniquely defined by three sides and three corners."
  },
  {
    id: "g1-ge-05",
    grade: 1,
    topic: "geometry",
    difficulty: "easy",
    question: "If you share a circular pancake equally among 4 friends, how many parts do you partition it into?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: "4",
    hint: "Each friend gets one equal piece.",
    explanation: "To share among 4 friends equally, you partition the pancake into 4 equal quarters."
  },

  // GRADE 2 - base-ten (Hundreds & large place values)
  {
    id: "g2-bt-01",
    grade: 2,
    topic: "base-ten",
    difficulty: "easy",
    question: "What is the place value of the digit 5 in the number 543?",
    choices: ["Ones", "Tens", "Hundreds", "Thousands"],
    correctAnswer: "Hundreds",
    hint: "It represents five groups of one hundred!",
    explanation: "In 543, 3 is in ones, 4 is in tens, and 5 is in hundreds."
  },
  {
    id: "g2-bt-02",
    grade: 2,
    topic: "base-ten",
    difficulty: "easy",
    question: "Which number is made of 3 hundreds, 7 tens, and 2 ones?",
    choices: ["372", "273", "732", "327"],
    correctAnswer: "372",
    hint: "Place them in order: Hundreds, Tens, Ones.",
    explanation: "300 + 70 + 2 equals 372."
  },
  {
    id: "g2-bt-03",
    grade: 2,
    topic: "base-ten",
    difficulty: "easy",
    question: "Solve this place value spell: 400 + 50 + 8 = ?",
    choices: ["45", "408", "458", "4508"],
    correctAnswer: "458",
    hint: "Combine the values of each position.",
    explanation: "Four hundreds, five tens, and eight ones make 458."
  },
  {
    id: "g2-bt-04",
    grade: 2,
    topic: "base-ten",
    difficulty: "easy",
    question: "What position is the digit 9 in the number 192?",
    choices: ["Ones", "Tens", "Hundreds", "Thousands"],
    correctAnswer: "Tens",
    hint: "It represents ninety!",
    explanation: "In 192, 9 is in the tens place, representing 90."
  },
  {
    id: "g2-bt-05",
    grade: 2,
    topic: "base-ten",
    difficulty: "easy",
    question: "Which of these numbers is the largest?",
    choices: ["702", "699", "700", "689"],
    correctAnswer: "702",
    hint: "Look at the hundreds digit first, then the tens, then the ones.",
    explanation: "702 has 7 hundreds and 2 ones, which is greater than 700 or any 6-hundred number."
  },

  // GRADE 2 - geometry (Pentagons & thirds partitions)
  {
    id: "g2-ge-01",
    grade: 2,
    topic: "geometry",
    difficulty: "easy",
    question: "How many straight sides does a pentagon shape have?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "5",
    hint: "Think of a drawing of a simple house or a starfish!",
    explanation: "A pentagon is a geometric polygon with exactly five sides."
  },
  {
    id: "g2-ge-02",
    grade: 2,
    topic: "geometry",
    difficulty: "easy",
    question: "How many corners does a hexagon shape have?",
    choices: ["4", "5", "6", "8"],
    correctAnswer: "6",
    hint: "Think of a honeycomb cell in a bee hive!",
    explanation: "A hexagon always has six sides and six corners."
  },
  {
    id: "g2-ge-03",
    grade: 2,
    topic: "geometry",
    difficulty: "easy",
    question: "If a rectangular cake is cut into 3 equal slices, each slice is a... ?",
    choices: ["Half", "Third", "Quarter", "Fifth"],
    correctAnswer: "Third",
    hint: "Three equal parts make... ?",
    explanation: "Splitting a shape into three equal parts partitions it into thirds."
  },
  {
    id: "g2-ge-04",
    grade: 2,
    topic: "geometry",
    difficulty: "easy",
    question: "Which of these shapes has exactly 5 corners?",
    choices: ["Triangle", "Square", "Pentagon", "Hexagon"],
    correctAnswer: "Pentagon",
    hint: "'Penta' means five in geometry!",
    explanation: "A pentagon has five straight edges and five corners."
  },
  {
    id: "g2-ge-05",
    grade: 2,
    topic: "geometry",
    difficulty: "easy",
    question: "How many equal quarters are needed to form a whole shape?",
    choices: ["2", "3", "4", "5"],
    correctAnswer: "4",
    hint: "Quarters are 1/4 of a whole.",
    explanation: "Four equal quarters make exactly one whole."
  },

  // GRADE 3 - base-ten (Rounding to 10 and 100)
  {
    id: "g3-bt-01",
    grade: 3,
    topic: "base-ten",
    difficulty: "easy",
    question: "Round the number 47 to the nearest 10.",
    choices: ["40", "45", "50", "60"],
    correctAnswer: "50",
    hint: "Since the ones digit (7) is 5 or more, round up!",
    explanation: "47 is closer to 50 than it is to 40 on a number line."
  },
  {
    id: "g3-bt-02",
    grade: 3,
    topic: "base-ten",
    difficulty: "easy",
    question: "Round the number 213 to the nearest 100.",
    choices: ["200", "210", "220", "300"],
    correctAnswer: "200",
    hint: "Look at the tens digit (1). Since it's less than 5, round down!",
    explanation: "213 is much closer to 200 than to 300, so it rounds down to 200."
  },
  {
    id: "g3-bt-03",
    grade: 3,
    topic: "base-ten",
    difficulty: "easy",
    question: "Round the number 85 to the nearest 10.",
    choices: ["80", "85", "90", "100"],
    correctAnswer: "90",
    hint: "If the ones digit is exactly 5, we always round UP!",
    explanation: "According to rounding rules, 85 rounds up to 90."
  },
  {
    id: "g3-bt-04",
    grade: 3,
    topic: "base-ten",
    difficulty: "medium",
    question: "Round 789 to the nearest 100.",
    choices: ["700", "780", "800", "900"],
    correctAnswer: "800",
    hint: "Tens digit is 8. Round up!",
    explanation: "789 is close to 800, so it rounds up to 800."
  },
  {
    id: "g3-bt-05",
    grade: 3,
    topic: "base-ten",
    difficulty: "easy",
    question: "Solve this mental sum: 230 + 170 = ?",
    choices: ["300", "390", "400", "500"],
    correctAnswer: "400",
    hint: "Add 30 and 70 first, then add the hundreds.",
    explanation: "230 + 170 = (200 + 100) + (30 + 70) = 300 + 100 = 400."
  },

  // GRADE 3 - measurement (Area & perimeter)
  {
    id: "g3-me-01",
    grade: 3,
    topic: "measurement",
    difficulty: "easy",
    question: "Find the perimeter of a rectangle with length 5 cm and width 3 cm.",
    choices: ["8 cm", "15 cm", "16 cm", "20 cm"],
    correctAnswer: "16 cm",
    hint: "Perimeter is the distance all the way around: L + W + L + W!",
    explanation: "Perimeter = 2 * (length + width) = 2 * (5 + 3) = 2 * 8 = 16 cm."
  },
  {
    id: "g3-me-02",
    grade: 3,
    topic: "measurement",
    difficulty: "easy",
    question: "What is the area of a garden patch that is 6 meters long and 4 meters wide?",
    choices: ["10 sq m", "20 sq m", "24 sq m", "28 sq m"],
    correctAnswer: "24 sq m",
    hint: "Area of a rectangle = Length * Width!",
    explanation: "Area = 6m * 4m = 24 square meters."
  },
  {
    id: "g3-me-03",
    grade: 3,
    topic: "measurement",
    difficulty: "easy",
    question: "If you start math reading at 2:15 PM and finish at 2:45 PM, how many minutes passed?",
    choices: ["20 minutes", "30 minutes", "40 minutes", "60 minutes"],
    correctAnswer: "30 minutes",
    hint: "Subtract the starting minutes from the ending minutes: 45 - 15 = ?",
    explanation: "45 minutes minus 15 minutes equals 30 minutes of elapsed time."
  },
  {
    id: "g3-me-04",
    grade: 3,
    topic: "measurement",
    difficulty: "easy",
    question: "Find the perimeter of a square sandbox where each side is 4 meters.",
    choices: ["8 m", "12 m", "16 m", "20 m"],
    correctAnswer: "16 m",
    hint: "A square has 4 equal sides. Add them up or multiply side * 4!",
    explanation: "Perimeter = 4 * side length = 4 * 4 = 16 meters."
  },
  {
    id: "g3-me-05",
    grade: 3,
    topic: "measurement",
    difficulty: "easy",
    question: "What is the area of a square tile with a side length of 5 cm?",
    choices: ["10 sq cm", "20 sq cm", "25 sq cm", "30 sq cm"],
    correctAnswer: "25 sq cm",
    hint: "Area of a square = side * side!",
    explanation: "Area = 5cm * 5cm = 25 square cm."
  },

  // GRADE 3 - geometry (Quadrilaterals & angles)
  {
    id: "g3-ge-01",
    grade: 3,
    topic: "geometry",
    difficulty: "easy",
    question: "Which of these is a quadrilateral with 4 equal sides and 4 square right angles?",
    choices: ["Triangle", "Rhombus", "Square", "Trapezoid"],
    correctAnswer: "Square",
    hint: "Think of a perfectly symmetrical four-sided box!",
    explanation: "A square has four equal sides and four right angles (90 degrees)."
  },
  {
    id: "g3-ge-02",
    grade: 3,
    topic: "geometry",
    difficulty: "easy",
    question: "A quadrilateral with opposite sides parallel and equal in length is called a... ?",
    choices: ["Pentagon", "Parallelogram", "Hexagon", "Triangle"],
    correctAnswer: "Parallelogram",
    hint: "Its name contains the word 'parallel'!",
    explanation: "A parallelogram has opposite sides parallel and equal."
  },
  {
    id: "g3-ge-03",
    grade: 3,
    topic: "geometry",
    difficulty: "easy",
    question: "How many straight sides does any quadrilateral shape have?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4",
    hint: "'Quad' means four!",
    explanation: "Quadrilaterals are polygons with exactly four sides."
  },
  {
    id: "g3-ge-04",
    grade: 3,
    topic: "geometry",
    difficulty: "easy",
    question: "An angle that looks like the perfect square corner of a book is called a... ?",
    choices: ["Acute angle", "Obtuse angle", "Right angle", "Straight angle"],
    correctAnswer: "Right angle",
    hint: "It measures exactly 90 degrees.",
    explanation: "A square corner represents a right angle of 90 degrees."
  },
  {
    id: "g3-ge-05",
    grade: 3,
    topic: "geometry",
    difficulty: "easy",
    question: "Which of these shapes is a quadrilateral but is NOT a parallelogram?",
    choices: ["Square", "Rectangle", "Trapezoid", "Rhombus"],
    correctAnswer: "Trapezoid",
    hint: "It has only ONE pair of parallel sides!",
    explanation: "A trapezoid has exactly one pair of parallel sides, unlike parallelograms which have two pairs."
  },

  // GRADE 4 - patterns (Primes, factors & patterns)
  {
    id: "g4-pa-01",
    grade: 4,
    topic: "patterns",
    difficulty: "easy",
    question: "Is the number 7 prime or composite?",
    choices: ["Prime", "Composite", "Neither", "Both"],
    correctAnswer: "Prime",
    hint: "Does 7 have any factors other than 1 and itself?",
    explanation: "7 can only be divided by 1 and 7, so it is a prime number."
  },
  {
    id: "g4-pa-02",
    grade: 4,
    topic: "patterns",
    difficulty: "medium",
    question: "Find the next number in this magic pattern: 2, 4, 8, 16, __?",
    choices: ["20", "24", "32", "64"],
    correctAnswer: "32",
    hint: "Each number is doubled to get the next one!",
    explanation: "16 * 2 = 32. The pattern is multiplying by 2."
  },
  {
    id: "g4-pa-03",
    grade: 4,
    topic: "patterns",
    difficulty: "easy",
    question: "Which of these numbers is a composite number (having more than two factors)?",
    choices: ["2", "5", "9", "11"],
    correctAnswer: "9",
    hint: "Think: 3 * 3 = 9!",
    explanation: "9 has factors 1, 3, and 9, making it composite. The others are prime."
  },
  {
    id: "g4-pa-04",
    grade: 4,
    topic: "patterns",
    difficulty: "medium",
    question: "What are all the factors of the number 6?",
    choices: ["1, 6", "2, 3", "1, 2, 3, 6", "1, 2, 4, 6"],
    correctAnswer: "1, 2, 3, 6",
    hint: "Find all whole numbers that multiply together to make 6.",
    explanation: "1 * 6 = 6 and 2 * 3 = 6. So the factors of 6 are 1, 2, 3, and 6."
  },
  {
    id: "g4-pa-05",
    grade: 4,
    topic: "patterns",
    difficulty: "easy",
    question: "Find the next number in this arithmetic pattern: 3, 6, 9, 12, __?",
    choices: ["13", "14", "15", "18"],
    correctAnswer: "15",
    hint: "We are skip-counting by three!",
    explanation: "12 + 3 = 15. The pattern adds 3 each time."
  },

  // GRADE 4 - measurement (Angles & protractors)
  {
    id: "g4-me-01",
    grade: 4,
    topic: "measurement",
    difficulty: "easy",
    question: "How many degrees are in a straight line angle?",
    choices: ["45 degrees", "90 degrees", "180 degrees", "360 degrees"],
    correctAnswer: "180 degrees",
    hint: "It represents half of a full circular turn.",
    explanation: "A straight angle forms a flat line and measures exactly 180 degrees."
  },
  {
    id: "g4-me-02",
    grade: 4,
    topic: "measurement",
    difficulty: "easy",
    question: "If an angle measures 45 degrees, what type of angle is it?",
    choices: ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"],
    correctAnswer: "Acute angle",
    hint: "An angle smaller than 90 degrees is 'a-cute' (sharp) angle!",
    explanation: "Since 45 degrees is less than 90 degrees, it is an acute angle."
  },
  {
    id: "g4-me-03",
    grade: 4,
    topic: "measurement",
    difficulty: "easy",
    question: "How many feet are in 3 yards? (1 yard = 3 feet)",
    choices: ["3 feet", "6 feet", "9 feet", "12 feet"],
    correctAnswer: "9 feet",
    hint: "Multiply 3 yards by 3 feet per yard!",
    explanation: "3 yards * 3 feet/yard = 9 feet."
  },
  {
    id: "g4-me-04",
    grade: 4,
    topic: "measurement",
    difficulty: "easy",
    question: "An angle that is larger than 90 degrees but smaller than 180 degrees is... ?",
    choices: ["Acute angle", "Right angle", "Obtuse angle", "Straight angle"],
    correctAnswer: "Obtuse angle",
    hint: "Obtuse means blunt or wide!",
    explanation: "Angles between 90 and 180 degrees are called obtuse."
  },
  {
    id: "g4-me-05",
    grade: 4,
    topic: "measurement",
    difficulty: "easy",
    question: "How many ounces are in 2 pounds? (1 pound = 16 ounces)",
    choices: ["8 ounces", "16 ounces", "32 ounces", "48 ounces"],
    correctAnswer: "32 ounces",
    hint: "Think: 16 * 2 = ?",
    explanation: "2 pounds * 16 ounces per pound equals 32 ounces."
  },

  // GRADE 4 - geometry (Symmetry & line intersections)
  {
    id: "g4-ge-01",
    grade: 4,
    topic: "geometry",
    difficulty: "easy",
    question: "How many lines of symmetry does a regular square possess?",
    choices: ["2", "4", "6", "Infinite"],
    correctAnswer: "4",
    hint: "You can fold it horizontally, vertically, and along both diagonals!",
    explanation: "A square has exactly 4 lines of symmetry: 1 vertical, 1 horizontal, and 2 diagonal."
  },
  {
    id: "g4-ge-02",
    grade: 4,
    topic: "geometry",
    difficulty: "easy",
    question: "Two lines that cross each other at a perfect 90-degree right angle are called... ?",
    choices: ["Parallel lines", "Perpendicular lines", "Skew lines", "Curved lines"],
    correctAnswer: "Perpendicular lines",
    hint: "They form 'T' junctions or '+' signs!",
    explanation: "Perpendicular lines intersect to form right angles (90 degrees)."
  },
  {
    id: "g4-ge-03",
    grade: 4,
    topic: "geometry",
    difficulty: "easy",
    question: "Lines that run side-by-side and never cross each other are... ?",
    choices: ["Parallel lines", "Perpendicular lines", "Intersecting lines", "Diagonal lines"],
    correctAnswer: "Parallel lines",
    hint: "Like train tracks that go on forever!",
    explanation: "Parallel lines lie in the same plane and never intersect, keeping a constant distance apart."
  },
  {
    id: "g4-ge-04",
    grade: 4,
    topic: "geometry",
    difficulty: "easy",
    question: "How many lines of symmetry does a perfect circle have?",
    choices: ["1", "4", "8", "Infinite"],
    correctAnswer: "Infinite",
    hint: "Any line through the center folds it in half perfectly!",
    explanation: "Since a circle is perfectly round, any line passing through the center is a line of symmetry, meaning there are infinitely many."
  },
  {
    id: "g4-ge-05",
    grade: 4,
    topic: "geometry",
    difficulty: "easy",
    question: "What is an angle called that measures exactly 90 degrees?",
    choices: ["Acute angle", "Obtuse angle", "Right angle", "Straight angle"],
    correctAnswer: "Right angle",
    hint: "It matches the corner of a sheet of paper.",
    explanation: "A 90-degree angle is exactly a right angle."
  },

  // GRADE 5 - algebra (Numerical expressions)
  {
    id: "g5-al-01",
    grade: 5,
    topic: "algebra",
    difficulty: "easy",
    question: "Evaluate this numerical expression: (3 + 5) * 2",
    choices: ["13", "16", "21", "30"],
    correctAnswer: "16",
    hint: "Always perform the addition inside the parentheses first!",
    explanation: "(3 + 5) * 2 = 8 * 2 = 16."
  },
  {
    id: "g5-al-02",
    grade: 5,
    topic: "algebra",
    difficulty: "medium",
    question: "Evaluate: 12 - 4 * 2",
    choices: ["16", "8", "4", "0"],
    correctAnswer: "4",
    hint: "Order of operations: multiply before subtracting!",
    explanation: "According to PEMDAS, multiply first: 4 * 2 = 8. Then subtract: 12 - 8 = 4."
  },
  {
    id: "g5-al-03",
    grade: 5,
    topic: "algebra",
    difficulty: "easy",
    question: "Evaluate: 20 / (2 + 3)",
    choices: ["13", "10", "4", "2"],
    correctAnswer: "4",
    hint: "Add inside parentheses first: 2 + 3 = 5. Then divide!",
    explanation: "20 / (2 + 3) = 20 / 5 = 4."
  },
  {
    id: "g5-al-04",
    grade: 5,
    topic: "algebra",
    difficulty: "medium",
    question: "Solve: (6 * 2) - (4 / 2)",
    choices: ["10", "8", "6", "12"],
    correctAnswer: "10",
    hint: "Solve both parentheses separately, then subtract.",
    explanation: "(6 * 2) = 12. (4 / 2) = 2. 12 - 2 = 10."
  },
  {
    id: "g5-al-05",
    grade: 5,
    topic: "algebra",
    difficulty: "medium",
    question: "Evaluate: 5 + 3 * 4",
    choices: ["32", "17", "12", "23"],
    correctAnswer: "17",
    hint: "Order of operations: Multiply first!",
    explanation: "Multiply first: 3 * 4 = 12. Then add: 5 + 12 = 17."
  },

  // GRADE 5 - measurement (Volume formulas)
  {
    id: "g5-me-01",
    grade: 5,
    topic: "measurement",
    difficulty: "easy",
    question: "Find the volume of a rectangular prism box that is 4 cm long, 3 cm wide, and 2 cm high.",
    choices: ["9 cubic cm", "14 cubic cm", "24 cubic cm", "36 cubic cm"],
    correctAnswer: "24 cubic cm",
    hint: "Volume formula: Length * Width * Height!",
    explanation: "Volume = L * W * H = 4 * 3 * 2 = 24 cubic cm."
  },
  {
    id: "g5-me-02",
    grade: 5,
    topic: "measurement",
    difficulty: "easy",
    question: "How many milliliters are in 3 liters? (1 liter = 1000 mL)",
    choices: ["300 mL", "3000 mL", "30 mL", "30000 mL"],
    correctAnswer: "3000 mL",
    hint: "Multiply liters by 1000!",
    explanation: "3 liters * 1000 mL/liter = 3000 mL."
  },
  {
    id: "g5-me-03",
    grade: 5,
    topic: "measurement",
    difficulty: "easy",
    question: "Find the volume of a cube with a side length of 3 inches.",
    choices: ["9 cubic inches", "18 cubic inches", "27 cubic inches", "36 cubic inches"],
    correctAnswer: "27 cubic inches",
    hint: "Volume of a cube = side * side * side!",
    explanation: "Volume = 3 * 3 * 3 = 27 cubic inches."
  },
  {
    id: "g5-me-04",
    grade: 5,
    topic: "measurement",
    difficulty: "easy",
    question: "How many meters are in 5 kilometers? (1 km = 1000 m)",
    choices: ["50 m", "500 m", "5000 m", "50000 m"],
    correctAnswer: "5000 m",
    hint: "Multiply km by 1000!",
    explanation: "5 km * 1000 meters/km = 5000 meters."
  },
  {
    id: "g5-me-05",
    grade: 5,
    topic: "measurement",
    difficulty: "easy",
    question: "What is the standard formula to find the volume of a rectangular solid?",
    choices: ["Volume = L + W + H", "Volume = L * W", "Volume = L * W * H", "Volume = 2 * (L + W)"],
    correctAnswer: "Volume = L * W * H",
    hint: "Multiply length, width, and height.",
    explanation: "Volume is the product of length, width, and height dimensions."
  },

  // GRADE 6 - number-system (Dividing fractions & coordinates)
  {
    id: "g6-ns-01",
    grade: 6,
    topic: "number-system",
    difficulty: "medium",
    question: "Divide: (1/2) / (1/4) = ?",
    choices: ["1/8", "2", "4", "1/2"],
    correctAnswer: "2",
    hint: "Multiply the first fraction by the reciprocal of the second: (1/2) * (4/1)!",
    explanation: "(1/2) / (1/4) = (1/2) * 4 = 2."
  },
  {
    id: "g6-ns-02",
    grade: 6,
    topic: "number-system",
    difficulty: "medium",
    question: "In which quadrant on the coordinate plane is the point (-3, 4) located?",
    choices: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
    correctAnswer: "Quadrant II",
    hint: "The x-coordinate is negative and the y-coordinate is positive (-, +).",
    explanation: "Quadrant II contains points where x is negative and y is positive."
  },
  {
    id: "g6-ns-03",
    grade: 6,
    topic: "number-system",
    difficulty: "medium",
    question: "Divide: (2/3) / (1/3) = ?",
    choices: ["2/9", "2", "6", "1/2"],
    correctAnswer: "2",
    hint: "Multiply (2/3) by (3/1)!",
    explanation: "(2/3) * 3 = 2."
  },
  {
    id: "g6-ns-04",
    grade: 6,
    topic: "number-system",
    difficulty: "easy",
    question: "In which quadrant are both coordinate values positive (+, +)?",
    choices: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
    correctAnswer: "Quadrant I",
    hint: "Top right quadrant of the grid!",
    explanation: "Quadrant I is where both x and y are positive."
  },
  {
    id: "g6-ns-05",
    grade: 6,
    topic: "number-system",
    difficulty: "medium",
    question: "In which quadrant is the point (2, -5) located?",
    choices: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
    correctAnswer: "Quadrant IV",
    hint: "x is positive, y is negative (+, -). Bottom right!",
    explanation: "Quadrant IV contains points with positive x and negative y coordinates."
  },

  // GRADE 6 - geometry (Triangle areas & nets)
  {
    id: "g6-ge-01",
    grade: 6,
    topic: "geometry",
    difficulty: "easy",
    question: "What is the area of a triangle with base 6 cm and height 4 cm?",
    choices: ["24 sq cm", "12 sq cm", "10 sq cm", "8 sq cm"],
    correctAnswer: "12 sq cm",
    hint: "Area of a triangle = (1/2) * base * height!",
    explanation: "Area = 0.5 * 6 * 4 = 12 square cm."
  },
  {
    id: "g6-ge-02",
    grade: 6,
    topic: "geometry",
    difficulty: "easy",
    question: "What is a flat 2D shape that can be folded to make a 3D solid called?",
    choices: ["Net", "Grid", "Map", "Frame"],
    correctAnswer: "Net",
    hint: "Like a flattened cardboard box!",
    explanation: "A geometric net is a 2D representation that folds into a 3D solid."
  },
  {
    id: "g6-ge-03",
    grade: 6,
    topic: "geometry",
    difficulty: "easy",
    question: "What is the area formula for any triangle?",
    choices: ["Area = Base * Height", "Area = 2 * Base * Height", "Area = (1/2) * Base * Height", "Area = Base + Height"],
    correctAnswer: "Area = (1/2) * Base * Height",
    hint: "Half of a rectangle's area!",
    explanation: "The area of a triangle is half the product of base and height."
  },
  {
    id: "g6-ge-04",
    grade: 6,
    topic: "geometry",
    difficulty: "easy",
    question: "Find the area of a triangle with base 10 m and height 5 m.",
    choices: ["50 sq m", "25 sq m", "15 sq m", "100 sq m"],
    correctAnswer: "25 sq m",
    hint: "Multiply base * height, then divide by 2.",
    explanation: "(10 * 5) / 2 = 25 square meters."
  },
  {
    id: "g6-ge-05",
    grade: 6,
    topic: "geometry",
    difficulty: "easy",
    question: "How many squares make up the net of a standard 3D cube?",
    choices: ["4", "5", "6", "8"],
    correctAnswer: "6",
    hint: "A cube has six faces!",
    explanation: "The net of a cube has exactly six squares."
  },

  // GRADE 7 - proportions (Rates & simplified ratios)
  {
    id: "g7-pr-01",
    grade: 7,
    topic: "proportions",
    difficulty: "easy",
    question: "If 3 apples cost $6 in total, what is the unit rate cost per apple?",
    choices: ["$1", "$2", "$3", "$4"],
    correctAnswer: "$2",
    hint: "Divide the total cost by the quantity of apples: $6 / 3 = ?",
    explanation: "Unit rate = Total Cost / Quantity = 6 / 3 = $2 per apple."
  },
  {
    id: "g7-pr-02",
    grade: 7,
    topic: "proportions",
    difficulty: "medium",
    question: "Calculate the simple interest on a principal of $100 at a 5% interest rate for 2 years. (Interest = P * R * T)",
    choices: ["$5", "$10", "$15", "$20"],
    correctAnswer: "$10",
    hint: "Interest = Principal * Rate * Time = 100 * 0.05 * 2 = ?",
    explanation: "Interest = $100 * 0.05 * 2 = $10."
  },
  {
    id: "g7-pr-03",
    grade: 7,
    topic: "proportions",
    difficulty: "easy",
    question: "A toy car costs $20, but is on sale for 20% off. What is the discount price?",
    choices: ["$18", "$16", "$15", "$12"],
    correctAnswer: "$16",
    hint: "Find 20% of $20, then subtract it from the original price.",
    explanation: "20% of 20 is $4. $20 - $4 = $16."
  },
  {
    id: "g7-pr-04",
    grade: 7,
    topic: "proportions",
    difficulty: "easy",
    question: "If a racing kart travels 120 miles in 2 hours, what is its average speed in miles per hour?",
    choices: ["50 mph", "60 mph", "70 mph", "80 mph"],
    correctAnswer: "60 mph",
    hint: "Speed = Distance / Time!",
    explanation: "120 miles / 2 hours = 60 mph."
  },
  {
    id: "g7-pr-05",
    grade: 7,
    topic: "proportions",
    difficulty: "easy",
    question: "Simplify the ratio: 8 boys to 12 girls.",
    choices: ["2:3", "3:4", "4:6", "1:2"],
    correctAnswer: "2:3",
    hint: "Divide both sides by their greatest common factor (4).",
    explanation: "8/4 = 2 and 12/4 = 3. The simplified ratio is 2:3."
  },

  // GRADE 7 - geometry (Circles & diameter scales)
  {
    id: "g7-ge-01",
    grade: 7,
    topic: "geometry",
    difficulty: "medium",
    question: "Find the circumference of a circle with a diameter of 10 cm (use pi = 3.14). (Circumference = pi * d)",
    choices: ["15.7 cm", "31.4 cm", "62.8 cm", "314 cm"],
    correctAnswer: "31.4 cm",
    hint: "Multiply 10 * 3.14!",
    explanation: "Circumference = pi * diameter = 3.14 * 10 = 31.4 cm."
  },
  {
    id: "g7-ge-02",
    grade: 7,
    topic: "geometry",
    difficulty: "easy",
    question: "If a map's scale is 1 inch = 5 miles, how far in real life is a distance of 3 inches on the map?",
    choices: ["5 miles", "10 miles", "15 miles", "20 miles"],
    correctAnswer: "15 miles",
    hint: "Multiply 3 inches by 5 miles per inch!",
    explanation: "3 * 5 = 15 miles."
  },
  {
    id: "g7-ge-03",
    grade: 7,
    topic: "geometry",
    difficulty: "hard",
    question: "Find the area of a circle with a radius of 3 cm (use pi = 3.14). (Area = pi * r^2)",
    choices: ["9.42 sq cm", "18.84 sq cm", "28.26 sq cm", "31.4 sq cm"],
    correctAnswer: "28.26 sq cm",
    hint: "r^2 is 3 * 3 = 9. Multiply 9 * 3.14!",
    explanation: "Area = pi * r^2 = 3.14 * 9 = 28.26 square cm."
  },
  {
    id: "g7-ge-04",
    grade: 7,
    topic: "geometry",
    difficulty: "easy",
    question: "What is the ratio of a circle's circumference to its diameter equal to?",
    choices: ["Radius", "Pi", "2 * Pi", "Area"],
    correctAnswer: "Pi",
    hint: "This constant is approximately 3.14159.",
    explanation: "By definition, Pi is the ratio of the circumference of a circle to its diameter."
  },
  {
    id: "g7-ge-05",
    grade: 7,
    topic: "geometry",
    difficulty: "easy",
    question: "If a scale drawing is 1:100, a line of 5 cm on paper represents what real-world distance?",
    choices: ["5 cm", "50 cm", "500 cm", "5000 cm"],
    correctAnswer: "500 cm",
    hint: "Multiply by 100!",
    explanation: "5 cm * 100 = 500 cm (which is 5 meters)."
  }
];

export const mathQuestions = new Proxy(STATIC_MATH_QUESTIONS, {
  get(target, prop) {
    let activeArray = target;
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('custom_math_questions');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            activeArray = parsed;
          }
        } catch (e) {}
      }
    }
    const val = activeArray[prop as any];
    if (typeof val === 'function') {
      return (val as any).bind(activeArray);
    }
    return val;
  }
}) as unknown as Question[];
