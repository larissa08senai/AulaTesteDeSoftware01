# Site do Jovi — Desafio de Testes, Git, Lint e Build

Este projeto foi preparado para uma atividade prática. O site abre normalmente com `npm run dev`, porém contém erros intencionais que impedem a aprovação do `npm run lint` e do `npm run build`.

## Cenário

A equipe recebeu o site institucional do Jovi. Visualmente, ele parece funcionar, mas ainda não passou pelas verificações técnicas necessárias para ser enviado ao ambiente de produção.

## Missão dos alunos

1. Clonar o repositório.
2. Instalar as dependências.
3. Executar e explorar o site.
4. Criar um repositório próprio e alterar o remoto.
5. Executar `npm run lint` e corrigir 10 problemas.
6. Executar `npm run build` e corrigir 10 problemas.
7. Validar novamente o site.
8. Registrar as mudanças com Git e enviar ao GitHub.

## Comandos iniciais

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run lint
npm run build
```

## Fluxo Git sugerido

```bash
git clone URL_DO_PROJETO
cd site-jovi-desafio
npm install
git remote -v
git remote remove origin
git remote add origin URL_DO_REPOSITORIO_DO_ALUNO
git branch -M main
git push -u origin main
git checkout -b correcao-testes
```

Após as correções:

```bash
git status
git add .
git commit -m "corrige problemas de lint e build"
git push -u origin correcao-testes
```

## Atenção ao professor

- Os 10 erros de lint estão concentrados em `src/lintChallenges.ts`.
- Os 10 erros de build estão concentrados em `src/buildChallenges.ts`.
- O arquivo de build foi ignorado pelo ESLint para manter os dois conjuntos separados.
- O TypeScript está com `noUnusedLocals` desativado para que os erros de lint não se transformem também em erros de build.
- Antes de entregar aos alunos, remova esta seção do README caso queira ocultar a localização dos problemas.

## Conteúdo sobre a raça

O conteúdo geral foi redigido com base no padrão e em materiais institucionais sobre o Boiadeiro de Berna: origem suíça, uso histórico como cão de fazenda, guarda, condução de gado e tração. A frase sobre ser uma das raças mais amáveis foi apresentada como descrição comum, e não como um título científico ou ranking oficial.
