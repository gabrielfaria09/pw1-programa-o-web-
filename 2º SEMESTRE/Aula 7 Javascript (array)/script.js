const cursos = ['Desenvolvimento de Sistemas', 'Administração', 'Mecânica', 'Logística',
     'Eletrônica', 'Eletrotécnica']; //Array com cursos

const divCursos= document.getElementById('cursos'); //pega a div Cursos

cursos.forEach((curso) => { //Percorre cada item do Array
    const inputCurso = document.createElement('input'); //cria um input
    inputCurso.setAttribute('type', 'radio'); //define propriedades
    inputCurso.setAttribute('name', 'curso');
    const labelCurso = document.createElement('label'); //cria label
    labelCurso.textContent = curso; //o conteúdo da label é os cursos do Array

    const espaco = document.createElement('br'); //adiciona espaço

    divCursos.append(inputCurso); //integrando na div
    divCursos.append(labelCurso);
    divCursos.append(espaco);
});