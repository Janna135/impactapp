import uid from 'uid'

export default [
  {
    text: 'Essen von zuhause mitgenommen',
    type: 'toggle',
    category: 'good',
    id: uid()
  },
  { text: 'Lokal eingekauft', type: 'toggle', category: 'good', id: uid() },
  {
    text: 'Mit dem Fahrrad zur Arbeit',
    type: 'toggle',
    category: 'good',
    id: uid()
  },
  { text: 'km Rad gefahren', type: 'count', category: 'good', id: uid() },
  {
    text: 'Gemüse/ Obst ohne Plastik gekauft',
    category: 'good',
    type: 'toggle',
    id: uid()
  },

  { text: 'Müll getrennt', type: 'toggle', category: 'good', id: uid() },
  {
    text: 'Müll auf der Straße aufgehoben',
    category: 'good',
    type: 'toggle',
    id: uid()
  },
  {
    text: 'Doppelseitig ausgedruckt',
    category: 'good',
    type: 'toggle',
    id: uid()
  },
  {
    text: 'Einkaufstasche mitgenommen',
    category: 'good',
    type: 'toggle',
    id: uid()
  },
  {
    text: 'Übriges Essen eingefroren',
    category: 'good',
    type: 'toggle',
    id: uid()
  },
  {
    text: 'Wasser aus der Glasflasche getrunken',
    category: 'good',
    type: 'toggle',
    id: uid()
  },
  {
    text: 'Lebensmittel weggeschmissen',
    category: 'bad',
    type: 'toggle',
    id: uid()
  },
  {
    text: 'Getränk im ToGo-Becher gekauft',
    category: 'bad',
    type: 'toggle',
    id: uid()
  },
  {
    text: 'Kurzstrecke mit dem Auto gefahren',
    category: 'bad',
    type: 'toggle',
    id: uid()
  },
  {
    text: 'Essen ToGo gekauft',
    category: 'bad',
    type: 'toggle',
    id: uid()
  }
]
