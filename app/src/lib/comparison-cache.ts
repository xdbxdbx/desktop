import { IAheadBehind } from '../models/branch'
import { asDistinctRange } from '../lib/git'

export class ComparisonCache {
  private backingStore = new Map<string, IAheadBehind>()

  public set(from: string, to: string, value: IAheadBehind) {
    const key = asDistinctRange(from, to)
    this.backingStore.set(key, value)
  }

  public get(from: string, to: string) {
    const key = asDistinctRange(from, to)
    return this.backingStore.get(key) || null
  }

  public has(from: string, to: string) {
    const key = asDistinctRange(from, to)
    return this.backingStore.has(key)
  }

  public get size() {
    return this.backingStore.size
  }

  public clear() {
    this.backingStore.clear()
  }
}
