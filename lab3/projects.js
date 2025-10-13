const projects = [
  { id: 1, name: "Project A", country: "USA", teamSize: 5, duration: 12, cost: 10000 },
  { id: 2, name: "Project B", country: "Germany", teamSize: 4, duration: 8, cost: 8000 },
  { id: 3, name: "Project C", country: "USA", teamSize: 3, duration: 6, cost: 5000 },
  { id: 4, name: "Project D", country: "Japan", teamSize: 6, duration: 10, cost: 12000 },
  { id: 5, name: "Project E", country: "Germany", teamSize: 5, duration: 7, cost: 9000 },
  { id: 6, name: "Project F", country: "UK", teamSize: 4, duration: 9, cost: 8500 },
  { id: 7, name: "Project G", country: "Japan", teamSize: 3, duration: 5, cost: 4000 },
  { id: 8, name: "Project H", country: "USA", teamSize: 6, duration: 11, cost: 11000 },
  { id: 9, name: "Project I", country: "UK", teamSize: 5, duration: 8, cost: 9500 },
  { id: 10, name: "Project J", country: "Germany", teamSize: 3, duration: 6, cost: 6000 }
];

function sortByCountry(projects) {
  return projects.sort((a, b) => a.country.localeCompare(b.country))
}

function averageCostByTeamSize(projects) {
  const teams = new Set(projects.map(p => p.teamSize))
  const team_price_dict = new Map()

  teams.forEach(team => {
    const team_projects = projects.filter(p => p.teamSize == team);
    const avg_cost = team_projects.reduce((acc, item) => acc + item.cost, 0) / team_projects.length;

    team_price_dict.set(team, avg_cost);  
  })

  return team_price_dict;
}

function printAverageCostByTeamSize(team_price_dict) {
  team_price_dict.forEach((avg, team) => {
    console.log(`Команда з ${team} осіб: середня вартість = ${avg}`);
  });
}

console.log("Сортування за країнами:", sortByCountry(projects));


const avg_cost = averageCostByTeamSize(projects);
printAverageCostByTeamSize(avg_cost);
console.log("---------------------------------");


function hasAllInfo(project) {
  const fields = ['id', 'name', 'country', 'teamSize', 'duration', 'cost'];

  return fields.every(field => project.hasOwnProperty(field) && project[field] != null);
}

function addProject(projects, newProject) {
  if (!hasAllInfo(newProject)) {
    projects.push(newProject);
  } else {
    projects.sort((a, b) => a.cost - b.cost);

    const index = projects.findIndex(p => p.cost > newProject.cost);
    if (index === -1) {
      projects.push(newProject);
    } else {
      projects.splice(index, 0, newProject);
    }
  }
}

const newProject = { id: 11, name: "Project K", country: "France", teamSize: 4, duration: 7, cost: 8700 };
addProject(projects, newProject);

console.log("Проєкти після додавання нового:", projects);

console.log("---------------------------------");

console.log("Поточні вартості проєктів:");
console.table(projects.map(p => {
  return { name: p.name, cost: p.cost };
}));

const continents = {
  "USA": "North America",
  "Germany": "Europe",
  "UK": "Europe",
  "Japan": "Asia",
  "France": "Europe"
};


function updateProjectCosts(projects) {
  return projects.map(p => {
    let newCost = p.cost;

    for (const other of projects) {
      if (other.id === p.id) continue;

      const sameContinent = continents[p.country] === continents[other.country];

      if (other.teamSize > p.teamSize && other.cost < p.cost) {
        if (sameContinent) newCost *= 1.4;
        else newCost *= 1.6;
      } else if (other.teamSize > p.teamSize && other.cost > p.cost && !sameContinent) {
        newCost *= 2;
      } else if (other.cost < p.cost && sameContinent) {
        newCost *= 0.8;
      }
    }

    return { name: p.name, cost: Math.round(newCost) };
  });
}

const updatedCosts = updateProjectCosts(projects);
console.log("Оновлені вартості проєктів:");
console.table(updatedCosts);
