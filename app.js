let empleados = [
  {
    id: 1,
    nombre: 'Ana Gómez',
    departamento: 'Desarrollo',
    salario: 2500,
    activo: true,
  },
  {
    id: 2,
    nombre: 'Carlos Mendoza',
    departamento: 'Diseño',
    salario: 1800,
    activo: true,
  },
  {
    id: 3,
    nombre: 'Lucía Torres',
    departamento: 'Desarrollo',
    salario: 3100,
    activo: false,
  },
  {
    id: 4,
    nombre: 'Sergio Rivas',
    departamento: 'Marketing',
    salario: 1500,
    activo: true,
  },
  {
    id: 5,
    nombre: 'Marina Delgado',
    departamento: 'Diseño',
    salario: 2200,
    activo: false,
  },
]
/**
 * ==========================================
 * MAPA DE IDENTIFICADORES (IDs) DEL HTML
 * ==========================================
 * * --- BOTONES DE CONTROL ---
 * #btn-todos    : Botón "Mostrar Todos" (Ojo: tiene el evento inline onclick="btnTodo()")
 * #btn-activos  : Botón "Solo Activos"
 * #btn-aumentar : Botón "Dar Aumento (+10%)"
 * #btn-nomina   : Botón "Calcular Nómina Total"
 * * --- CONTENEDORES DE DATOS ---
 * #total-nomina    : Elemento <span> donde se muestra la cifra del gasto total.
 * #tabla-empleados : Elemento <tbody> donde se deben inyectar las filas (<tr>) con JS.
 * * ==========================================
 */

let tabla = document.querySelector('#tabla-empleados')
let btn_todos = document.querySelector('#btn-todos')
const btn_activos = document
  .querySelector('#btn-activos')
  .addEventListener('click', (e) => {
    PintarTabla(empleados.filter((item) => item.activo === true))
  })
function PintarTabla(lista) {
  tabla.innerHTML = ''

  lista.forEach((empleado) => {
    let tr = document.createElement('tr')
    let nombre = document.createElement('td')
    let departamento = document.createElement('td')
    let salario = document.createElement('td')
    let estado = document.createElement('td')

    nombre.textContent = empleado.nombre
    departamento.textContent = empleado.departamento
    salario.textContent = empleado.salario
    estado.textContent = empleado.activo ? 'activo' : 'inactivo'

    tr.append(nombre, departamento, salario, estado)
    tabla.append(tr)
  })
}

document.addEventListener('DOMContentLoaded', PintarTabla(empleados))

btn_todos.addEventListener('click', () => {
  tabla.innerHTML = ''
  PintarTabla(empleados)
})
