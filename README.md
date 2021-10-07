# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## 技术栈
1. Vue3
2. Vite2
3. TypeScript
4. Vue-router4
5. axios
6. Vuex
7. element-plus
8. scss

## vite.config.ts配置
### 配置alias
1 step.1 tsconfig.json
```json
{
  "baseUrl": "./",
  "paths": {
    "@/*": ["./src/*"]
  }
}
```
2 step.2 vite.config.ts
```typescript
  alias: {
    '@': '/src/'
  }
```

## 项目搭建
### 1.初始化
### 2. 引入全家桶：vue-router4、vuex
```shell
npm install vue-router@4 vuex -S
```
#### 2.1 vue-router
#### 2.2 vuex
