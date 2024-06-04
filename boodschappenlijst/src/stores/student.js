import { defineStore } from 'pinia'

export const useStudentStore = defineStore('student',  {
    state: () => ({
        students: [
            { id: 1, name: 'Alec', grade: 100 },
            { id: 2, name: 'Zico', grade: 92 },
            { id: 3, name: 'Mahir', grade: 0 },
            { id: 4, name: 'Reno', grade: 49 },
            { id: 5, name: 'Kamiel', grade: 69 },
        ],
        newStudent: {
            name: '',
            grade: null,
        }
    }),
    getters: {
        sortedStudents() {
            return [...this.students].sort((a, b) => b.grade - a.grade)
        },
        highestGrade() {
            return [...this.students].sort((a, b) => b.grade - a.grade)[0]
        },
        lowestGrade() {
            return [...this.students].sort((a, b) => a.grade - b.grade)[0]
        },
        higherThanNinety() {
            return [...this.students].filter((student) => student.grade >= 90)
        },
        nameStartsWithS() {
            return [...this.students].filter(student => student.name.toUpperCase().startsWith('S'))
        },
        rating() {
            return this.students.filter(student => student.grade % 3 === 0 ||
                student.name.toLowerCase().includes("hi"))
                .map(student => `${student.name.toUpperCase()} is een goede student. ${student.grade}/100`)
        },
        allStudentNames() {
            return this.students.map(student => student.name.toLowerCase()).join(', ')
        },
        sortedNamesContainingA() {
            return this.students.filter(student => student.name.toLowerCase().includes('a'))
                .sort((a, b) => b.grade - a.grade)
                .slice(0, 2).map(student => student.name).join(' en ')
        },
        sumOfGrades() {
            return this.students.reduce((total, student) => total + student.grade, 0)
        }
    },
    actions: {
        addNewStudent() {
            const newStudent = {
                id: this.students.length + 1,
                name: this.newStudent.name,
                grade: this.newStudent.grade
            };
            if(!this.newStudent.name.length > 0 || this.newStudent.grade === null) {
                alert("Enter the input fields!")
                return
            }
            this.students.push(newStudent)
            this.newStudent.name = '';
            this.newStudent.grade = null;
        }
    }
});
