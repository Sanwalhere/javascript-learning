//--------------------------------------------------|GetAge in Constructor|----------------------------------------------------

function Practice(classes, currentYear) {
  this.classes = classes;
  this.currentYear = currentYear;
  let teacher = [
    { name: "Faisal", subject: "Coding", dob: { d: 14, m: 8, y: 1980 } },
    { name: "Aysha", subject: "English", dob: { d: 17, m: 12, y: 1988 } },
    { name: "Taqi", subject: "Coding", dob: { d: 21, m: 5, y: 1971 } },
    { name: "Kashif", subject: "IQ", dob: { d: 31, m: 3, y: 1922 } },
    { name: "Burhan", subject: "Coding", dob: { d: 19, m: 9, y: 1999 } },
  ];
  this.getTeacherNameAge = function () {
    for (let key in teacher) {
      if (teacher[key].subject === "Coding") {
        console.log(teacher[key].name, currentYear - teacher[key].dob.y);
      }
    }
  };
}
let practice = new Practice(5, 2023);
practice.getTeacherNameAge();
