function angryProfessor(k, a) {
    const count = a.reduce((number, arrivalTime) => {
        if(arrivalTime <= 0) number++;
        return number;
    }, 0)
    return count < k ? "YES" : "NO"
}
