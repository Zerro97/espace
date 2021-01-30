function getUnitVector(x1, y1, x2, y2) {
    let xvector = x2 - x1;
    let yvector = y2 - y1;
    let magnitude = Math.sqrt(Math.pow(xvector, 2) + Math.pow(yvector, 2));

    return { xunit: xvector / magnitude, yunit: yvector / magnitude };
}

function getRandomPos() {
  return {x: Math.random()*2000-1000, y: Math.random()*2000-1000}
}

export { getUnitVector, getRandomPos };