let ax, ay, bx, by, cx, cy
[ax, ay, bx, by, cx, cy] = [0, 0, 5, 4, -5, 6]

let a = ((bx-ax)**2+(by-ay)**2)**0.5
let b = ((cx-bx)**2+(cy-by)**2)**0.5
let c = ((ax-cx)**2+(ay-cy)**2)**0.5

const mb = 0.5*(2*(a**2)+2*(c**2)-(b**2))**0.5
const wc = (1/(a+b))*(a*b*(a+b+c)*(a+b-c))**0.5

document.write(`Медіана Mb = ${mb}<br>Бісектриса Wc = ${wc}`)
