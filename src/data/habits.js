import uid from 'uid'

export default [
  { text: 'Essen von zuhause mitgenommen', type: 'toggle', id: uid() },
  { text: 'Lokal eingekauft', type: 'toggle', id: uid() },
  { text: 'Mit dem Fahrrad zur Arbeit', type: 'toggle', id: uid() },
  { text: 'km Rad gefahren', type: 'count', id: uid() },
  { text: 'Gemüse ohne Plastik gekauft', type: 'toggle', id: uid() },
  { text: 'Obst ohne Plastik gekauft', type: 'toggle', id: uid() },
  { text: 'Müll getrennt', type: 'toggle', id: uid() },
  { text: 'Müll auf der Straße aufgehoben', type: 'toggle', id: uid() },
  { text: 'Doppelseitig ausgedruckt', type: 'toggle', id: uid() },
  { text: 'Einkaufstasche mitgenommen', type: 'toggle', id: uid() },
  { text: 'Übriges Essen eingefroren', type: 'toggle', id: uid() },
  { text: 'Wasser aus der Glasflasche getrunken', type: 'toggle', id: uid() }
]
