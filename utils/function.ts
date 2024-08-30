export function calculateCompatibilityScore(
    name1: string, 
    name2: string, 
    updateFunction: (score: number) => void
): void {
    const countVowels = (str: string) => {
        return (str.match(/[aeiou]/gi) || []).length;
    };

    const lengthDifference = Math.abs(name1.length - name2.length);
    const totalLength = name1.length + name2.length;
    const vowelsInName1 = countVowels(name1);
    const vowelsInName2 = countVowels(name2);
    const totalVowels = vowelsInName1 + vowelsInName2;

    let score = 0;

    score += Math.max(0, 40 - lengthDifference * 2);
    score += Math.min(totalVowels * 5, 40);

    if (name1[0]?.toLowerCase() === name2[0]?.toLowerCase()) {
        score += 10;
    }
    if (name1[name1.length - 1]?.toLowerCase() === name2[name2.length - 1]?.toLowerCase()) {
        score += 10;
    }

    updateFunction(Math.min(100, Math.max(0, score)));
}
