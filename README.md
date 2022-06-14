# luacraft 1.26
TypeScript definitions for Lua mod for Warcraft III 1.26. Provides declarations of native functions, functions from blizzard.j, constants.

## Installation 
Luacraft is distributed via npm. To connect it to the project - you need to initialize the project and then add the dependency to it by running the following command:
```sh
npm install -D luacraft-1.26
```

You also need to include a type definition in ``tsconfig.json``:

```diff
{
  "compilerOptions": {
+    "types": ["luacraft-1.26/all"]
  }
}
```


