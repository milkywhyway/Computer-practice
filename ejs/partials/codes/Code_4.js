let num = Number(prompt('Let number 1-7'))

// команду вибору case;

switch (num) {
case 1:
  document.write('Понеділок')
  break
case 2:
  document.write('Вівторок')
  break
case 3:
  document.write('Середа')
  break
case 4:
  document.write('Четвер')
  break
case 5:
  document.write('П\'ятниця')
  break
case 6:
  document.write('Субота')
  break
case 7:
  document.write('Неділя')
  break
default:
  document.write('Помилка')
}

// команду if.

if (num === 1) {
  document.write('Понеділок')
} else {
  if (num === 2) {
    document.write('Вівторок')
  } else {
    if (num === 3) {
      document.write('Середа')
    } else {
      if (num === 4) {
        document.write('Четвер')
      } else {
        if (num === 5) {
          document.write('П\'ятниця')
        } else {
          if (num === 6) {
            document.write('Субота')
          } else {
            if (num === 7) {
              document.write('Неділя')
            } else {
              document.write('Помилка')
            }
          }
        }
      }
    }
  }
}        
