export class Featier {
  private flags: Record<string, boolean>;

  constructor(flags: Record<string, boolean> = {}) {
    this.flags = flags;
  }

  isOn(flag: string): boolean {
    return !!this.flags[flag];
  }
}
