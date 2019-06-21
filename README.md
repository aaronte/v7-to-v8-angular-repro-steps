# Repro Repo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Repro Notes

- Start with an Angular Project v7
- Have a project structure that has a nested folder structure. i.e.
```
- Root/
    - angular.json
    - projects/
        - main-project/
            - dist/
            - tsconfig.json
            - src/
              - app
        - other-other-angular-project/
            - dist/
            - tsconfig.json    
            - src/
              - app
```
- Run update
```
ng update @angular/cli @angular/core
```
- Notice that in the `projects/main-project/tsconfig.json`, the `module: x` does not get updated to `module: esnext` which is required for the new dynamic import loading. 
- Even if the `tsconfig.json` is not in the root of the project, the `tsconfig.json` is defined in `angular.json`
