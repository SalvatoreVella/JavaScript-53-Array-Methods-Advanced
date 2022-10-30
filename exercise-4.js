function uncompletedNotes(notes) {
  let filtered = [];
  notes.forEach(el => {
    filtered.push(el.todos.filter((val) => val.done === false));
    return filtered;
  });
  console.log(filtered);
}

/* function uncompletedNotes(notes) {
  notes.forEach(el => {
    console.log(el.todos.filter((val) => val.done === false));
  });
} */

/* function uncompletedNotes(notes) {
  notes.forEach(el => {
    let filtered = (el.todos.filter((val) => val.done === false));
    console.log(filtered);
  });
} */

/* Dopo un ora di imprecazioni ne ho trovate 3 di soluzioni XD */

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

uncompletedNotes(notes);
