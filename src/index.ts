function dibujarGuiones(cantidad: number) {
  let i: number;
  let línea: string = "";
  for (i = 0; i <= cantidad; i++) {
    línea = línea + "-";
  }
  console.log(línea);
}

dibujarGuiones(20);
