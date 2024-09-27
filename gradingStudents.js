function gradingStudents(grades) {
   for(let i = 0; i < grades.length; i++) {
       if(grades[i] >= 38) {
        let nextFiveMultiple = Math.ceil(grades[i]/5) * 5;
        if(Math.abs(nextFiveMultiple - grades[i]) < 3){
            grades[i] = nextFiveMultiple;
        }
       }
   }
    return grades;
}
