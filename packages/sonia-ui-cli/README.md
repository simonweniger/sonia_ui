# Saas UI CLi

A CLI for adding components to your project.

## Usage

Use the `init` command to initialize dependencies for a new project.

The `init` command installs dependencies, configures the `Chakra UI` preset.

```bash
npx @sonia/cli init
```

## add

Use the `add` command to add components to your project.

The `add` command adds a component to your project and installs all required
dependencies.

```bash
npx @sonia/cli add [component]
```

### Example

```bash
npx @sonia/cli alert-dialog
```

You can also run the command without any arguments to view a list of all
available components:

```bash
npx @sonia/cli add
```

## Documentation

Visit https://beta.saas-ui.dev/docs/cli to view the documentation.

## Acknowledgements

Based on the work of https://ui.shadcn.com

## License

Licensed under the [MIT license](https://github.com/saas-js/saas-ui/LICENSE.md).
