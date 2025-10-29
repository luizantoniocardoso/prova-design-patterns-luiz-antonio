class Component {
    showDetails() {
      throw new Error("Método showDetails() deve ser implementado.");
    }
  }
  
  class Task extends Component {
    constructor(name) {
      super();
      this.name = name;
    }
  
    showDetails(indent = 0) {
      console.log(`${" ".repeat(indent)}- Tarefa: ${this.name}`);
    }
  }
  
  class Project extends Component {
    constructor(name) {
      super();
      this.name = name;
      this.children = []; 
    }
  
    add(component) {
      this.children.push(component);
    }
  
    remove(component) {
      this.children = this.children.filter(c => c !== component);
    }
  
    showDetails(indent = 0) {
      console.log(`${" ".repeat(indent)}Projeto: ${this.name}`);
      this.children.forEach(child => child.showDetails(indent + 2));
    }
  }
  
  const t1 = new Task("Escrever documentação");
  const t2 = new Task("Fazer testes");
  const subProject = new Project("Preparar lançamento");
  subProject.add(new Task("Criar instalador"));
  subProject.add(new Task("Gerar changelog"));
  
  const mainProject = new Project("Lançamento v1.0");
  mainProject.add(t1);
  mainProject.add(t2);
  mainProject.add(subProject);
  
  mainProject.showDetails();
  