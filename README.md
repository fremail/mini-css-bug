# mini-css-extract-plugin bug

Steps to reproduce:

1. `npm i`
2. `npm run storybook_build`
3. 💩

In this case it will use mini-css-extract-plugin v0.5 and css-loader v4.3.

# The error

```
/Users/test/mini-css-test/node_modules/mini-css-extract-plugin/dist/index.js:77
    const resource = this._identifier.split('!').pop();
                                      ^

TypeError: Cannot read property 'split' of undefined
    at CssModule.nameForCondition (/Users/test/mini-css-test/node_modules/mini-css-extract-plugin/dist/index.js:77:39)
    at Function.checkTest (/Users/test/mini-css-test/node_modules/webpack/lib/optimize/SplitChunksPlugin.js:335:52)
    at Object.fn [as getCacheGroups] (/Users/test/mini-css-test/node_modules/webpack/lib/optimize/SplitChunksPlugin.js:272:35)
    at compilation.hooks.optimizeChunksAdvanced.tap.chunks (/Users/test/mini-css-test/node_modules/webpack/lib/optimize/SplitChunksPlugin.js:539:38)
    at SyncBailHook.eval [as call] (eval at create (/Users/test/mini-css-test/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:16)
    at SyncBailHook.lazyCompileHook (/Users/test/mini-css-test/node_modules/tapable/lib/Hook.js:154:20)
    at Compilation.seal (/Users/test/mini-css-test/node_modules/webpack/lib/Compilation.js:1336:38)
    at compilation.finish.err (/Users/test/mini-css-test/node_modules/webpack/lib/Compiler.js:675:18)
    at hooks.finishModules.callAsync.err (/Users/test/mini-css-test/node_modules/webpack/lib/Compilation.js:1261:4)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/test/mini-css-test/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:24:1)
    at AsyncSeriesHook.lazyCompileHook (/Users/test/mini-css-test/node_modules/tapable/lib/Hook.js:154:20)
    at Compilation.finish (/Users/test/mini-css-test/node_modules/webpack/lib/Compilation.js:1253:28)
    at hooks.make.callAsync.err (/Users/test/mini-css-test/node_modules/webpack/lib/Compiler.js:672:17)
    at _done (eval at create (/Users/test/mini-css-test/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at _err1 (eval at create (/Users/test/mini-css-test/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:32:22)
    at _addModuleChain (/Users/test/mini-css-test/node_modules/webpack/lib/Compilation.js:1185:12)

```

# Debug

In case you run `npm run storybook`, style-loader will be used instead of mini-css-extract-plugin and it will build without errors.

Another way to "fix" the issue -- downgrade css-loader to v3.6:

1. `npm i css-loader@3`
2. `npm run storybook_build`
3. 🍾
