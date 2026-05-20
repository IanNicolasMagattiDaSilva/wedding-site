export const wedding = {
  names: {
    person1: 'Ian',
    person2: 'Victoria',
  },

  date: '2026-11-07T16:00:00',
  dateDisplay: '07 de Novembro de 2027',
  location: 'São Paulo — SP',

  story: [
    {
      year: '2019',
      title: 'O início',
      text: 'Nos conhecemos em uma tarde de verão e desde então nunca mais nos separamos.',
    },
    {
      year: '2022',
      title: 'A primeira aventura',
      text: 'Viajamos juntos pela primeira vez e descobrimos que somos companheiros de vida.',
    },
    {
      year: '2025',
      title: 'O pedido',
      text: 'Em uma noite inesquecível, sob o céu estrelado, um novo capítulo começou.',
    },
  ],

  schedule: [
    { time: '16h00', event: 'Cerimônia' },
    { time: '17h30', event: 'Coquetel' },
    { time: '19h00', event: 'Recepção' },
    { time: '20h00', event: 'Jantar' },
    { time: '22h00', event: 'Festa' },
    { time: '01h00', event: 'Encerramento' },
  ],

  venues: {
    ceremony: {
      name: 'Igreja Nossa Senhora do Carmo',
      address: 'Rua do Carmo, 100 – Centro, São Paulo – SP',
      time: '16h00',
      mapsUrl: '#',
    },
    reception: {
      name: 'Espaço Vila Verde',
      address: 'Av. das Flores, 500 – Jardins, São Paulo – SP',
      time: '19h00',
      mapsUrl: '#',
    },
  },

  gifts: [
    { name: 'Lista Madeira Madeira', description: 'Casa e decoração', url: '#' },
    { name: 'Lista Casas Bahia', description: 'Eletrodomésticos', url: '#' },
  ],
}
