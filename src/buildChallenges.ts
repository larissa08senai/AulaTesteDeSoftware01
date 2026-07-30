// ATENÇÃO, PROFESSOR: este arquivo contém 10 erros intencionais de TypeScript.
// O Vite em modo desenvolvimento transpila o código sem executar a checagem completa de tipos.
// Já o comando npm run build executa o TypeScript antes de gerar a versão de produção.

export type BuildChallengeData = {
  version: string
  visitors: number
  published: boolean
  tags: string[]
  rating: number
  owner: { name: string; age: number }
  colors: [string, string, string]
  onVisit: () => void
  birthYear: number
  weight: number
}

export const buildChallengeData: BuildChallengeData = {
  version: 2.0, // ERRO 1: deveria ser string
  visitors: '1200', // ERRO 2: deveria ser number
  published: 'sim', // ERRO 3: deveria ser boolean
  tags: ['jovi', 2026, 'berna'], // ERRO 4: elemento numérico em string[]
  rating: true, // ERRO 5: deveria ser number
  owner: { name: 'André', age: 'adulto' }, // ERRO 6: age deveria ser number
  colors: ['preto', 'branco'], // ERRO 7: tupla exige três itens
  onVisit: 'registrar acesso', // ERRO 8: deveria ser uma função
  birthYear: null, // ERRO 9: null não é number
  weight: undefined, // ERRO 10: undefined não é number
}
