const categories = [
  {
    name: "Information Technology",
    id: "information-tech",
    modules: [
      {
        name: "UI/UX Designs for Apps",
        id: "C218",
        desc: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        speaker: {
          name: "Azhar Kamar",
          title: "Lecturer",
        },
      },
      {
        name: "Mobile App Development",
        id: "C346",
        desc: "In this module, students will learn the basics of creating Android Applications.",
        speaker: {
          name: "Derek Lee",
          title: "Lecturer",
        },
      },
      {
        name: "Portfolio Development",
        id: "C390",
        desc: "This module guides students on how to curate and maintain a professional creative portfolio. It is a four modular credit module that spans two semesters.",
        speaker: {
          name: "Kong Chee Chong",
          title: "Lecturer",
        },
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "financial-technology",
    modules: [
      {
        name: "Banking and Finance",
        id: "B293",
        desc: "This module equips students with the skills and knowledge required to understand the banking and finance industry.",
        speaker: {
          name: "Angela Tan",
          title: "Lecturer",
        },
      },
      {
        name: "Financial Technologies and Systems",
        id: "C372",
        desc: "This module introduces students to the technologies and systems used in the financial industry.",
        speaker: {
          name: "Magdalene Lim",
          title: "Senior Lecturer",
        },
      },
    ],
  },
  {
    name: "Common ICT Programme",
    id: "common-ict-programme",
    modules: [
      {
        name: " Programming Fundamentals I",
        id: "C110",
        desc: "This module introduces students to computational thinking for problem-solving in computer programming and the fundamental concepts and constructs applicable to most programming languages.",
        speaker: {
          name: "Leonard Gan",
          title: "Lecturer",
        },
      },
      {
        name: "Programming Fundamentals II",
        id: "C210",
        desc: "This module introduces students to data structures used for organising and representing data for the purpose of programming problem-solving. Specifically, students will be equipped with the skills and knowledge to solve problems using a key-value data structure, a multi-dimensional or tabular data structure, and a tree data structure. Students will also be introduced to the object-oriented approach to designing and writing programs beyond the procedural approach.",
        speaker: {
          name: "Jessica Sin",
          title: "Lecturer",
        },
      },
    ],
  },
];



export function getModule({ moduleId, catId }) {
  return categories
    .find(({ id }) => id === catId)
    .modules.find(({ id }) => id === moduleId);
}

export function getCategory(catId) {
  return categories.find(({ id }) => id === catId);
}

export function getCategories() {
  return categories.map(({ name, id }) => ({ name, id }));
}
