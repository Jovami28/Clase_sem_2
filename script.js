const paises = [
  {
    numero: 1,
    nombre: "Brasil",
    bandera:
      "https://media.istockphoto.com/id/967321044/es/vector/vector-bandera-de-brasil-proporci%C3%B3n-7-10-bandera-nacional-brasile%C3%B1a.jpg?s=1024x1024&w=is&k=20&c=LIuG7UrXJCiaYoFWTprB1ud_ZsxXVqRM3OFyEqhIrT0=",
    puntos: 28,
    enlace: "https://www.fifa.com/brasil"
  },
  {
    numero: 2,
    nombre: "Alemania",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/220px-Flag_of_Germany.svg.png",
    puntos: 26,
    enlace: "https://www.fifa.com/alemania"
  },
  {
    numero: 3,
    nombre: "Francia",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/200px-Flag_of_France.svg.png",
    puntos: 24,
    enlace: "https://www.fifa.com/francia"
  },
  {
    numero: 4,
    nombre: "Argentina",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png",
    puntos: 23,
    enlace: "https://www.fifa.com/argentina"
  },
  {
    numero: 5,
    nombre: "Italia",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/War_Flag_of_Italy.svg/200px-War_Flag_of_Italy.svg.png",
    puntos: 22,
    enlace: "https://www.fifa.com/italia"
  },
  {
    numero: 6,
    nombre: "Portugal",
    bandera:
      "https://cdn-hjmjl.nitrocdn.com/eyaheQhZVYtmVuSMpSpDADteyvkFFSZI/assets/static/optimized/wp-content/uploads/2022/08/a8e4153338a3ac1aef19674491178479.istockphoto-1178995143-612x612-1.jpg",
    puntos: 21,
    enlace: "https://www.fifa.com/portugal"
  },
  {
    numero: 7,
    nombre: "España",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png",
    puntos: 20,
    enlace: "https://www.fifa.com/espana"
  },
  {
    numero: 8,
    nombre: "Inglaterra",
    bandera:
      "https://w7.pngwing.com/pngs/141/373/png-transparent-flag-of-england-flag-of-the-united-kingdom-flag-of-great-britain-world-flags-angle-flag-rectangle.png",
    puntos: 19,
    enlace: "https://www.fifa.com/inglaterra"
  },
  {
    numero: 9,
    nombre: "México",
    bandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/200px-Flag_of_Mexico.svg.png",
    puntos: 18,
    enlace: "https://www.fifa.com/mexico"
  },
  {
    numero: 10,
    nombre: "Holanda",
    bandera:
      "https://img.freepik.com/vector-gratis/ilustracion-bandera-holanda_53876-27103.jpg?w=360",
    puntos: 17,
    enlace: "https://www.fifa.com/holanda"
  }
];

const tablaPaises = document.getElementById("tabla-paises");

paises.forEach((pais, index) => {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${pais.numero}</td>
    <td>${pais.nombre}</td>
    <td><img src="${pais.bandera}" alt="${pais.nombre}" width="50"></td>
    <td>${pais.puntos}</td>
    <td><a href="${pais.enlace}" target="_blank">Ver más</a></td>
  `;
  tablaPaises.appendChild(fila);
});
