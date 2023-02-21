function countGrade(scores) {
    const result = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };

    for (const score of scores) {
        if (score === 100) {
            result.S++;
        } else if (score < 100 && score >= 90) {
            result.A++;
        } else if (score < 90 && score >= 80) {
            result.B++;
        } else if (score < 80 && score >= 60) {
            result.C++;
        } else if (score < 60 && score >= 0) {
            result.D++;
        } else if (score === -1) {
            result.X++;
        }
    }

    return result;
}
