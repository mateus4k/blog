---
date: 2020-04-15 22:00:00
title: Migrando um projeto React Native com Expo para TypeScript
description: Ganhando produtividade no desenvolvimento com o uso do TypeScript em projetos Expo!
category: Ts
background: "#007acc"
image: "/assets/img/expo-ts.png"
---

O [TypeScript](https://www.typescriptlang.org/) é um superset JavaScript que fornece tipos estáticos e funcionalidades poderosas em editores como o [Visual Studio Code](https://code.visualstudio.com/), como autocompletion e warnings que antecipam possíveis erros ainda durante o desenvolvimento. Para alguns, o TypeScript é simplesmente o JavaScript que escala!

Já o [Expo](http://expo.io/) é um conjunto de ferramentas e serviços criados em torno do React Native e plataformas nativas que ajudam a desenvolver e subir aplicações rapidamente para iOS, Android e aplicações web a partir da mesma base de código JavaScript ou TypeScript.

Por padrão utilizado com o JavaScript, veremos a seguir como migrar um projeto Expo já existente para Typescript.

![expo-ts](/assets/img/expo-ts.png)

### Integrando TypeScript no seu projeto existente

1. Crie o arquivo `tsconfig.json` na raiz de seu projeto

```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "jsx": "react-native",
    "lib": ["dom", "esnext"],
    "moduleResolution": "node",
    "noEmit": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  }
}
```

2. Instale o TypeScript e as bibliotecas de tipagem como dependências de desenvolvimento

```bash
yarn add -D @types/react @types/react-native typescript
```

3. Altere a extensão dos arquivos

Para componentes React, renomeie para `.tsx`

```bash
mv App.js App.tsx
```

Para arquivos **sem JSX**, renomeie para `.ts`

```bash
mv styles.js styles.ts
```

4. Hora de executar o projeto!

```bash
yarn start
```

5. Bom proveito! 😃
