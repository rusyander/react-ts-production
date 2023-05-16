type Mods = Record<string, boolean | string>

export function classNames (
  cls: string,
  mods: Mods = {},
  additionals: string[] = []
): string {
  return [
    cls,
    ...additionals.filter(Boolean),
    ...Object.entries(mods)
      .filter(([classNames, value]) => Boolean(value))
      .map(([classNames, value]) => classNames)
  ].join(' ')
}

// classNames("remove-btn", { hovered: true, selectable: true, red: false }, [
//   "pdg",
// ]);
