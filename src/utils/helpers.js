export function currentExerciser({ exercisers, exerciserId }) {
  const [exerciser] = exercisers.filter(
    (exerciser) => exerciser.userid === exerciserId
  );
  console.log(exerciser);
  return exerciser;
}

////////////////////////
function generateDatesBetween(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dates.push(currentDate.toISOString().split("T")[0]);
    // trainingName: "Rest day",
    // trainingDate: currentDate.toISOString().split("T")[0],
    // id: Math.random(),
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}

export function combineTrainingAndDates(trainingData) {
  const allData = [];
  let previousEndDate = new Date();

  for (let i = 0; i < trainingData.length; i++) {
    const training = trainingData[i];
    const nextTraining = trainingData[i + 1];
    const startDate = training.trainingDate;
    let endDate;

    if (nextTraining) {
      endDate = nextTraining.trainingDate;
    } else {
      endDate = new Date(); // Današnji datum ako nema više treninga
    }

    const datesBetween = generateDatesBetween(startDate, endDate);
    allData.push(training);
    allData.push(...datesBetween);

    previousEndDate = endDate;
  }

  return allData;
}
