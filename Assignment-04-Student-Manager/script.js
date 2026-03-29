// 1. Define the Data (Array of Student Objects)
const students = [
    { name: "Rahul", marks: [85, 90, 78, 92, 88] },
    { name: "Ananya", marks: [92, 88, 95, 98, 91] },
    { name: "Vikram", marks: [70, 65, 80, 72, 75] },
    { name: "Sneha", marks: [88, 82, 85, 90, 87] }
];

// 2. Function to calculate average of an array
function calculateAverage(marksArray) {
    const sum = marksArray.reduce((total, mark) => total + mark, 0);
    return (sum / marksArray.length).toFixed(2);
}

// 3. Process the data and display it
function displayGrades() {
    const outputDiv = document.getElementById('output');
    let htmlContent = "";
    let classTotalAverage = 0;

    students.forEach(student => {
        const avg = calculateAverage(student.marks);
        classTotalAverage += parseFloat(avg);
        
        htmlContent += `<p><strong>${student.name}:</strong> Average Mark = ${avg}%</p>`;
    });

    const finalClassAvg = (classTotalAverage / students.length).toFixed(2);
    
    htmlContent += `<div class="average-total">Class Overall Average: ${finalClassAvg}%</div>`;
    
    // Inject into HTML
    outputDiv.innerHTML = htmlContent;
    
    // Also log to console for the "Console Challenge" vibe
    console.table(students);
    console.log(`Class Average: ${finalClassAvg}%`);
}

// Run the function when the script loads
displayGrades();